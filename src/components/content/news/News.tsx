import new1 from "../../../../public/customer.jpeg";
import new2 from "../../../../public/full.jpeg";
import new3 from "../../../../public/service.jpeg";
import new4 from "../../../../public/tech.jpeg";
import new5 from "../../../../public/master.jpeg";
import New from "./New";      

export default function News() {
  return (
    <div className="h-full">
        <h2 className="text-gega-gray mb-8">HİZMETLERİMİZ</h2>
          <div className="flex flex-row lg:flex-col lg:pb-16 lg:h-full justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
            <New newPhoto={new1}/>
            <New newPhoto={new2}/>
            <New newPhoto={new3}/>
            <New newPhoto={new4}/>
            <New newPhoto={new5} specialClassName=" flex md:hidden lg:flex"/>
          </div>
    </div>
  );
}
