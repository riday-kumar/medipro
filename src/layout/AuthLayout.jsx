import React from "react";
import Width from "../components/FixedWidth/Width";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHeading from "../components/PageHeading/PageHeading";

const AuthLayout = () => {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname;
  return (
    <div>
      <Header></Header>
      <PageHeading
        pageName={
          path === "/auth/login"
            ? "Welcome Back!"
            : path === "/auth/register"
              ? "Please Sign Up"
              : "Welcome"
        }
      ></PageHeading>
      <div className="bg-[#fff7f4] py-20">
        <Width>
          <div className="lg:w-[70%] xl:w-[50%] mx-auto py-20 bg-white border-2 border-gray-200">
            <p className="text-center text-2xl font-bold text-secondary">
              {path === "/auth/register" ? "Register" : "Log In"}
            </p>
            <Outlet></Outlet>
          </div>
        </Width>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
