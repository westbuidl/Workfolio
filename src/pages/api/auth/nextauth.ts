import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        wallet: { label: "Wallet Address", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.wallet) {
          return null;
        }

        // Here you would typically verify the user exists in your database
        try {
          const response = await fetch(`${process.env.NEXTAUTH_URL}/api/profile/check-email`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              wallet: credentials.wallet,
            }),
          });

          const user = await response.json();

          if (user && user.isVerified) {
            return {
              id: credentials.wallet,
              email: credentials.email,
              wallet: credentials.wallet,
            };
          }
          return null;
        } catch (error) {
          console.error('Error in authorize:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.wallet = token.wallet as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.wallet = user.wallet;
      }
      return token;
    },
  },
});