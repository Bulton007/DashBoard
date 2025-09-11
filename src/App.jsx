import React, { useState } from "react";
import SlideBar from "./Components/Layout/SlideBar";
import Header from "./Components/Layout/Header";
import Dashboard from "./Components/DashBoard/Dashboard";
import UseMediaQuery from "./Components/Hooks/UseMediaQuery";

const App = () => {
  const [SlideBarCollaped, SetSlideBarCollaped] = useState(true);
  const [currentPage, SetcurrentPage] = useState("dashboard");
  const isSmallScreen = UseMediaQuery("(max-width: 640px)");
  const [DarkMode, SetDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        DarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="flex h-screen overflow-hidden">
        <SlideBar
          DarkMode={DarkMode}
          collapsed={SlideBarCollaped}
          onToggle={() => SetSlideBarCollaped(!SlideBarCollaped)}
          currentPage={currentPage}
          onPageChange={SetcurrentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            slideBarCollaped={SlideBarCollaped}
            onToggleSlidebar={() => SetSlideBarCollaped(!SlideBarCollaped)}
            DarkMode={DarkMode}
            SetDarkMode={SetDarkMode}
          />

          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6">
              {currentPage === "dashboard" &&
                !(SlideBarCollaped === false && isSmallScreen) && (
                  <Dashboard DarkMode={DarkMode} />
                )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
