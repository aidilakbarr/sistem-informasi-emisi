"use client";

import { ToastContainer, toast } from "react-toastify";
import FormResetPassword from "./forgotPassword";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setError, setSuccess } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const notifyError = () => {
    toast.error("Gagal Mengubah password", {
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
  const email = useSelector((state: RootState) => state.user.email);
  const HandleResetSubmit = async (otp: string, newPassword: string) => {
    try {
      await axios.post("/api/auth/reset-password", { otp, newPassword, email });
      router.push("/login");
      dispatch(setSuccess());
    } catch (error) {
      dispatch(setError("error"));
      console.error(error);
      notifyError();
    }
  };
  return (
    <div>
      <FormResetPassword onSubmit={HandleResetSubmit} />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
