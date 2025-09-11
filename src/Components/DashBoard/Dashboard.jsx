import React from "react";
import StartGrid from "../../Components/DashBoard/StartGrid";
import ChartSection from "./ChartSection";
import TableSection from "./TableSection";
import ActivityFeed from "./ActivityFeed";

const Dashboard = ({ DarkMode }) => {
  return (
    <div className="space-y-6">
      <StartGrid DarkMode={DarkMode} />
      <ChartSection DarkMode={DarkMode}/>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection DarkMode={DarkMode}/>
        </div>
        <div>
          <ActivityFeed DarkMode={DarkMode}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
