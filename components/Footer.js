import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="bg-[#fff]">
      <div className="container">
        <div className="py-5 space-y-8">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="kobo logo" width={80} height={80} />
          </div>

          {/* menu */}
          <ul className="flex justify-center gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">Promo</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <Separator />
          <p className="text-center">© 2023 Kobo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
