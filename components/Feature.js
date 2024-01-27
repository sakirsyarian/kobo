import Image from "next/image";

export default function Feature() {
  const features = [
    {
      title: "Kualitas adalah prioritas kami",
      description:
        "Di Kobo, kami berkomitmen untuk mendapatkan bahan baku terbaik, memastikan proses penyeduhan yang cermat, dan mempertahankan standar kontrol kualitas yang ketat. Tujuan kami adalah untuk memberikan pengalaman minum kopi terbaik kepada pelanggan kami.",
    },
    {
      title: "Teknik pembuatan kopi yang luar biasa",
      description:
        " Kami bangga dengan teknik penyeduhan kami yang luar biasa, yang telah disempurnakan melalui pengalaman bertahun-tahun. Mulai dari pemilihan biji kopi hingga suhu penyeduhan yang tepat, setiap langkah dilakukan dengan hati-hati untuk menghasilkan rasa dan aroma yang kaya di setiap botol kopi Kobo.",
    },
    {
      title: "Kontrol kualitas yang ketat",
      description:
        " Komitmen kami terhadap kualitas meluas hingga ke langkah-langkah kontrol kualitas yang ketat. Setiap batch kopi Kobo menjalani pengujian menyeluruh untuk memastikan konsistensi, kesegaran, dan keseimbangan rasa yang sempurna. Kami percaya bahwa setiap tegukan harus menjadi pengalaman yang menyenangkan bagi pelanggan kami.",
    },
  ];

  return (
    <div className="bg-[#fff]">
      <div className="container">
        <div className="py-24 grid grid-cols-2 items-center gap-8">
          {/* left */}
          <Image
            className="rounded-3xl"
            src="/product/product-2.png"
            alt="kobo product"
            width={500}
            height={500}
          />

          {/* right */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
                <p className="mt-5">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
