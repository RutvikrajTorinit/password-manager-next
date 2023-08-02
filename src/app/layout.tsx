"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const cookies = Cookies.get("user");

  if (!cookies) {
    router.replace("/login");
  } else {
    router.replace("/home");
  }

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
