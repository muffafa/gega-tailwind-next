import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import Logo from "../logo";

export default function Header() {
  return (
    <header className="bg-black py-6 lg:py-12 text-gega-gray uppercase">
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        <Logo/>
        <div className="block md:hidden">
            <div className="space-y-1 cursor-pointer pr-4">
                <div className="bg-gega-gray w-8 h-1 rounded-full"></div>
                <div className="bg-gega-gray w-8 h-1 rounded-full"></div>
                <div className="bg-gega-gray w-8 h-1 rounded-full"></div>
            </div>
        </div>
        <nav className="hidden md:flex justify-end flex-1">
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              HİZMETLERİMİZ
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              REFERANSLARIMIZ
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              İLETİŞİM
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              ADRES
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              HAKKIMIZDA
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
