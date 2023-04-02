import Logo from "../logo";

export default function Footer(){
    return(
        <footer className="bg-black text-gega-gray">
            <div className="container flex flex-col space-y-6 md:space-y-0 md:flex-row px-10 lg:px-0 pb-8 text-s md:text-base">
                <div className="basis-1/3">
                    <Logo className="text-2xl lg:text-3xl"/>
                    <p className="text-sm mt-2">2023 ZENCİR SOFTWARE &copy; TÜM HAKLARI SAKLIDIR</p>
                    <p className="text-sm mt-2">541 891 88 87</p>
                    <p></p>
                </div>
                <div className="basis-1/3">
                    <h2 className="mb-2 text-gega-red">SAYFALAR</h2>
                    <div className="grid grid-cols-6 md:grid-cols-4 gap-2 uppercase">
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">HİZMETLERİMİZ</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">REFERANSLARIMIZ</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">İLETİŞİM</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">ADRES</a>
                        <a href="#" className="col-span-2 hover:text-gega-melon duration-500">HAKKIMIZDA</a>
                    </div>
                </div>
                <div className="basis-1/3">
                    <h2 className="mb-2 text-gega-red">KAMPANYALAR</h2>
                    <form action="" className="flex">
                        <input type="text" className="py-1 px-2 bg-transparent border border-gega-red placeholder:text-xs outline-none" placeholder="E-MAIL ADRESİNİZ"/>
                        <button className="py-1 px-2 bg-gega-red font-gemunLibre uppercase">HABERDAR OL</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}