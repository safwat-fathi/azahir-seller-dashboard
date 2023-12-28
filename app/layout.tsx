import { ReactNode } from "react";
import { Metadata, Viewport } from "next";

import "./globals.css";
import "./data-tables-css.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Azahir dashboard",
    default: "Azahir Seller",
  },
  description: "Azahir Seller Admin Dashboard",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
