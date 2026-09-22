import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import btnIcon from "@/assets/fi_2111432.png"

const Navbar = () => {

    const links = <>
        <li><Link href="/" className="text-[16px] font-semibold">Home</Link></li>
        <li><Link href="/apps" className="text-[16px] font-semibold">Apps</Link></li>
        <li><Link href="/installation" className="text-[16px] font-semibold">Installation</Link></li>
    </>

    return (
        <section className="bg-white shadow-sm sticky top-0 left-0 right-0 z-50">
            <div className="navbar container mx-auto items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="flex gap-1.5 items-center">
                        <Image src={Logo} alt="Mobile App" width={300} height={300} className="w-8" />
                        <span className="text-[#8c58eb] font-bold text-lg uppercase">HERO.IO</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-to-tl from-[#9f62f2] to-[#632ee3] text-white text-[16px] font-semibold hover:from-[#632ee3] hover:to-[#9f62f2]"><Image src={btnIcon} alt="git" width={30} height={30} className="w-full" /> Contribute</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;