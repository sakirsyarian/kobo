import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Product() {
  const products = [
    {
      name: "Kobosus",
      price: "IDR 15K",
      description: "Kopi susu",
    },
    {
      name: "Koboren",
      price: "IDR 18K",
      description: "Kopi aren",
    },
    {
      name: "Kobosik",
      price: "IDR 12K",
      description: "Kopi klasik",
    },
    {
      name: "Koboci",
      price: "IDR 18K",
      description: "Kopi cappuccino",
    },
  ];

  return (
    <div id="product" className="bg-[#2B1E0F] text-white">
      <div className="container">
        <div className="py-24 space-y-12 text-center">
          <div className="heading">
            <div className={montserrat.className}>
              <h2 className="font-semibold text-3xl">
                Produk <span className="text-[#FFE9B3]"> Kobo</span>
              </h2>
            </div>
            <p className="mt-5">
              Jelajahi beragam pilihan kopi yang ditawarkan dengan kemasan yang
              elegan
            </p>
          </div>

          {/* list */}
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((product, index) => (
              <div key={index}>
                <Link href="https://tokopedia.com" target="_blank">
                  <Image
                    className="rounded-3xl"
                    src={`/product/product-${index + 1}.png`}
                    alt="kobo product"
                    width={300}
                    height={300}
                  />

                  <div className="mt-5 flex justify-between">
                    <p className="font-semibold text-lg">{product.name}</p>
                    <p className="font-semibold text-lg">{product.price}</p>
                  </div>

                  <p className="mt-2 text-left text-sm text-[#CFAF85]">
                    {product.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <Button className="border border-[#BE8756] bg-inherit hover:bg-inherit text-[#BE8756]">
            <Link href="https://tokopedia.com" target="_blank">
              View All
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
