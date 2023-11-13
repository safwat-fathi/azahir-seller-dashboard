import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
// import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

import dynamic from "next/dynamic";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
import { Metadata } from "next";
import Demo from "./Demo";

export const metadata: Metadata = {
  title: {
    template: "%s | Azahir dashboard",
    default: "Azahir Seller",
  },
  description: "Azahir Seller Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  return (
    <html lang="en">
      <body>
        <Demo>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </Demo>
      </body>
    </html>
  );
}
