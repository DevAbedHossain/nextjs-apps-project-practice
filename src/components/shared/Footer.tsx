import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { MdFacebook } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <section className="bg-[#001931]">
            <div className="container mx-auto py-7">

                <div className="flex justify-between border-b border-[#e5e7eb3d] py-3">
                    <span className="text-white flex items-center font-semibold text-lg uppercase"><Image src={Logo} alt="Apps" width={30} height={30} />HERO.IO</span>

                    <div>
                        <p className="text-white text-[16px]">Social Links</p>
                        <div className="flex gap-2 mt-1">
                            <MdFacebook className="text-white" />
                            <IoLogoLinkedin className="text-white" />
                            <FaSquareXTwitter className="text-white" />

                        </div>
                    </div>
                </div>

                <p className="text-[#FAFAFA] text-[16px] text-center mt-3">Copyright © 2025 - All right reserved</p>

            </div>
        </section>
    );
};

export default Footer;