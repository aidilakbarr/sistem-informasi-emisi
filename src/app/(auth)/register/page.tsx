"use client";
import axios from "axios";
import RegisterForm from "./registerForm";
import { useRouter } from "next/navigation";
const RegisterPage: React.FC = () => {
  const router = useRouter();
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

      const token = response.data.token;

      localStorage.setItem("token", token);
      // Redirect to dashboard page
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-3/6">
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
};

export default RegisterPage;
