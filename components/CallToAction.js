import Link from "next/link";
import { Lora } from "next/font/google";

import { Button } from "@/components/ui/button";

const lora = Lora({
  subsets: ["latin"],
});

export default function CallToAction() {
  return (
    <div className="bg-[#554535] text-white">
      <div className="container">
        <div className="py-24 grid lg:grid-cols-2 items-center gap-8">
          {/* left */}
          <div className={lora.className}>
            <h2 className="font-semibold text-3xl">
              Dapatkan <span className="text-[#FFE9B3]">Diskon 20%</span> untuk
              20 Pembelian Pertama!
            </h2>
          </div>

          {/* right */}
          <div className="flex lg:justify-end gap-3">
            <Button className="bg-[#8B5A2B] hover:bg-[#8B5A2B]">
              <Link href="https://tokopedia.com" target="_blank">
                Order Now
              </Link>
            </Button>
            <Button className="border border-[#BE8756] bg-inherit hover:bg-inherit text-[#BE8756]">
              <Link href="#keunggulan">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
