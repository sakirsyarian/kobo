import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <div className="bg-[#fff]">
      <div className="container">
        <div className="py-24 grid grid-cols-2 items-center gap-8">
          {/* left */}
          <div className="space-y-5">
            <h2 className="font-semibold text-3xl">
              Temukan Koleksi Kopi Kami
            </h2>
            <p>Rasayakan kekayaan rasa dari kopi botol kami</p>
          </div>

          {/* right */}
          <div className="flex justify-end gap-3">
            <Button>Order Now</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
