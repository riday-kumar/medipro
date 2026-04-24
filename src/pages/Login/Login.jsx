import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import Width from "../../components/FixedWidth/Width";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleLogin } = useAuth();
  const handleLogin = (e) => {
    console.log(e);
  };

  const handleGoogleSingUp = () => {
    googleLogin()
      .then((res) => {
        toast.success("Sign in with Google", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        const errors = {
          "auth/email-already-in-use": "Email already exists",
          "auth/invalid-email": "Invalid email",
          "auth/weak-password": "Weak password",
        };
        toast.error(errors[err.code] || "something wrong");
      });
  };

  return (
    <div className="w-10/12 mx-auto">
      <form onSubmit={handleLogin} className="">
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
        <button
          onClick={handleGoogleSingUp}
          className="btn btn-secondary btn-outline text-secondary hover:text-white text-[18px]"
        >
          <FcGoogle className="text-2xl" /> Login With Google
        </button>
      </div>
      <p className="text-secondary text-center mt-5">
        Don't Have Account ?{" "}
        <Link to="/auth/register" className="font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
