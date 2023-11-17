import { AuthOptions } from "next-auth";

export const authConfig: AuthOptions = {
  providers: [],
  pages: {
    signIn: "/login",
  },
};
