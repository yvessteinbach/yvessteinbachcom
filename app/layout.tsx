import type { Metadata } from "next";

import "../assets/css/main.css";
import "../assets/css/nav.css";

import Nav from "../components/nav";

export const metadata: Metadata = {
  title: "yves steinbach - 2024",
  description: "Test Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        Test
      </body>
    </html>
  );
}
