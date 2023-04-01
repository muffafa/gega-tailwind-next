import Image, { StaticImageData } from "next/image";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiPlay} from "@mdi/js";
import { NextPage } from "next";

interface Props {
  specialClassName?: string;
  movieName: string;
  movieText: string;
  moviePhoto: StaticImageData;
}

const Movie: NextPage<Props> = ({
  specialClassName = "",
  movieName,
  movieText,
  moviePhoto,
}) => {
  specialClassName = `group overflow-hidden relative basis-1/3 md:basis-1/4 lg:basis-1/3 ${specialClassName}`;
  return (
    <div className={specialClassName}>
      <Image
        src={moviePhoto}
        alt="movie"
        className="group-hover:scale-110 group-hover:opacity-50 duration-500"
      />
      <div className="absolute px-6 bottom-2 md:bottom-8 text-xs md:text-base">
        <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">
          {movieName}
        </h3>
        <p className="text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-6 md:group-hover:mb-10 duration-500 ">
          {movieText}
        </p>
        <div className="flex absolute space-x-4 md:space-x-8 text-gega-gray opacity-0 -bottom-1 md:-bottom-2 group-hover:opacity-100 duration-500">
          <a href="#" className="hover:text-gega-red">
            <Icon path={mdiPlay} size={1} />
          </a>
          <a href="#" className="hover:text-gega-red">
            <Icon path={mdiArrowRight} size={1} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
