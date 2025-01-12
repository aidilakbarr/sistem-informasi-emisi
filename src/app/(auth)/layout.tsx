"use client";

import { setUser } from "@/redux/slices/userSlice";
import getUser from "@/utils/getUser";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUser();
        if (!user) {
          throw new Error("Token denied");
        }

        dispatch(setUser(JSON.stringify(user)));
        router.push("/home");
        return user;
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [dispatch, router]);
  return (
    <div className="flex justify-center items-center h-full bg-slate-300 py-12">
      {children}
    </div>
  );
}
