import Calendar from "@/components/Calender";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
  description: "This is Calendar page",
};

const CalendarPage = async () => {
  return (
    <>
      <Calendar />
    </>
  );
};

export default CalendarPage;
