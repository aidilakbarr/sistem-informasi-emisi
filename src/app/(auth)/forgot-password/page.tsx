"use client";

import { ToastContainer, toast } from "react-toastify";
import FormResetPassword from "./forgotPassword";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "@/redux/slices/userSlice";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const notifyError = () => {
    toast.error("Gagal Mengirim Kode OTP", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const handleForgotPasswordSubmit = async (email: string) => {
    try {
      await axios.post("/api/auth/forgot-password", { email });
      router.push("/reset-password");
      dispatch(setSuccess());
    } catch (error) {
      dispatch(setError("error"));
      console.error(error);
      notifyError();
    }
  };
  return (
    <div>
      <FormResetPassword onSubmit={handleForgotPasswordSubmit} />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
