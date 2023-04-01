import { NextPage } from "next";

interface Props{
  className?: string;
}

const Logo: NextPage<Props> = ({className = "pl-4 md:pl-0 text-4xl lg:text-6xl "}) =>{
  className += `font-bold text-transparent bg-gradient-to-r from-gega-red to-gega-gray bg-clip-text`
  return (
    <a
      href="#"
      className={className}
    >
      MARKANIZ
    </a>
  );
}
export default Logo;