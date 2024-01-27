import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <div className="bg-[#fff]">
      <div className="container">
        <div className="py-24 space-y-12 text-center">
          <div className="heading">
            <h2 className="font-semibold text-3xl">
              Produk <span className="font-bold">Kobo</span>
            </h2>
            <p className="mt-5">
              Jelajahi beragam pilihan kopi yang ditawarkan dengan kemasan yang
              elegan
            </p>
          </div>

          {/* list */}
          <div className="flex justify-center gap-8">
            {products.map((product, index) => (
              <div key={index}>
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

                <p className="mt-2 text-left text-sm">{product.description}</p>
              </div>
            ))}
          </div>

          <Button variant="outline">View All</Button>
        </div>
      </div>
    </div>
  );
}
