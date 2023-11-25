import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Logout from "./components/Logout";

const About = () => {
  // const cookieStore = cookies();

  // const token = cookieStore.get("token");
  // console.log("🚀 ~ About ~ token:", token);

  // if (!token) {
  //   console.log("no token found>>>>>>>>>>>>>>");

  //   redirect("/");
  // }

  return (
    <div>
      <h1>About page</h1>
      <Logout />
    </div>
  );
};

export default About;
