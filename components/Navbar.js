import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="bg-[#2B1E0F] text-white">
      <div className="container">
        <navbar className="py-2 flex items-center justify-between">
          {/* brand */}
          <Image src="/logo.png" alt="kobo logo" width={70} height={70} />

          {/* menu */}
          <ul className="flex gap-8">
            <li>
              <Link href="#product">Product</Link>
            </li>
            <li>
              <Link href="#keunggulan">Keunggulan</Link>
            </li>
            <li>
              <Link href="#testimonial">Testimonial</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>

          {/* action */}
          <Button className="bg-[#8B5A2B] hover:bg-[#8B5A2B]">
            <Link href="https://tokopedia.com" target="_blank">
              Shop
            </Link>
          </Button>
        </navbar>
      </div>
    </div>
  );
}
