"use client";
import axios from "axios";
import RegisterForm from "./registerForm";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "@/redux/slices/userSlice";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage: React.FC = () => {
  const notify = (text: string) => {
    toast.error(text || "Email verification sending... check your email", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const dispatch = useDispatch();

  const handleRegisterSubmit = async (
    username: string,
    email: string,
    password: string,
    confPassword: string
  ) => {
    try {
      const response = await axios.post("/api/auth/register", {
        username,
        email,
        password,
        confPassword,
      });

      notify(response.data.message);
      dispatch(setSuccess());
      // Redirect to dashboard page
      // router.push("/verify-email");
    } catch (error) {
      dispatch(setError("error"));
      console.error(error);
    }
  };
  return (
    <div className="w-3/6">
      <RegisterForm onSubmit={handleRegisterSubmit} />
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
