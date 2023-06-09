import Image, { StaticImageData } from "next/image";
import { NextPage } from "next";

interface Props {
  specialClassName?: string;
  newPhoto: StaticImageData;
  newTitle?: string;
  newDate?: string;
}

const New: NextPage<Props> = ({
  specialClassName = "",
  newPhoto,
  newDate = "ON NOW 01 2022",
  newTitle = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!"
}) => {
    specialClassName = `flex items-center group basis-3/4 md:basis-1/2 ${specialClassName}`;
    return (
    <div className={specialClassName}>
      <div className="basis-1/3 h-full">
        <Image
          src={newPhoto}
          alt="new 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-gega-gray basis-2/3 pl-8 group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
        <p className="text-sm">{newTitle}</p>
        <p className="text-xs tracking-tighter mt-2 font-bold font-gemunuLibre">
          {newDate}
        </p>
      </div>
    </div>
  );
};

export default New;

