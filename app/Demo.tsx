"use client";
import { useState, useEffect, ReactNode } from "react";
import Loader from "@/components/common/Loader";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: false,
  loading: () => <h1>Loading</h1>,
});
const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
  loading: () => <h1>Loading</h1>,
});

export default function Demo({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
