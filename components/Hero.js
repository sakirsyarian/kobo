import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#2B1E0F] to-[#BE8756] text-white">
      <div className="container">
        <div className="pt-36 pb-24 space-y-8 text-center">
          <div className={montserrat.className}>
            <h1 className="font-bold text-5xl leading-tight">
              Temani Harimu yang <br className="hidden md:block" />
              Produktif Dengan
              <span className="text-[#FFE9B3]"> Kobo!</span>
            </h1>
          </div>
          <p>
            Rasakan cita rasa yang kaya dan lembut dari kopi susu kemasan
            premium kami. <br className="hidden md:block" />
            Dibuat dengan bahan-bahan terbaik, kopi kami adalah suguhan yang
            menyenangkan bagi para pecinta kopi.
          </p>

          <div className="flex justify-center gap-3">
            <Button className="bg-[#8B5A2B] hover:bg-[#8B5A2B]">
              <Link href="https://tokopedia.com" target="_blank">
                Order Now
              </Link>
            </Button>
            <Button className="border border-[#BE8756] bg-inherit hover:bg-inherit text-[#BE8756]">
              <Link href="#keunggulan">Learn More</Link>
            </Button>
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
