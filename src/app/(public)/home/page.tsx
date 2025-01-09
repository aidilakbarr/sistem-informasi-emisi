import Image from "next/image";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content text-neutral-content text-center justify-between w-full -z-0 ">
          <figure className="w-96 h-96">
            <Image
              src={"/assets/img/hero.jpg"}
              alt="hero-img"
              width={400}
              height={400}
              className="z-0 "
            />
          </figure>
          <div className="max-w-3xl text-left">
            <h1 className="mb-5 text-5xl font-bold text-[#3E7B27] text-left">
              Ketahui Jejak Karbonmu, Mulai Perubahan untuk Bumi yang Lebih
              Baik.
            </h1>
            <button className="btn btn-outline btn-success  ">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
      <section className="px-12">
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          <span className="text-[#85A947]">Fitur</span> utama
        </h1>
        <div className="flex justify-between pb-12">
          <div className="flex w-full justify-around">
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">Perhitungan Emisi Karbon Harian</h2>
                <p>
                  Hitung jejak karbon harian Anda berdasarkan aktivitas yang
                  dilakukan.
                </p>
              </div>
            </div>
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">
                  Rekomendasi untuk Mengurangi Emisi
                </h2>
                <p>
                  Dapatkan saran untuk mengurangi emisi dan beralih ke gaya
                  hidup lebih ramah lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex w-full justify-around">
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">Laporan & Analisis Emisi</h2>
                <p>
                  Lihat tren jejak karbon Anda dengan laporan yang mudah
                  dipahami.
                </p>
              </div>
            </div>
            <div className="card glass w-5/12 bg-[#85A947]">
              <div className="card-body">
                <h2 className="card-title">Pencapaian dan Motivasi</h2>
                <p>
                  Capai target pengurangan emisi karbon dan dapatkan
                  penghargaan!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12">
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          <span className="text-[#85A947]">Fakta</span> menarik
        </h1>
        <div>
          <div className="flex justify-around pb-12">
            <div className="w-5/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#85A947] dark:text-white">
                Rata-rata jejak karbon individu di dunia sekitar 4,9 ton CO2 per
                tahun
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Jejak karbon bervariasi berdasarkan pola hidup, tetapi angka ini
                memberikan gambaran umum tentang seberapa besar emisi karbon
                yang dihasilkan oleh satu orang dalam setahun
              </p>
            </div>
            <div className="w-5/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#85A947] dark:text-white">
                Satu mobil yang berjalan sejauh 100 km menghasilkan sekitar 23
                kg CO2
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Kendaraan bermotor, terutama mobil pribadi, adalah kontributor
                utama emisi karbon. Penggunaan kendaraan pribadi yang berlebihan
                berkontribusi besar terhadap jejak karbon individu
              </p>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-5/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#85A947] dark:text-white">
                Dengan beralih ke transportasi publik, Anda dapat mengurangi
                jejak karbon hingga 30%
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Transportasi publik lebih efisien dalam mengangkut banyak orang
                dalam satu waktu, sehingga secara kolektif mengurangi emisi per
                individu
              </p>
            </div>
            <div className="w-5/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#85A947] dark:text-white">
                Penggunaan energi rumah tangga menyumbang hampir 40% dari jejak
                karbon individu di negara maju
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Memilih energi yang lebih efisien atau menggunakan sumber energi
                terbarukan di rumah dapat mengurangi emisi karbon secara
                signifikan
              </p>
            </div>
          </div>
          <div className="flex justify-around pt-12">
            <div className="w-5/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#85A947] dark:text-white">
                Mengurangi konsumsi daging merah dapat mengurangi jejak karbon
                Anda hingga 7,5 kg CO2 per minggu.
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Produksi daging, terutama daging sapi, memiliki jejak karbon
                yang tinggi karena memerlukan banyak sumber daya dan energi
                untuk peternakan dan distribusi
              </p>
            </div>
            <div className="w-5/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#85A947] dark:text-white">
                Membuang sampah secara bijak dan mendaur ulang dapat mengurangi
                jejak karbon Anda sebesar 1 ton CO2 per tahun
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Pengelolaan sampah yang lebih baik, seperti mengurangi limbah
                dan mendaur ulang, bisa membantu menurunkan emisi gas rumah kaca
                yang dihasilkan dari pembuangan sampah ke tempat pembuangan
                akhir
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center pb-4">
          <span className="text-[#85A947]">Langkah-langkah</span> penggunaan
        </h1>
        <div className="flex justify-between w-full">
          <figure className="w-3/6 justify-center items-center flex">
            <Image
              src={"/assets/img/langkah.jpg"}
              alt="illustration-img"
              width={600}
              height={400}
            />
          </figure>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-6">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end w-80">
                <time className="font-mono italic">1</time>
                <div className="text-lg font-black text-[#85A947]">
                  Langkah 1: Daftar / Masuk
                </div>
                Masukkan akun atau buat akun baru untuk melacak jejak karbon
                Anda.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10 w-80">
                <time className="font-mono italic">2</time>
                <div className="text-lg font-black text-[#85A947]">
                  Langkah 2: Isi Data Aktivitas Harian
                </div>
                Masukkan aktivitas harian yang terkait dengan konsumsi energi,
                transportasi, sampah, dan lainnya.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end w-80">
                <time className="font-mono italic">3</time>
                <div className="text-lg font-black text-[#85A947]">
                  Langkah 3: Lihat Hasil Perhitungan
                </div>
                Dapatkan laporan tentang total emisi karbon Anda setiap hari.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10 w-80">
                <time className="font-mono italic">4</time>
                <div className="text-lg font-black text-[#85A947]">
                  Langkah 4: Ikuti Rekomendasi
                </div>
                Lihat tips pengurangan emisi yang dapat Anda terapkan dalam
                kehidupan sehari-hari.
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
