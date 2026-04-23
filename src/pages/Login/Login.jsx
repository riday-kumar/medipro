import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import Width from "../../components/FixedWidth/Width";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-10/12 mx-auto">
      <form className="">
        <fieldset className="fieldset *:w-full text-[18px]">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-secondary text-white text-[18px] mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center">or</p>
        <button className="btn btn-secondary text-white text-[18px]">
          <FcGoogle className="text-2xl" /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
