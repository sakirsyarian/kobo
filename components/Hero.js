import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-[#fff]">
      <div className="container">
        <div className="pt-28 pb-24 space-y-8 text-center">
          <h1 className="font-bold text-5xl">
            Temani Harimu yang <br className="hidden md:block" />
            Produktif Dengan
            <span className="font-bold"> Kobo!</span>
          </h1>
          <p>
            Rasakan cita rasa yang kaya dan lembut dari kopi susu kemasan
            premium kami. <br className="hidden md:block" />
            Dibuat dengan bahan-bahan terbaik, kopi kami adalah suguhan yang
            menyenangkan bagi para pecinta kopi.
          </p>

          <div className="flex justify-center gap-3">
            <Button>Order Now</Button>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="flex justify-center">
            <Image
              className="rounded-3xl"
              src="/product/landscape-1.png"
              alt="kobo landscape"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
