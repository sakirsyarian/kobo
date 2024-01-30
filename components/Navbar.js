import Link from "next/link";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="bg-[#2B1E0F] text-white">
      <div className="container">
        <navbar className="py-2 flex items-center justify-between">
          {/* brand */}
          <Image src="/logo.png" alt="kobo logo" width={70} height={70} />

          {/* menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#product">Product</Link>
            <Link href="#keunggulan">Keunggulan</Link>
            <Link href="#testimonial">Testimonial</Link>
            <Link href="#faq">FAQ</Link>
          </div>

          {/* action */}
          <Button className="hidden md:block bg-[#8B5A2B] hover:bg-[#8B5A2B]">
            <Link href="https://tokopedia.com" target="_blank">
              Shop
            </Link>
          </Button>

          {/* burger menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <LuMenu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent className="bg-[#2B1E0F] text-white border-none">
                <SheetHeader className="mt-8 text-left">
                  <SheetTitle className="mb-5 text-[#FFE9B3]">KOBO</SheetTitle>
                  <div className="flex flex-col gap-5 text-white">
                    <Link href="#product">Product</Link>
                    <Link href="#keunggulan">Keunggulan</Link>
                    <Link href="#testimonial">Testimonial</Link>
                    <Link href="#faq">FAQ</Link>
                    <Button className="bg-[#8B5A2B] hover:bg-[#8B5A2B]">
                      <Link href="https://tokopedia.com" target="_blank">
                        Shop
                      </Link>
                    </Button>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </navbar>
      </div>
    </div>
  );
}
