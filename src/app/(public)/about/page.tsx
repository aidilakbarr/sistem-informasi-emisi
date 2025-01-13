"use client";

import Image from "next/image";
import React from "react";

export default function Page() {
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
            className="flex justify-center items-center pr-8 rounded-3xl overflow-hidden"
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
    </div>
  );
}
