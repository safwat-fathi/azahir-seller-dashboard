import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Azahir dashboard | Not Found",
  description: "Azahir Seller Admin Dashboard",
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex-col gap-4">
        <h2>404 - Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="underline">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
