"use client";

import authService from "@/app/(auth)/services/auth.service";

const Logout = () => {
  const handleLogout = async () => {
    await authService.logout();

    console.log("logged out");
    // await authService.test();
    // console.log("test api");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
