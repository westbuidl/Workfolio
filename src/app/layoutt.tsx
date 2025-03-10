import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";


export const metadata: Metadata = {
  title: "CinthPay",
  description: "CinthPay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>CinthPay</title>
      <body>

        {children}
      </body>
    </html>
  );
}
