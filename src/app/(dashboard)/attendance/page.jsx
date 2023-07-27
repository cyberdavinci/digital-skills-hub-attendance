import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="header flex justify-between mb-5">
        <span className=" text-cyan-950 italic text-lg">July 7th, 2023</span>
        <h1 className="text-lg font-semibold">Today's Attendance</h1>
      </div>
      <div className="flex flex-col gap-y-10 w-full">
        <ul className="grid grid-cols-3 gap-3 place-items-center w-full">
          <li className="cls-btn">
            <span>Digital Literacy</span>
          </li>
          <li className="cls-btn">
            <span>Programming</span>
          </li>
          <li className="cls-btn">
            <span>Graphics Design</span>
          </li>
          <li className="cls-btn">
            <span>Videography</span>
          </li>
          <li className="cls-btn">
            <span>Networking</span>
          </li>
        </ul>
        {/*  */}
        <div>Students cards</div>
      </div>
    </div>
  );
};

export default page;
