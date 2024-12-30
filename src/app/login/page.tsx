"use client";
import LoginForm from "./loginForm";
const LoginPage: React.FC = () => {
  const handleLoginSubmit = (email: string, password: string) => {
    console.log({ email, password });
  };
  return (
    <div>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default LoginPage;
