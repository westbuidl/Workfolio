import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "CinthPay",
  description: "CinthPay | Send money from the UK to Nigeria with confidence. Whether you're supporting loved ones, paying bills, or managing business transactions, CinthPay delivers your funds quickly and securely.",
  icons: {
    icon: [
      { url: '../images/favicon.png' },
      { url: '/icon?<generated>', type: 'image/png' }
    ],
    shortcut: ['/shortcut-icon?<generated>'],
    apple: [
      { url: '/apple-icon?<generated>', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}