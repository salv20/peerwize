import DashboardCalenderSection from "./DashboardCalenderSection";
import DashboardNavBar from "./DashboardNavBar";
import DashboardSlider from "./DashboardSlider";

const DashboardBody = () => {
  return (
    <div className="flex flex-col gap-[16px] w-ful">
      <DashboardNavBar />
      <DashboardCalenderSection />
      <DashboardSlider />
    </div>
  );
};

export default DashboardBody;
