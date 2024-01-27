import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="bg-[#fff]">
      <div className="container">
        <div className="py-24 space-y-10">
          <div className="heading">
            <h2 className="font-semibold text-3xl">FAQs</h2>
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
              <h3 className="font-semibold text-xl">Masih punya pertanyaan?</h3>
              <p>Jangan ragu untuk menghubungi kami</p>
            </div>

            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
