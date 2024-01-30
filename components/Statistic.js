import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

export default function Statistic() {
  return (
    <div className="bg-[#3B2D1E] text-white">
      <div className="container">
        <div className="py-24 grid lg:grid-cols-2 items-center gap-8">
          <div className={lora.className}>
            <h2 className="font-semibold text-3xl leading-snug">
              Statistik Mengesankan Menunjukkan Kesuksesan
              <span className="text-[#FFE9B3]"> Kobo </span>Dalam Kemasan Kopi
            </h2>
          </div>

          <div className="space-y-8">
            <p>
              Dengan ribuan botol terjual dan tingkat kepuasan pelanggan yang
              tinggi, Kobo telah menjadi favorit di kalangan pecinta kopi.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="stats">
                <p className="font-semibold text-2xl text-[#CFAF85]">60%</p>
                <p className="mt-2">
                  Peningkatan Kemitraan Ritel Karena Popularitas Kobo
                </p>
              </div>

              <div className="stats">
                <p className="font-semibold text-2xl text-[#CFAF85]">80%</p>
                <p className="mt-2">
                  Tingkat Kepuasan Pelanggan Mencerminkan Kualitas Kobo yang
                  Luar Biasa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
