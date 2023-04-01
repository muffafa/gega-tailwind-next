import mv1 from "../../../../public/mv1.jpg";
import mv2 from "../../../../public/mv2.jpg";
import mv3 from "../../../../public/mv3.jpg";
import mv4 from "../../../../public/mv4.jpg";
import mv5 from "../../../../public/mv5.jpg";
import mv6 from "../../../../public/mv6.jpg";
import Movie from "./Movie";

export default function Movies() {
  return (
    <div>
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
  );
}
