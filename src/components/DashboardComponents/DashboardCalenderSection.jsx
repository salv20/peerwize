"use client";
import { useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import DashboardProgress from "./DashboardProgress";
const localizer = momentLocalizer(moment);

const DashboardCalenderSection = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  const handleNext = () => {
    const nextMonth = new Date(date);
    nextMonth.setMonth(date.getMonth() + 1);
    setDate(nextMonth);
    setView("month");
  };
  const handleNavigate = (newDate) => {
    setDate(newDate);
  };
  const handlePrevious = () => {
    const previousMonth = new Date(date);
    previousMonth.setMonth(date.getMonth() - 1);
    setDate(previousMonth);
    setView("month");
  };
  const events = [
    {
      title: "Event 1",
      start: new Date(2024, 10, 15), // November 15, 2024
      end: new Date(2024, 10, 15),
    },
    {
      title: "Event 2",
      start: new Date(2024, 10, 20), // November 20, 2024
      end: new Date(2024, 10, 20),
    },
  ];

  return (
    <section className="lg:flex gap-[16px] lg:px-[16px] font-roboto mx-auto">
      <div className="grid gap-[16px] p-[30px] calander w-fit mx-auto rounded-[16px]">
        <div className="flex justify-between items-center md:w-[572px]">
          <div className="text-[24px] font-[900] ">
            {date.toLocaleString("default", { month: "long" })}&nbsp;
            {date.getFullYear()}
          </div>

          <button className="flex gap-[16px] ">
            <GoChevronLeft
              onClick={handlePrevious}
              className="text-[25px] text-[#AFAFAF]"
            />
            <GoChevronRight
              onClick={handleNext}
              className="text-[25px] text-[#000000]"
            />
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 316, width: 572 }}
          toolbar={false}
          date={date}
          onNavigate={handleNavigate}
          view={view}
          onView={setView}
        />
      </div>

      <DashboardProgress />
    </section>
  );
};

export default DashboardCalenderSection;
