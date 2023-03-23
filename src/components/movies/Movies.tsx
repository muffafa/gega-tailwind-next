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
import Movie from "./Movie";

export default function Movies() {
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
            <Movie
              movieName="Oblivion"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,mollitia?"
              moviePhoto={mv1}
            />
            <Movie
              movieName="Into The Wild"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,mollitia?"
              moviePhoto={mv2}
            />
            <Movie
              movieName="MULHOLLAND DRIVE"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,mollitia?"
              moviePhoto={mv3}
            />
            <Movie
              movieName="2049"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              moviePhoto={mv4}
            />
            <Movie
              movieName="The Forest"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              moviePhoto={mv5}
            />
            <Movie
              movieName="Skyfall"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              moviePhoto={mv6}
            />
            <Movie
              movieName="Oblivion"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              moviePhoto={mv1}
              specialClassName="hidden md:block lg:hidden"
            />
            <Movie
              movieName="Into The Wild"
              movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              moviePhoto={mv2}
              specialClassName="hidden md:block lg:hidden"
            />
            
          </div>
        </div>
        <div className="basis-1/3 pl-10 lg:pl-0">
          <h2 className="text-gega-gray mb-8">Hot News</h2>
          <div className="flex flex-row lg:flex-col lg:pb-16 lg:h-full justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image
                  src={new1}
                  alt="new 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, dignissimos!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image
                  src={new2}
                  alt="new 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, dignissimos!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image
                  src={new3}
                  alt="new 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, dignissimos!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <Image
                  src={new4}
                  alt="new 4"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, dignissimos!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
              <div className="basis-1/3 h-full">
                <Image
                  src={new5}
                  alt="new 5"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, dignissimos!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
