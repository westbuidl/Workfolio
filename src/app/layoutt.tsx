import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";


export const metadata: Metadata = {
  title: "Hyacinth Afam Work Portfolio",
  description: "Hyacinth Afam Work Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Hyacinth Afam Work Portfolio</title>
      <body>

        {children}
      </body>
    </html>
  );
}
