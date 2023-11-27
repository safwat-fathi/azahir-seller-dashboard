import UserLayout from "@/lib/ui/layouts/UserLayout";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <UserLayout>
      <div className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
    </UserLayout>
  );
}
