import Image, { StaticImageData } from "next/image";
import { NextPage } from "next";

interface Props {
    colSpan?: string;
    like: number;
    comment: number;
    date: string;
    userAvatar: StaticImageData;
    userName: string;
    blogText: string
}

const BlogCard: NextPage<Props> = ({like, comment, date, userAvatar, userName, blogText, colSpan = "col-span-6 md:col-span-3"}) => {
    const className: string = `${colSpan} border border-gega-red`;
  return(
    <div className={className}>
    <div className="border-b border-gega-red p-4 flex items-center justify-between">
      <h3>{userName}</h3>
      <Image src={userAvatar} alt="user1" className="rounded-full" />
    </div>
    <p className="p-4 text-sm">
      {blogText}
    </p>
    <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunuLibre text-xs">
      <p className="uppercase">{date}</p>
    </div>
  </div>
  );
}

export default BlogCard;