import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiStarSFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <header className="container">
        <div className="border">
          {/* navbar */}
          <navbar className="flex items-center justify-between">
            {/* brand */}
            <div>
              <Image src="/logo.png" alt="kobo logo" width={60} height={60} />
            </div>

            {/* menu */}
            <ul className="flex gap-8">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

            {/* action */}
            <div>
              <Button>Shop</Button>
            </div>
          </navbar>
        </div>

        {/* hero */}
        <div className="text-center border">
          <h1>Temani Harimu yang Produktif Dengan Kobo!</h1>
          <p>
            Rasakan cita rasa yang kaya dan lembut dari kopi susu kemasan
            premium kami. Dibuat dengan bahan-bahan terbaik, kopi kami adalah
            suguhan yang menyenangkan bagi para pecinta kopi.
          </p>

          <div className="flex justify-center gap-3">
            <Button>Order Now</Button>
            <Button>Learn More</Button>
          </div>

          <div className="flex justify-center">
            <Image
              className="w-auto h-auto"
              src="/product/landscape-1.png"
              alt="kobo landscape"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </header>

      {/* content */}
      <main className="container">
        {/* highlight */}
        <div className="grid grid-cols-2">
          {/* left */}
          <div className="border">
            <h2>
              Nikmati Kobo Kapan Saja, Di Mana Saja dengan Kelezatan Kopi dalam
              Kemasan
            </h2>
            <p>
              Manjakan diri Anda dengan cita rasa yang kaya dari kopi premium
              kami, yang dikemas dalam kemasan yang nyaman untuk dinikmati kapan
              pun dan di mana pun Anda inginkan. Rasakan perpaduan sempurna
              antara rasa dan kenyamanan dengan Kopi.
            </p>
          </div>

          {/* right */}
          <div className="border">
            <Image
              className="w-auto h-auto"
              src="/product/product-1.png"
              alt="kobo product"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* feature */}
        <div className="grid grid-cols-2">
          {/* left */}
          <div className="border">
            <Image
              className="w-auto h-auto"
              src="/product/product-2.png"
              alt="kobo product"
              width={500}
              height={500}
            />
          </div>

          {/* right */}
          <div className="border">
            <div>
              <h3>Kualitas adalah prioritas kami</h3>
              <p>
                Di Kobo, kami berkomitmen untuk mendapatkan bahan baku terbaik,
                memastikan proses penyeduhan yang cermat, dan mempertahankan
                standar kontrol kualitas yang ketat. Tujuan kami adalah untuk
                memberikan pengalaman minum kopi terbaik kepada pelanggan kami.
              </p>
            </div>

            <div>
              <h3>Teknik pembuatan kopi yang luar biasa</h3>
              <p>
                Kami bangga dengan teknik penyeduhan kami yang luar biasa, yang
                telah disempurnakan melalui pengalaman bertahun-tahun. Mulai
                dari pemilihan biji kopi hingga suhu penyeduhan yang tepat,
                setiap langkah dilakukan dengan hati-hati untuk menghasilkan
                rasa dan aroma yang kaya di setiap botol kopi Kobo.
              </p>
            </div>

            <div>
              <h3>Kontrol kualitas yang ketat</h3>
              <p>
                Komitmen kami terhadap kualitas meluas hingga ke langkah-langkah
                kontrol kualitas yang ketat. Setiap batch kopi Kobo menjalani
                pengujian menyeluruh untuk memastikan konsistensi, kesegaran,
                dan keseimbangan rasa yang sempurna. Kami percaya bahwa setiap
                tegukan harus menjadi pengalaman yang menyenangkan bagi
                pelanggan kami.
              </p>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 border">
          <h2>
            Statistik Mengesankan Menunjukkan Kesuksesan Kobo Dalam Kemasan Kopi
          </h2>

          <div>
            <p>
              Dengan ribuan botol terjual dan tingkat kepuasan pelanggan yang
              tinggi, Kobo telah menjadi favorit di kalangan pecinta kopi.
            </p>

            <div className="flex">
              <div>
                <p>60%</p>
                <p>Peningkatan Kemitraan Ritel Karena Popularitas Kobo</p>
              </div>
              <div>
                <p>80%</p>
                <p>
                  Tingkat Kepuasan Pelanggan Mencerminkan Kualitas Kobo yang
                  Luar Biasa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* testimony */}
        <div className="text-center border">
          <div className="flex justify-center gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>

          <p>
            Kopi Kobo sungguh luar biasa! Rasanya kaya dan kualitasnya terbaik.
          </p>

          <div>
            {/* <Image
              className="rounded-full"
              src="/person.png"
              alt="kobo product"
              width={50}
              height={50}
            /> */}
            <p>John Doe</p>
            <p>Marketing Manager, ABC Company</p>
          </div>
        </div>

        {/* call to action */}
        <div className="grid grid-cols-2 items-center border">
          {/* left */}
          <div>
            <h2>Temukan Koleksi Kopi Kami</h2>
            <p>Rasayakan kekayaan rasa dari kopi botol kami</p>
          </div>

          {/* right */}
          <div>
            <Button>Order Now</Button>
            <Button>Learn More</Button>
          </div>
        </div>

        {/* product */}
        <div className="text-center border">
          <h2>Produk Kobo</h2>
          <p>
            Jelajahi beragam pilihan kopi yang ditawarkan dengan kemasan yang
            elegan
          </p>

          {/* list */}
          <div className="flex justify-center gap-5">
            <div>
              <Image
                src="/product/product-1.png"
                alt="kobo product"
                width={300}
                height={300}
              />

              <div className="flex justify-between">
                <p>Kobosus</p>
                <p>IDR 15K</p>
              </div>

              <p className="text-left">Kopi susu</p>
            </div>

            <div>
              <Image
                src="/product/product-2.png"
                alt="kobo product"
                width={300}
                height={300}
              />

              <div className="flex justify-between">
                <p>Kobosus</p>
                <p>IDR 15K</p>
              </div>

              <p className="text-left">Kopi susu</p>
            </div>

            <div>
              <Image
                src="/product/product-3.png"
                alt="kobo product"
                width={300}
                height={300}
              />

              <div className="flex justify-between">
                <p>Kobosus</p>
                <p>IDR 15K</p>
              </div>

              <p className="text-left">Kopi susu</p>
            </div>

            <div>
              <Image
                src="/product/product-4.png"
                alt="kobo product"
                width={300}
                height={300}
              />

              <div className="flex justify-between">
                <p>Kobosus</p>
                <p>IDR 15K</p>
              </div>

              <p className="text-left">Kopi susu</p>
            </div>
          </div>

          <Button>View All</Button>
        </div>

        {/* faq */}
        <div className="broder">
          <h2>FAQs</h2>
          <p>
            Temukan jawaban atas pertanyaan-pertanyaan paling umum mengenai
            produk Kobo, informasi diskon dan opsi pembelian
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Rasa apa saja yang tersedia?</AccordionTrigger>
              <AccordionContent>
                Kopi menawarkan berbagai macam rasa, termasuk klasik, moka,
                vanila, dan karamel. Lihat menu kami untuk pilihan lengkapnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Bagaimana saya bisa memesan?</AccordionTrigger>
              <AccordionContent>
                Anda dapat dengan mudah memesan botol kopi Kobo secara online
                melalui situs web kami. Cukup pilih rasa dan jumlah yang Anda
                inginkan, dan lanjutkan ke pembayaran.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Apakah botolnya bisa didaur ulang?
              </AccordionTrigger>
              <AccordionContent>
                Ya, botol kopi kami terbuat dari bahan yang dapat didaur ulang.
                Kami mendorong pelanggan kami untuk mendaur ulangnya setelah
                digunakan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div>
            <h3>Masih Punya Pertanyaan ?</h3>
            <p>Jangan ragu untuk menghubungi kami</p>
            <Button>Contact</Button>
          </div>
        </div>

        {/* partner */}
        <div className="border">
          <p className="text-center">
            Telah dipercaya oleh peritel dan distributor terkemuka di Indoneisa
          </p>

          <div className="grid grid-cols-4 items-center justify-center border">
            <Image
              src="/partner/tokopedia.png"
              alt="kobo partner"
              width={80}
              height={80}
            />
            <Image
              src="/partner/shopee.png"
              alt="kobo partner"
              width={80}
              height={80}
            />
            <Image
              src="/partner/blibli.png"
              alt="kobo partner"
              width={80}
              height={80}
            />
            <Image
              src="/partner/bukalapak.png"
              alt="kobo partner"
              width={80}
              height={80}
            />
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="container">
        <div className="border">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="kobo logo" width={80} height={80} />
          </div>

          {/* menu */}
          <ul className="flex justify-center gap-8">
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <Separator />
          <p className="text-center">© 2023 Kobo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
