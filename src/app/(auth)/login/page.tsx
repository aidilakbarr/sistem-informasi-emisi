"use client";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LoginForm from "./loginForm";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/userSlice";
const LoginPage: React.FC = () => {
  const notifyError = () => {
    toast.error("Gagal login", {
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
  const handleLoginSubmit = async (email: string, password: string) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      const token = response.data.token;

      console.log(response);

      dispatch(login(response.data.name));

      localStorage.setItem("token", token);
      // Redirect to dashboard page
      router.push("/");
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleLoginSubmit} />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
