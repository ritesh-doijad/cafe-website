"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { login } from "../redux/authSlice";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('riteshdoijad284@gmail.com');
  const [password, setPassword] = useState('pass123');
  const dispatch = useDispatch();
  const router = useRouter()
 
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "riteshdoijad284@gmail.com" && password === "pass123") {
      dispatch(login({ name: "Ritesh", email: "riteshdoijad284@gmail.com" }));
      toast.success("Login successful!");
      router.push('/') 
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#fbece1] flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left Side - Cake Image */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
          <Image
            src="/cafe-login.png"
            alt="Chocolate cake with blueberries"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#ffffff] rounded-xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold tracking-wider text-[#000000]">
                LUSH <span className="text-[#f8a04d]">LAYERS</span>
              </h1>
            </div>
            <p className="text-sm italic text-[#a30963] mt-2">
              Inspiring your sweet cravings
            </p>
          </div>

          <h2 className="text-xl font-medium text-center mb-6 text-[#333333]">
            Back for another slice of happiness?
          </h2>

          {/* Login Form */}
          <form className="space-y-2" onSubmit={handleLogin}>
            <div className="space-y-1">
              <label htmlFor="email" className="block font-medium text-[#333333]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#d9d9d9] p-2 focus:outline-none focus:ring-2 focus:ring-[#f8a04d] text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block font-medium text-[#333333]">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#d9d9d9] p-2 focus:outline-none focus:ring-2 focus:ring-[#f8a04d] text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#000000] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button className="w-full bg-[#f8a04d] hover:bg-[#f8a04d]/90 text-white py-3 rounded-md transition duration-300">
              Sign In
            </button>

            {/* OR Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="border-t border-[#d9d9d9] flex-grow"></div>
              <span className="px-4 text-[#afafaf]">or</span>
              <div className="border-t border-[#d9d9d9] flex-grow"></div>
            </div>

            {/* Social Login Buttons */}
            <button className="w-full border border-[#d9d9d9] py-2 rounded-md flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200">
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button className="w-full border border-[#d9d9d9] py-2 rounded-md flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200">
              <FaFacebook size={20} color="#1877F2" />
              Continue with Facebook
            </button>

            <p className="text-center text-sm mt-4 text-[#333333]">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-[#f8a04d] hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
