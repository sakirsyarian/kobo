import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="bg-[#3B2D1E] text-white">
      <div className="container">
        <div className="py-8 space-y-8">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="kobo logo" width={80} height={80} />
          </div>

          {/* menu */}
          <ul className="flex justify-center gap-8">
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

          <Separator />
          <p className="text-center">
            © {new Date().getFullYear()} Kobo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
