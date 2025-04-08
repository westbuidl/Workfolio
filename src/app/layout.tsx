import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Hyacinth Afam Work Portfolio",
  description: "Hyacinth Afam Work Portfolio .",
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