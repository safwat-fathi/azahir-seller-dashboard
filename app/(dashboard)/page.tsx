import ECommerce from "@/components/Dashboard/E-commerce";
import { cookies } from "next/headers";

const Home = async () => {
  return (
    <>
      <ECommerce />
    </>
  );
};

export default Home;
