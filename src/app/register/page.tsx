"use client";
import RegisterForm from "./registerForm";
const RegisterPage: React.FC = () => {
  const handleRegisterSubmit = (
    username: string,
    email: string,
    password: string
  ) => {
    console.log({ username, email, password });
  };
  return (
    <div>
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
};

export default RegisterPage;
