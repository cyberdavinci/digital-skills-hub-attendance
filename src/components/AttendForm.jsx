"use client";

import React, { useState } from "react";

const AttendForm = () => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  const handleAttend = () => {
    if (name !== "" && className !== "") {
      console.log(name, className);
    } else {
      console.log("One or more field is empty!");
      console.log(name, className);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div>
        <h1 className=" text-4xl text-slate-200 font-bold capitalize">
          Please write your name and select your class
        </h1>
      </div>
      <form action="" className="flex flex-col items-center gap-10 w-[60%]">
        <input
          type="text"
          placeholder="Full Name..."
          name="username"
          className="bg-transparent border-[4px] border-slate-200 p-3 text-xl rounded-xl text-slate-200 outline-none w-full "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          onChange={(e) => setClassName(e.target.value)}
          id="large"
          value={className}
          class="block w-full px-3 py-4  text-xl text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold cursor-pointer"
        >
          <option value="">Select Class</option>
          <option value="Digital Literacy">Digital Literacy</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Networking">Networking</option>
          <option value="Programming">Programming</option>
          <option value="Photography">Photography</option>
        </select>

        <input
          type="button"
          value="Attend"
          onClick={handleAttend}
          className="bg-black border-[4px] border-slate-200 p-3 text-xl rounded-xl text-slate-200 outline-none w-full cursor-pointer uppercase font-semibold"
        />
      </form>
    </div>
  );
};

export default AttendForm;
