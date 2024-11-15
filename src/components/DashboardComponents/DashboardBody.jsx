import DashboardCalenderSection from "./DashboardCalenderSection";
import DashboardNavBar from "./DashboardNavBar";

const DashboardBody = () => {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <DashboardNavBar />
      <DashboardCalenderSection />
    </div>
  );
};

export default DashboardBody;
