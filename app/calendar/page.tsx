import Calendar from "@/components/Calender";
import { Metadata } from "next";
import authService from "../auth/services/auth.service";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Calendar",
  description: "This is Calendar page",
};

const CalendarPage = async () => {
  // const router = useRouter();

  try {
    await authService.login();
    // const res = await authService.login();
    // console.log("🚀 ~ handleSubmit ~ res:", res);
  } catch (err: any) {
    console.log("errorrrrrrrrrrrrrrr", err);

    if (err.code === 401) {
      // router.push(`/auth/login`);
      redirect(`/auth/login`);
    }
  }

  return (
    <>
      <Calendar />
    </>
  );
};

export default CalendarPage;
