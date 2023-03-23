import Logo from "../logo";

export default function Footer(){
    return(
        <footer className="bg-black text-gega-gray">
            <div className="container flex flex-col space-y-6 md:space-y-0 md:flex-row px-10 lg:px-0 pb-8 text-s md:text-base">
                <div className="basis-1/3">
                    <Logo className="text-2xl lg:text-3xl"/>
                    <p className="text-sm mt-2">2023 Muffafa No &copy; COPYRIGHT </p>
                </div>
                <div className="basis-1/3">
                    <h2 className="mb-2 text-gega-red">Links</h2>
                    <div className="grid grid-cols-6 md:grid-cols-4 gap-2 uppercase">
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">Movies</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">Celebrites</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">Blog</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">News</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">About</a>
                    </div>
                </div>
                <div className="basis-1/3">
                    <h2 className="mb-2 text-gega-red">Fallow us</h2>
                    <form action="" className="flex">
                        <input type="text" className="py-1 px-2 bg-transparent border border-gega-red placeholder:text-xs outline-none" placeholder="TYPE YOUR E-MAIL"/>
                        <button className="py-1 px-2 bg-gega-red font-gemunLibre uppercase">Subsciribe</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}