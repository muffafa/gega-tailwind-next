import Image from "next/image";
import jeep from "../../../public/jeep.png";

export default function Matrix() {
  return (
    <section className="bg-gega-white">
      <div className="container flex items-center justify-center relative">
        <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
          <Image src={jeep} alt="matrix" className="lg:absolute lg:-bottom-14 w-1/2"/>
        </div>
        <div className="md:basis-2/3 lg:basis-1/2 pl-10 lg:pl-0">
          <div className="flex flex-col justify-center py-10 w-3/4 md:w-full">
            <h3 className="tracking-wider text-gega-melon">ADANA SEYHAN OTO EKSPERTİZ</h3>
            <h2 className="mb-2">MARKANIZ</h2>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem possimus tempora, quas natus expedita consequuntur omnis ullam minima ratione commodi?</p>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem possimus tempora, quas natus expedita consequuntur omnis ullam minima ratione commodi?</p>
            <h3 className="tracking-wider text-gega-red">2000+ FAZLA MÜŞTERİ</h3>
          </div>
          <div className="absolute -top-12 right-10 lg:right-0 w-20 h-20 md:w-24 md:h-24 bg-gega-melon rounded-full text-center flex items-center">
            <p className="font-gemunuLibre uppercasease font-bold md:text-xl text-gega-red rotate-45">ADANADA EN İYİSİ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
