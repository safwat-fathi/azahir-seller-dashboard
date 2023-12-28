"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Buttonawd = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  };

  return (
    <div>
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("page", "4"), {
            scroll: false,
          });
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Buttonawd;
