import { Lora } from "next/font/google";
import { RiStarSFill } from "react-icons/ri";

const lora = Lora({
  subsets: ["latin"],
});

export default function Testimony() {
  return (
    <div id="testimonial" className="bg-[#2B1E0F] text-white">
      <div className="container">
        <div className="py-24 space-y-8 text-center">
          <div className="flex justify-center gap-3 text-xl text-[#F9C409]">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>

          <div className={lora.className}>
            <p className="font-semibold text-xl">
              Kopi Kobo sungguh luar biasa! Rasanya kaya dan kualitasnya
              terbaik.
            </p>
          </div>

          <div className="info">
            <p>Lukman Sandi</p>
            <p className="text-[#CFAF85]">Marketing Manager, Agricola</p>
          </div>
        </div>
      </div>
    </div>
  );
}
