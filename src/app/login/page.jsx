import React, { useState } from "react";
import Login from "@/components/Login";
const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordFieldChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="inner-main rounded-2xl  h-[768px] w-full overflow-hidden flex flex-col justify-center  items-center bg-white   gap-10">
      <div>
        <Image
          src={require("../../public/images/logo.png")}
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
      />
    </div>
  );
};

export default login;
