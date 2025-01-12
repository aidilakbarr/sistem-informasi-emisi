import LoginPage from "@/app/(auth)/login/page";
import { logout, setUser } from "@/redux/slices/userSlice";
import getUser from "@/utils/getUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUser();
        if (!user) {
          throw new Error("Token denied");
        }

        dispatch(setUser(JSON.stringify(user)));
        setIsLogin(true);
        return user;
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      dispatch(logout());
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar bg-base-100 absolute opacity-85 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-[#3E7B27]">
              <Link href={"/home"}>Beranda</Link>
            </li>
            <li className="hover:text-[#3E7B27]">
              <Link href={"/about"}>Tentang</Link>
            </li>
            <li className="hover:text-[#3E7B27]">
              <Link href={"/input"}>Input Kegiatan</Link>
            </li>
            <li className="hover:text-[#3E7B27]">
              <Link href={"/kontact"}>Kontak</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#3E7B27]">Emisiku</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-[#3E7B27]">
            <Link href={"/home"}>Beranda</Link>
          </li>
          <li className="hover:text-[#3E7B27]">
            <Link href={"/about"}>Tentang</Link>
          </li>
          <li className="hover:text-[#3E7B27]">
            <Link href={"/input"}>Input Kegiatan</Link>
          </li>
          <li className="hover:text-[#3E7B27]">
            <Link href={"/kontact"}>Kontak</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isLogin ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              <li>
                <Link href={"/profiles"}>Profile</Link>
              </li>
              <li>
                <Link href={"/setting"}>Setting</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-outline btn-success"
              onClick={() => {
                const modal = document.getElementById("my_modal_3");
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                }
              }}
            >
              Login
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                    ✕
                  </button>
                </form>
                <LoginPage
                  onLoginSuccess={() => {
                    const modal = document.getElementById(
                      "my_modal_3"
                    ) as HTMLDialogElement;
                    if (modal) modal.close();
                  }}
                />
              </div>
            </dialog>
          </div>
        )}
      </div>
    </div>
  );
}
