import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-full bg-slate-300 py-12">
      {children}
    </div>
  );
}
