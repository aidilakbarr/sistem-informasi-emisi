"use client";

import { setLoading } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface LoginFormProps {
  onSubmit: (otp: string, newPassword: string) => void;
}

const FormResetPassword: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [OTP, setOTP] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.user.loading);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setLoading());

    onSubmit(OTP, newPassword);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">OTP</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="123456"
                  onChange={(e) => setOTP(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="**********"
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormResetPassword;