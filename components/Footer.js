import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

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
          <ul className="flex justify-center gap-5 lg:gap-8">
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
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p>© {new Date().getFullYear()} Kobo. All rights reserved.</p>

            <div>
              <ul className="flex justify-center gap-5 lg:gap-8">
                <li>
                  <Link href="https://www.instagram.com/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="https://id-id.facebook.com/">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/">
                    <FaTiktok />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
