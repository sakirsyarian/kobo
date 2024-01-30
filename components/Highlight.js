import Image from "next/image";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

export default function Highlight() {
  return (
    <div className="bg-[#2B1E0F] text-white">
      <div className="container">
        <div className="py-24 grid lg:grid-cols-2 items-center gap-8">
          {/* left */}
          <div className="space-y-8">
            <div className={lora.className}>
              <h2 className="font-semibold text-3xl leading-snug">
                Nikmati Kesegaran Kopi
                <span className="text-[#FFE9B3]"> Kobo </span>
                Kapanpun dan Dimanapun
              </h2>
            </div>
            <p>
              Manjakan diri Anda dengan cita rasa yang kaya dari kopi premium
              kami, yang dikemas dalam kemasan yang nyaman untuk dinikmati kapan
              pun dan di mana pun Anda inginkan. Rasakan perpaduan sempurna
              antara rasa dan kenyamanan dengan Kopi.
            </p>
          </div>

          {/* right */}
          <div className="flex justify-end">
            <Image
              className="rounded-3xl"
              src="/product/product-1.png"
              alt="kobo product"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
