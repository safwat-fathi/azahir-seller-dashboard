"use client";
import { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";
import Loader from "@/lib/ui/common/Loader";
import SidebarLoader from "../common/SidebarLoader";

const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: false,
  loading: () => <SidebarLoader />,
});

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
  loading: () => <h1>Loading</h1>,
});

export default function UserLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {children}
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
