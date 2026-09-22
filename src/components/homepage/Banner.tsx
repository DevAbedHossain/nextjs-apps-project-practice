import Image from "next/image";
import AppStore from "@/assets/apple.png";
import PlayStore from "@/assets/playstore.png";
import HeroImage from "@/assets/hero.png";

const Banner = () => {
    return (
        <section className="bg-[#f5f5f5] pt-15">
            <div className="container mx-auto bg-[#f5f5f5]">

                <div className="flex flex-col items-center space-y-7">
                    <h1 className="text-7xl/20 font-bold text-center">We Build <br /><span className="text-[#9F62F2]">Productive</span> Apps</h1>
                    <p className="text-xl text-[#627382] text-center w-2/3">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className="flex gap-5">
                        <button className="btn text-[#001931] font-semibold text-xl p-6 flex items-center"><Image src={PlayStore} width={20} height={20} alt="play store" />Google Play</button>
                        <button className="btn text-[#001931] font-semibold text-xl p-6 lex items-center"><Image src={AppStore} width={20} height={20} alt="apple store" />App Store</button>
                    </div>
                </div>

                <Image src={HeroImage} alt="hero" width={800} height={800} className="mx-auto mt-15" />

            </div>
        </section>
    );
};

export default Banner;