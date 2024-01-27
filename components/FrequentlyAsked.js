import Link from "next/link";
import { Lora, Montserrat } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const lora = Lora({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function FrequentlyAsked() {
  const questions = [
    {
      question: "Apa saja variant yang tersedia?",
      answer:
        "Kopo menawarkan berbagai macam rasa, termasuk klasik, moka, vanila, dan karamel. Lihat menu kami untuk pilihan lengkapnya.",
    },
    {
      question: "Bagaimana saya bisa memesan?",
      answer:
        "Anda dapat dengan mudah memesan botol kopi Kobo secara online melalui situs web kami ataupun marketplace favorit Anda.",
    },
    {
      question: "Apakah ada penawaran promo?",
      answer:
        "Ya, kami menyediakan promo yang menarik dan berlaku untuk semua pelanggan.",
    },
    {
      question: "Apakah botolnya bisa didaur ulang?",
      answer: "Ya, semua botol kopi Kobo ini dapat didaur ulang.",
    },
  ];

  return (
    <div id="faq" className="bg-[#3B2D1E] text-white">
      <div className="container">
        <div className="py-24 space-y-10">
          <div className="heading">
            <div className={montserrat.className}>
              <h2 className="font-semibold text-3xl">FAQs</h2>
            </div>
            <p className="mt-5">
              Temukan jawaban atas pertanyaan-pertanyaan paling umum mengenai
              produk, variant dan opsi pembelian
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, index) => (
              <div key={index}>
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className={lora.className}>
                <h3 className="font-semibold text-xl">
                  Masih punya pertanyaan?
                </h3>
              </div>
              <p>Jangan ragu untuk menghubungi kami</p>
            </div>

            <Button className="border border-[#BE8756] bg-inherit hover:bg-inherit text-[#BE8756]">
              <Link href="https://web.whatsapp.com/" target="_blank">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
