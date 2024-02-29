import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSigneInForm, setIsSignInForm] = useState(true);
    const isSigneInFormToggle = () => {
        setIsSignInForm(!isSigneInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bacground"
        ></img>
      </div>
      <form className="absolute bg-opacity-80 text-white bg-black p-12 w-3/12 my-36 mx-auto left-0 right-0 rounded-lg">
        <h1 className="font-bold text-3xl my-4  w-full">{isSigneInForm?"Sign In":"Sign Up"}</h1>
        {!isSigneInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        ></input>}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        ></input>
        <button className="p-4 my-4 w-full bg-red-700 rounded-md">{isSigneInForm?"Sign In":"Sign Up"}</button>
        <p className="cursor-pointer" onClick={isSigneInFormToggle}>{isSigneInForm?"New to Netflix? sign up now":"Already a user? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
