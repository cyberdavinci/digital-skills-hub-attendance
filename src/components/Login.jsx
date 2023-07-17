import React from "react";

const Login = ({
  username,
  password,
  handleUserNameChange,
  handlePasswordFieldChange,
}) => {
  return (
    <div className="flex flex-col  gap-10 ">
      <div>
        <h1 className=" text-3xl text-slate-200 font-semibold">
          Digital Skills Hub Attendance
        </h1>
      </div>
      <form action="" className="flex flex-col items-center gap-10">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="bg-transparent border-[4px] border-slate-200 p-3 text-xl rounded-xl text-slate-200 outline-none w-[300px]"
          value={username}
          onChange={handleUserNameChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="bg-transparent border-[4px] border-slate-200 p-3 text-xl rounded-xl text-slate-200 outline-none w-[300px]"
          value={password}
          onChange={handlePasswordFieldChange}
        />
        <input
          type="button"
          value="Login"
          className="bg-black border-[4px] border-slate-200 p-3 text-xl rounded-xl text-slate-200 outline-none w-[300px] cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
