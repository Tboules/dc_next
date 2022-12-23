import { PlusIcon } from "@heroicons/react/20/solid";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

import ApplicationSearch from "./ApplicationSearch";
import UserMenu from "./UserMenu";

type Props = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainAppNav = ({ setSidebarOpen }: Props) => {
  return (
    <>
      <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <button
          type="button"
          className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex flex-1 justify-between px-4">
          <ApplicationSearch />

          <div className="ml-4 flex items-center md:ml-6">
            {/* new button menu in the future */}
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-transparent bg-dcRed-400 p-1 text-white shadow-sm hover:bg-dcRed-600 focus:outline-none focus:ring-2 focus:ring-dcRed-200 focus:ring-offset-2"
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <UserMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAppNav;
