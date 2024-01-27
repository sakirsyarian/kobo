import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="bg-[#fff]">
      <div className="container">
        <navbar className="py-2 flex items-center justify-between">
          {/* brand */}
          <Image src="/logo.png" alt="kobo logo" width={60} height={60} />

          {/* menu */}
          <ul className="flex gap-8">
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

          {/* action */}
          <Button>
            <Link href="/">Shop</Link>
          </Button>
        </navbar>
      </div>
    </div>
  );
}
