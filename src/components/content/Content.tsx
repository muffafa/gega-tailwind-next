import Movies from './movies'
import News from './news'

export default function Content() {
  return (
    <section className="py-24  bg-black">
    <div className="container flex flex-col lg:flex-row  lg:space-x-16 space-y-8 lg:space-y-0">
      <div className="basis-2/3">
        <Movies/>
      </div>
      <div className="basis-1/3 pl-10 lg:pl-0">
        <News/>
      </div>
    </div>
  </section>
  )
};
