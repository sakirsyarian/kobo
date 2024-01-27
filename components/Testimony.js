import { RiStarSFill } from "react-icons/ri";

export default function Testimony() {
  return (
    <div className="bg-[#fff]">
      <div className="container">
        <div className="py-24 space-y-8 text-center">
          <div className="flex justify-center gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>

          <p className="font-semibold text-xl">
            Kopi Kobo sungguh luar biasa! Rasanya kaya dan kualitasnya terbaik.
          </p>

          <div className="info">
            <p>Lukman Sandi</p>
            <p>Marketing Manager, Agricola</p>
          </div>
        </div>
      </div>
    </div>
  );
}
