import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Registration = () => {
  const [error, setError] = useState("");
  const { signUp, googleLogin } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    setError("");

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    } else if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }

    signUp(email, password)
      .then(() => {
        toast.success("Account Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        e.target.reset();
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
    <div>
      <div className="w-10/12 mx-auto">
        <form onSubmit={handleRegister} className="">
          {error && <p className="text-red-500 font-bold my-2">{error}</p>}
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
              Sign Up
            </button>
          </fieldset>
        </form>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">or</p>
          <button
            onClick={handleGoogleSingUp}
            className="btn btn-secondary text-white text-[18px]"
          >
            <FcGoogle className="text-2xl" /> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
