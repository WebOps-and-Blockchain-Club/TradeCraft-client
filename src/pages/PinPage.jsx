/* eslint-disable no-unused-vars */
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PinPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Please Enter Your Pin</h2>
      </div>
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-10">
        <div className="text-center mb-4 text-2xl font-bold">
          <p>Welcome back Mandeep</p>
        </div>

        <div className="flex justify-center p-6">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />

            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        </div>
        <div className="flex justify-center ">
        <Link to="/user"><Button className="hover:bg-blue-700" >Enter</Button></Link>
        </div>
        <div className="text-center p-2 mt-2">
          <button className="text-sm text-blue-400">Forgot PIN?</button>
        </div>
      </div>
    </div>
  );
};

export default PinPage;
