"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createTokenAction(token: string) {
  cookies().set({
    name: "token",
    value: token,
    // httpOnly: true,
    path: "/",
  });

  console.log("token created");
}

export async function destroyTokenAction() {
  console.log("token destroyed");

  cookies().delete("token");

  redirect("/login");
}

export async function getTokenAction() {
  const token = cookies().get("token");

  return token?.value ? token.value : null;
}
