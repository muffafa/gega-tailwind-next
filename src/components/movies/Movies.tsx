import Image from "next/image";
import mv1 from "../../../public/mv1.jpg";
import mv2 from "../../../public/mv2.jpg";
import mv3 from "../../../public/mv3.jpg";
import mv4 from "../../../public/mv4.jpg";
import mv5 from "../../../public/mv5.jpg";
import mv6 from "../../../public/mv6.jpg";
import new1 from "../../../public/new1.jpg";
import new2 from "../../../public/new2.jpg";
import new3 from "../../../public/new3.jpg";
import new4 from "../../../public/new4.jpg";
import new5 from "../../../public/new5.jpg";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiPlay } from "@mdi/js";

export default function Movie() {
  return (
    <section className="py-24  bg-black">
      <div className="container flex flex-col lg:flex-row  lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-2/3">
          <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
            <h2 className="text-gega-red">
              <a href="#">Latest</a>
            </h2>
            <h2 className="text-gega-gray pl-2 hover:text-gega-red duration-500">
              <a href="#">Popular</a>
            </h2>
            <h2 className="text-gega-gray pl-2 hover:text-gega-red duration-500">
              <a href="#">Best</a>
            </h2>
          </div>
          <div className="flex flex-wrap">
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3">
              <Image
                src={mv1}
                alt="Oblivion"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3">
              <Image
                src={mv2}
                alt="Into The Wild"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Into The Wild</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3">
              <Image
                src={mv3}
                alt="Mulholland Drive"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Mulholland Drive</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3">
              <Image
                src={mv4}
                alt="2049"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">2049</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3">
              <Image
                src={mv5}
                alt="The Forest"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">The Forest</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3">
              <Image
                src={mv6}
                alt="Skyfall"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Skyfall</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
              <Image
                src={mv1}
                alt="Oblivion"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
              <Image
                src={mv2}
                alt="Into The Wild"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Into The Wild</h3>
                <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  mollitia?
                </p>
                <div className="flex absolute space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiPlay} size={1} />
                  </a>
                  <a href="#" className="hover:text-gega-red">
                    <Icon path={mdiArrowRight} size={1} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 pl-10 lg:pl-0">
          <h2 className="text-gega-gray mb-8">Hot News</h2>
          <div className="flex flex-row lg:flex-col lg:pb-16 lg:h-full justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image src={new1} alt="new 1" className="h-full w-full object-cover"/>
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">ON NOW 01 2022</p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image src={new2} alt="new 2" className="h-full w-full object-cover"/>
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">ON NOW 01 2022</p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image src={new3} alt="new 3" className="h-full w-full object-cover"/>
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">ON NOW 01 2022</p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image src={new4} alt="new 4" className="h-full w-full object-cover"/>
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">ON NOW 01 2022</p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
              <div className="basis-1/3 h-full">
                <Image src={new5} alt="new 5" className="h-full w-full object-cover"/>
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">ON NOW 01 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
