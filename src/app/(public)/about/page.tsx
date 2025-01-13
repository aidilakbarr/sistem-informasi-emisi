"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface formData {
  name: string;
  email: string;
  message: string;
}

export default function Page() {
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
    <div className="pt-16 px-12">
      <section className="h-screen">
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          <span className="text-[#85A947]">Misi</span> kami
        </h1>
        <div className="flex justify-between w-full">
          <Image
            src={"/assets/img/about-1.jpg"}
            alt="illustration-img"
            width={400}
            height={400}
            layout="intrinsic"
            className="flex justify-center items-center pr-8 rounded-3xl"
          />
          <p className="w-fit h-[400px] font-medium text-xl text-justify text-gray-700 dark:text-gray-400 flex items-center">
            Misi Kami bertujuan untuk membantu individu memahami dampak
            lingkungan dari aktivitas sehari-hari mereka. Dalam dunia yang
            semakin sadar akan pentingnya keberlanjutan, aplikasi ini berfungsi
            untuk memberikan alat yang dibutuhkan agar setiap orang dapat
            mengukur, mengelola, dan mengurangi jejak karbon mereka. Kami
            percaya bahwa kesadaran adalah langkah pertama menuju perubahan.
            Oleh karena itu, kami mendesain sistem ini dengan tujuan untuk
            memberdayakan individu dalam mengambil keputusan yang lebih ramah
            lingkungan dan mengurangi emisi karbon. Kami berkomitmen untuk
            menyediakan platform yang mudah digunakan dengan data yang akurat
            dan relevan yang dapat membantu masyarakat membuat pilihan yang
            lebih baik, mengarah pada pengurangan jejak karbon global. Dengan
            mengukur emisi karbon dari kegiatan sehari-hari seperti
            transportasi, konsumsi energi, makanan, dan limbah, aplikasi ini
            memberikan gambaran yang jelas mengenai kontribusi seseorang
            terhadap perubahan iklim.
          </p>
        </div>
      </section>
      <section className="mb-12">
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          <span className="text-[#85A947]">Cara kerja</span> sistem
        </h1>
        <div className="flex justify-between pb-12">
          <div className="flex w-full justify-around">
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">1. Melacak Aktivitas</h2>
                <p>
                  Setiap individu memiliki kebiasaan yang mempengaruhi jejak
                  karbon mereka. Di dalam sistem ini, pengguna dapat memasukkan
                  berbagai jenis aktivitas yang mereka lakukan setiap hari,
                  seperti jenis transportasi yang digunakan (misalnya, mobil
                  pribadi, sepeda, transportasi umum), konsumsi energi (listrik,
                  gas), konsumsi makanan (terutama produk daging dan sayuran),
                  serta pembelian barang dan limbah yang dihasilkan. Aktivitas
                  ini akan dikumpulkan untuk memberikan gambaran komprehensif
                  tentang jejak karbon individu.
                </p>
              </div>
            </div>
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">2. Perhitungan Emisi</h2>
                <p>
                  Berdasarkan data yang dimasukkan oleh pengguna, sistem akan
                  menghitung emisi karbon yang dihasilkan oleh setiap aktivitas.
                  Perhitungan ini didasarkan pada data standar global mengenai
                  emisi karbon dari berbagai aktivitas, dengan mempertimbangkan
                  faktor-faktor seperti jarak tempuh transportasi, konsumsi
                  energi rumah tangga, dan produksi barang.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex w-full justify-around">
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">3. Melihat Hasil</h2>
                <p>
                  Setelah aktivitas dimasukkan dan dihitung, pengguna dapat
                  melihat hasil jejak karbon mereka dalam bentuk laporan yang
                  mudah dipahami. Laporan ini akan memberikan informasi tentang
                  berapa banyak karbon yang dihasilkan oleh setiap kategori
                  aktivitas (seperti transportasi, energi, makanan) dan
                  memberikan wawasan tentang bagaimana jejak karbon tersebut
                  berkontribusi pada total emisi mereka.
                </p>
              </div>
            </div>
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">4. Rekomendasi</h2>
                <p>
                  Aplikasi ini tidak hanya menunjukkan data, tetapi juga
                  memberikan saran yang dapat diikuti pengguna untuk mengurangi
                  jejak karbon mereka. Berdasarkan pola emisi, sistem dapat
                  memberikan tips ramah lingkungan seperti memilih transportasi
                  yang lebih hijau (seperti sepeda atau transportasi umum),
                  mengurangi konsumsi energi di rumah, mengadopsi pola makan
                  berbasis nabati, dan mengelola limbah dengan cara yang lebih
                  ramah lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          <span className="text-[#85A947]">Manfaat menggunakan</span> sistem
        </h1>
        <div className="flex justify-between pb-12">
          <div className="flex w-full justify-around">
            <div className="card glass w-5/12">
              <div className="card-body">
                <div className="flex justify-between w-full">
                  <div>
                    <h2 className="font-semibold text-xl pb-2 text-center text-[#85A947]">
                      Meningkatkan kesadaran
                    </h2>
                    <p className="w-fit font-medium text-xl text-justify text-gray-700 dark:text-gray-400 ">
                      Menggunakan sistem ini membantu individu memahami dampak
                      dari tindakan sehari-hari mereka terhadap lingkungan. Hal
                      ini meningkatkan kesadaran pengguna tentang pentingnya
                      keberlanjutan dan perubahan perilaku yang dapat mereka
                      lakukan untuk membantu mengurangi jejak karbon mereka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card glass w-5/12">
              <div className="card-body">
                <div className="flex justify-between w-full">
                  <div>
                    <h2 className="font-semibold text-xl pb-2 text-center text-[#85A947]">
                      Melacak Kemajuan
                    </h2>
                    <p className="w-fit font-medium text-xl text-justify text-gray-700 dark:text-gray-400 ">
                      Pengguna dapat memantau perkembangan mereka dari waktu ke
                      waktu. Dengan melacak jejak karbon setiap hari, mereka
                      bisa melihat bagaimana perubahan kecil dalam pola hidup
                      mereka dapat mengurangi total emisi karbon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-12">
          <div className="flex w-full justify-around">
            <div className="card glass w-5/12">
              <div className="card-body">
                <div className="flex justify-between w-full">
                  <div>
                    <h2 className="font-semibold text-xl pb-2 text-center text-[#85A947]">
                      Pilihan Ramah Lingkungan
                    </h2>
                    <p className="w-fit font-medium text-xl text-justify text-gray-700 dark:text-gray-400 ">
                      Sistem ini tidak hanya memberi tahu pengguna tentang jejak
                      karbon mereka, tetapi juga memberikan pilihan konkret yang
                      lebih ramah lingkungan. Misalnya, jika seorang pengguna
                      menghabiskan banyak waktu berkendara dengan mobil pribadi,
                      mereka akan mendapatkan rekomendasi untuk beralih ke
                      transportasi umum atau berjalan kaki.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card glass w-5/12">
              <div className="card-body">
                <div className="flex justify-between w-full">
                  <div>
                    <h2 className="font-semibold text-xl pb-2 text-center text-[#85A947]">
                      Membantu Bumi
                    </h2>
                    <p className="w-fit font-medium text-xl text-justify text-gray-700 dark:text-gray-400 ">
                      Setiap perubahan yang dilakukan oleh pengguna untuk
                      mengurangi jejak karbon mereka memiliki dampak langsung
                      terhadap pengurangan emisi global. Dengan bergabung dalam
                      gerakan ini, setiap individu dapat berkontribusi dalam
                      menjaga keseimbangan iklim bumi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          Bergabunglah dengan{" "}
          <span className="text-[#85A947] underline underline-offset-4">
            gerakan ini!
          </span>
        </h1>
        <div className="w-full flex justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl w-4/6">
            <figure className="w-5/12">
              <Image
                src="/assets/img/about-2.jpg"
                alt="Album"
                width={400}
                height={400}
              />
            </figure>
            <div className="card-body w-2/4">
              <h2 className="card-title">Bersama kami</h2>
              <p className="text-lg">
                Mulailah melacak jejak karbon Anda dan lihat seberapa besar
                kontribusi Anda dalam menjaga bumi. Dengan memahami dampak
                aktivitas sehari-hari terhadap lingkungan, kita dapat membuat
                keputusan yang lebih baik dan lebih ramah lingkungan.
                Bergabunglah dengan ribuan pengguna yang telah berkomitmen untuk
                mengurangi jejak karbon mereka dan berkontribusi pada masa depan
                yang lebih hijau!
              </p>
              <button className="btn btn-outline btn-success  ">
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative w-full my-12 rounded-3xl shadow-xl overflow-hidden p-24 bg-slate-200">
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
