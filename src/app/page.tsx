"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const UserPage = () => {
  const username = useSelector((state: RootState) => state.user);

  console.log(username);
  console.log(useSelector((state: RootState) => state.user));

  return (
    <div>{username ? <p>Welcome, {username?.user}</p> : <p>Loading</p>}</div>
  );
};

export default UserPage;
