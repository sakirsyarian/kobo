import Image from "next/image";

export default function Partner() {
  return (
    <div className="bg-[#2B1E0F] text-white">
      <div className="container">
        <div className="py-24 space-y-14">
          <p className="text-center">
            Telah dipercaya oleh peritel dan distributor terkemuka di Indoneisa
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10">
            <Image
              className="mx-auto"
              src="/partner/tokopedia.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
            <Image
              className="mx-auto"
              src="/partner/shopee.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
            <Image
              className="mx-auto"
              src="/partner/blibli.png"
              alt="kobo partner"
              width={60}
              height={60}
            />
            <Image
              className="mx-auto"
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
