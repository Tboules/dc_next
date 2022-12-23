import React from "react";
import { useState } from "react";

import MainAppNav from "./Nav";
import MainLayoutSideNav from "./SideNav";

const MainApplicationLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MainLayoutSideNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-1 flex-col md:pl-64">
        <MainAppNav setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainApplicationLayout;
