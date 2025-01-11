"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, setEmailVerifySuccess } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("email");
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setMessage("Token is missing in the URL");
      setLoading(false);
      return;
    }

    if (user) {
      router.push("/home");
    }

    console.log({ email });

    const verifyEmail = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-email",
          {
            email: email,
            token: token,
          }
        );

        if (response) {
          setMessage(message);
        } else {
          setMessage(message);
        }

        dispatch(setEmailVerifySuccess());
        dispatch(login(response.data.name));

        const JWTToken = response.data.JWTToken;

        localStorage.setItem("token", JWTToken);

        router.push("/home");
        localStorage.removeItem("email");
      } catch (error) {
        console.log(error);
        setMessage("Failed to verify email. Please try again.");
      } finally {
        setMessage("Email has verified");
        setLoading(false);
      }
    };

    verifyEmail();
  }, [email, message, searchParams, router, dispatch, user]);

  return (
    <div>
      <h1>Verify Your Email</h1>
      {loading ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
}
