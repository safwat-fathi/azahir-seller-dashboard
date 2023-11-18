import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Azahir dashboard",
    default: "Azahir Seller",
  },
  description: "Azahir Seller Admin Dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
