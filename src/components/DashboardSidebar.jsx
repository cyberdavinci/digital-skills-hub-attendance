import React, { useState } from "react";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import { GoChecklist, GoTasklist } from "react-icons/go";
import { SiGoogleclassroom } from "react-icons/si";
import { PiUsersFour } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

import { AiOutlineLogout } from "react-icons/ai";
const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "w-44" : "w-20"
      } h-full bg-slate-500 p-3 relative transition-all`}
    >
      {/* open and close icons */}
      <div className="absolute -right-[.7rem] text-3xl top-6 font-bold cursor-pointer ">
        {isOpen ? (
          <TfiControlBackward onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <TfiControlForward onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      <div className="flex gap-10 flex-col h-full">
        <h1>Logo</h1>

        <div className="flex flex-col justify-between items-center h-full ">
          <ul className="flex flex-col gap-8 justify-center">
            <li className="flex gap-2 ">
              <i className="text-2xl">
                <GoChecklist />
              </i>
              <span className={`${!isOpen ? "hidden" : "block"}`}>
                Attendace
              </span>
            </li>
            <li className="flex gap-2 ">
              <i className="text-2xl">
                <GoTasklist />
              </i>

              <span className={`${!isOpen ? "hidden" : "block"}`}>All</span>
            </li>
            <li className="flex gap-2 ">
              <i className="text-2xl">
                <SiGoogleclassroom />
              </i>

              <span className={`${!isOpen ? "hidden" : "block"}`}>Classes</span>
            </li>
            <li className="flex gap-2 ">
              <i className="text-2xl">
                <PiUsersFour />
              </i>

              <span className={`${!isOpen ? "hidden" : "block"}`}>
                Students
              </span>
            </li>
            <li className="flex gap-2 ">
              <i className="text-2xl">
                <GiTeacher />
              </i>

              <span className={`${!isOpen ? "hidden" : "block"}`}>
                Intructors
              </span>
            </li>
          </ul>

          <div className="flex gap-2 ">
            <i className="text-2xl">
              <AiOutlineLogout />
            </i>
            <span className={`${!isOpen ? "hidden" : "block"}`}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
