import { Lora } from "next/font/google";
import { RiStarSFill } from "react-icons/ri";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const lora = Lora({
  subsets: ["latin"],
});

export default function Testimony() {
  const testimonials = [
    {
      name: "Lukman Sandi",
      role: "Marketing Manager",
      message:
        "Kopi Kobo sungguh luar biasa! Rasanya kaya dan kualitasnya terbaik.",
    },
    {
      name: "Angga Dwi Atmaja",
      role: "Content Creator",
      message:
        "Berkat kepraktisan Kobo yang bisa dibawa mudah, eksplorasi konten traveling saya di NTT dan Maluku bisa tetap maksimal meski di tengah jalan. Saking cintanya, botol bekasnya saya bawa jadi oleh-oleh!",
    },
    {
      name: "Andi Setiawan",
      role: "Architect",
      message:
        "Sebagai arsitek yang kerap bepergian ke lokasi proyek, Kobo jadi teman setia yang membantu saya tetap fokus dan penuh ide kreatif berkat kick kafeinnya.",
    },
  ];

  return (
    <div id="testimonial" className="bg-[#2B1E0F] text-white">
      <div className="container">
        <div className="py-24 text-center">
          <Carousel>
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="cursor-pointer space-y-8">
                  <div className="flex justify-center gap-3 text-xl text-[#F9C409]">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>

                  <div className={lora.className}>
                    <p className="font-semibold text-lg lg:text-xl">
                      {item.message}
                    </p>
                  </div>

                  <div className="info">
                    <p>{item.name}</p>
                    <p className="text-[#CFAF85]">{item.role}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
