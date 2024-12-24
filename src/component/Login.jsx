import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/Authprovider";
import Googleimage from "../assets/bookimages/googleimage.jpeg";

function Login() {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        alert("User logged in successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
        setError(errorMessage);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        alert("User signed in with Google successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                {/* Didplay error message for incorrect email or password */}
                {error? <p className="text-red-500"> Incorrect email or password</p>:""}
                <p>
                  Don't Have an account?{" "}
                  <Link to="/signup" className="text-blue-800 underline">
                    Sign up
                  </Link>{" "}
                  here
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Login
                  </button>
                </div>
                <hr />
                <div>
                  <button onClick={handleRegister}>
                    <img
                      src={Googleimage}
                      alt="google image"
                      className="w-12 h-12 inline-block rounded-full"
                    />
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
