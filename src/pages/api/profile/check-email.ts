import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// Define response types
interface SuccessResponse {
  isVerified: boolean;
  email?: string;
  userData?: UserData | null;
  message?: string;
}

interface UserData {
  id: string;
  email: string | null;
  emailVerified: boolean;
  walletAddress: string | null;
  name: string | null;
  username: string | null;
  bio: string | null;
  website: string | null;
  twitter: string | null;
  linkedin: string | null;
  discord: string | null;
  jobTitle: string | null;
  skills: string[] | null;
  jobDescription: string | null;
  portfolio: string | null;
  profileImageUrl: string | null;
  bannerImageUrl: string | null;
}

interface ErrorResponse {
  message: string;
  error?: string;
}

// Validation schemas
const emailSchema = z
  .string()
  .email()
  .transform(email => email.toLowerCase())
  .optional();

const walletSchema = z
  .string()
  .min(1, 'Wallet address is required')
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid wallet address format')
  .optional();

const querySchema = z.object({
  email: emailSchema,
  wallet: walletSchema
}).refine(data => data.email || data.wallet, {
  message: "At least one parameter (email or wallet) must be provided"
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // If no query parameters are provided, return early with clear message
    if (!req.query.email && !req.query.wallet) {
      return res.status(400).json({
        isVerified: false,
        message: 'Please provide either an email address or wallet address'
      });
    }

    // Validate query parameters
    const validationResult = querySchema.safeParse({
      email: req.query.email,
      wallet: req.query.wallet
    });

    if (!validationResult.success) {
      return res.status(400).json({
        message: 'Validation error',
        error: validationResult.error.errors[0].message
      });
    }

    const { email, wallet } = validationResult.data;

    // Case 1: Only wallet provided - check for any verified email
    if (wallet && !email) {
      const user = await prisma.user.findUnique({
        where: { walletAddress: wallet }
      });

      if (user?.emailVerified) {
        return res.status(200).json({
          isVerified: true,
          email: user.email,
          userData: user
        });
      }
      return res.status(200).json({
        isVerified: false,
        message: 'No verified email found for this wallet address'
      });
    }

    // Case 2: Both email and wallet provided - check specific combination
    if (email && wallet) {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
          walletAddress: wallet,
          emailVerified: true
        }
      });

      if (user) {
        return res.status(200).json({
          isVerified: true,
          userData: user
        });
      }
      return res.status(200).json({
        isVerified: false,
        message: 'No verified user found with this email and wallet combination'
      });
    }

    // Case 3: Only email provided
    if (email && !wallet) {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
          emailVerified: true
        }
      });

      if (user) {
        return res.status(200).json({
          isVerified: true,
          userData: user
        });
      }
      return res.status(200).json({
        isVerified: false,
        message: 'No verified user found with this email'
      });
    }

    // Default case (should never reach here due to validation)
    return res.status(200).json({
      isVerified: false,
      message: 'No matching user found'
    });

  } catch (error) {
    console.error('Error in verification API:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });

  } finally {
    await prisma.$disconnect();
  }
}