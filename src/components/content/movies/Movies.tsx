import brake from "../../../../public/brake.jpeg";
import gearbox from "../../../../public/gearbox.jpeg";
import speedometre from "../../../../public/speedometer.jpeg";
import suspension from "../../../../public/suspension.jpeg";
import engine from "../../../../public/engine.jpeg";
import paint from "../../../../public/paint.jpeg";
import Movie from "./Movie";

export default function Movies() {
  return (
    <div>
      <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
        <h2 className="text-gega-red">
          <a href="#">TESTLERİMİZ</a>
        </h2>
      </div>
      <div className="flex flex-wrap">
        <Movie
          movieName="FREN TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,mollitia?"
          moviePhoto={brake}
        />
        <Movie
          movieName="ŞANZIMAN TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,mollitia?"
          moviePhoto={gearbox}
        />
        <Movie
          movieName="HIZ TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,mollitia?"
          moviePhoto={speedometre}
        />
        <Movie
          movieName="SÜSPANSİYON TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          moviePhoto={suspension}
        />
        <Movie
          movieName="MOTOR TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          moviePhoto={engine}
        />
        <Movie
          movieName="BOYA TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          moviePhoto={paint}
        />
        <Movie
          movieName="FREN TESTİ"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          moviePhoto={brake}
          specialClassName="hidden md:block lg:hidden"
        />
        <Movie
          movieName="ŞANZIMAN"
          movieText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          moviePhoto={gearbox}
          specialClassName="hidden md:block lg:hidden"
        />
      </div>
    </div>
  );
}
