"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
interface formData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const notify = (message: string, isSuccess: boolean) => {
    if (isSuccess) {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/send-message",
        formData
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      notify(response.data.message, true);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        console.log(error);
        // notify(error.response?.data.error[0].message, false);
      } else if (error instanceof Error) {
        console.log(error);
        // notify(error.message, false);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };
  return (
    <div>
      <div className="pt-16"></div>
      <section>
        <div className="relative w-full rounded-3xl shadow-xl overflow-hidden px-24 py-12 bg-slate-200">
          <div className="absolute inset-y-0 right-0 bg-[#183A4A] w-[30%] h-full"></div>
          <div className="relative z-10 flex justify-between items-center w-full">
            <div className="w-2/5">
              <h1 className="text-5xl text-black font-extrabold">
                Kontak <span className="text-[#85A947]">Kami</span>
              </h1>
              <p className="mt-4 font-sans font-medium">
                Kami ingin mendengar dari Anda! Jika Anda memiliki pertanyaan
                atau saran, jangan ragu untuk menghubungi kami. Kami juga
                menyediakan informasi tambahan di bawah ini untuk membantu Anda
                lebih memahami aplikasi kami.
              </p>
              <form className="my-8" onSubmit={onSubmit}>
                <div className="form-control">
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      name="name"
                      type="text"
                      className="grow"
                      placeholder="Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="form-control py-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      name="email"
                      type="email"
                      className="grow"
                      placeholder="Email*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="flex flex-col gap-2">
                    <textarea
                      name="message"
                      className="input input-bordered resize-none h-48 py-4 px-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pesan Anda..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-success bg-[#85A947] hover:bg-[#5f7c2c] text-white"
                    type="submit"
                    disabled={isLoading}
                  >
                    SEND
                  </button>
                </div>
              </form>
              <div className="flex justify-between">
                <div className="flex">
                  <Image
                    src={"/assets/img/phone-svg.svg"}
                    alt="email-icon"
                    layout="intrinsic"
                    width={40}
                    height={40}
                  />
                  <div className="items-center flex flex-col px-4">
                    <div className="font-bold uppercase text-sm w-full">
                      Phone
                    </div>
                    <div>085647224564</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <Image
                      src={"/assets/img/email-svg.svg"}
                      alt="email-icon"
                      layout="intrinsic"
                      width={40}
                      height={40}
                    />
                    <div className="items-center flex flex-col px-4">
                      <div className="font-bold uppercase text-sm w-full">
                        Email
                      </div>
                      <div>aidilakbr95@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-3/5 h-[400px] ml-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83755.18469782759!2d121.51362630071856!3d-4.399144188612954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbd55001c0252bb%3A0xb828c29ac5df97e0!2sKos%20Family%2001!5e0!3m2!1sid!2sid!4v1736750445218!5m2!1sid!2sid"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
