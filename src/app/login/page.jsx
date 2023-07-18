"use client";

import React, { useState } from "react";
import Login from "@/components/Login";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  // console.log(pathName);

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordFieldChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    if (username === "user" && password === "attend-user") {
      router.push("/attend");
      return;
    }

    if (username === "admin-dash" && password === "dash-admin") {
      router.push("/dashboard");
    }

    return;
  };

  return (
    <div className="inner-main   h-screen w-full overflow-hidden flex flex-col justify-center  items-center bg-[#1A1A1A]   gap-10">
      <div>
        <Image
          src={require("../../../public/images/logo.png")}
          width={400}
          height={200}
          className="rounded-xl"
        />
      </div>
      <Login
        username={username}
        password={password}
        handlePasswordFieldChange={handlePasswordFieldChange}
        handleUserNameChange={handleUserNameChange}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default login;
