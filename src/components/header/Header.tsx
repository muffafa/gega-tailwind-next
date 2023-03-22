import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

export default function Header() {
  return (
    <header className="bg-black py-6 lg:py-12 text-gega-gray uppercase">
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        <a
          href="#"
          className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-gega-red to-gega-gray bg-clip-text"
        >
          Gega
        </a>
        <div className="block md:hidden">
            <div className="space-y-1 cursor-pointer pr-4">
                <div className="bg-gega-gray w-8 h-1 rounded-full"></div>
                <div className="bg-gega-gray w-8 h-1 rounded-full"></div>
                <div className="bg-gega-gray w-8 h-1 rounded-full"></div>
            </div>
        </div>
        <nav className="hidden md:flex justify-between flex-1">
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a
              href="#"
              className="hover:text-gega-melon transition duration-200"
            >
              Movies
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-200"
            >
              Celebrities
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-200"
            >
              News
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-200"
            >
              About
            </a>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <form>
              <div className="group border-r px-4 mx-4 py-1 border-gega-red">
                <input
                  type="text"
                  className=" opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none  
                  w-24 lg:w-44 transition duration-200"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-200">
                  <Icon
                    path={mdiMagnify}
                    size={1}
                    className="group-hover:text-gega-red transition duration-200"
                  />
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
              <a href="#">Login</a>
              <a
                href="#"
                className="bg-gega-red px-3 py-1 hover:bg-rose-600
                cursor-pointer transition duration-200 whitespace-nowrap
                "
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
