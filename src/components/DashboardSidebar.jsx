"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      } h-full bg-slate-500 py-3 relative transition-all rounded-lg`}
    >
      {/* open and close icons */}
      <div className="absolute -right-[.7rem] text-3xl top-6 font-bold cursor-pointer ">
        {isOpen ? (
          <TfiControlBackward onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <TfiControlForward onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      <div className="flex gap-y-10 flex-col h-full w-full">
        <h1 className="text-center">Logo</h1>

        <div className="flex flex-col justify-between items-center h-full w-full  ">
          <ul className="flex flex-col gap-y-8 justify-center items-center w-full">
            <Link href={"attendance"}>
              <li className="flex gap-2 nav-item">
                <i className="text-2xl">
                  <GoChecklist />
                </i>
                <span className={`${!isOpen ? "hidden" : "block"}`}>
                  Attendace
                </span>
              </li>
            </Link>
            <Link href={"all-attendance"}>
              <li className="flex gap-2 nav-item">
                <i className="text-2xl">
                  <GoTasklist />
                </i>

                <span className={`${!isOpen ? "hidden" : "block"}`}>All</span>
              </li>
            </Link>
            <Link href={"classes"}>
              <li className="flex gap-2 nav-item">
                <i className="text-2xl">
                  <SiGoogleclassroom />
                </i>

                <span className={`${!isOpen ? "hidden" : "block"}`}>
                  Classes
                </span>
              </li>
            </Link>
            <Link href={"students"}>
              <li className="flex gap-2 nav-item">
                <i className="text-2xl">
                  <PiUsersFour />
                </i>

                <span className={`${!isOpen ? "hidden" : "block"}`}>
                  Students
                </span>
              </li>
            </Link>
            <Link href={"instructors"}>
              <li className="flex gap-2 nav-item">
                <i className="text-2xl">
                  <GiTeacher />
                </i>

                <span className={`${!isOpen ? "hidden" : "block"}`}>
                  Intructors
                </span>
              </li>
            </Link>
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
