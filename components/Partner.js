import Image from "next/image";

export default function Partner() {
  return (
    <div className="bg-[#2B1E0F] text-white">
      <div className="container">
        <div className="py-24 space-y-14">
          <p className="text-center">
            Telah dipercaya oleh peritel dan distributor terkemuka di Indoneisa
          </p>

          <div className="flex items-center justify-around">
            <Image
              src="/partner/tokopedia.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
            <Image
              src="/partner/shopee.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
            <Image
              src="/partner/blibli.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
            <Image
              src="/partner/bukalapak.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
