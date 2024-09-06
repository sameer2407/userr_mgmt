import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const UserPage = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default UserPage;
