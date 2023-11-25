"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createToken() {
  cookies().set({
    name: "token",
    value: "23|awdawdad",
    // httpOnly: true,
    path: "/",
  });

  console.log("token created");
}

export async function destroyToken() {
  console.log("token destroyed");

  cookies().delete("token");

  redirect("/login");
}
