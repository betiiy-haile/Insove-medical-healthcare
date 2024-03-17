import { useState } from 'react';
import logo from "../assets /img/header/logo.svg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="py-8 lg:pt-6 lg-pb-14">
            <div className="container font-poppins mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
                {/* logo */}
                <div className='flex justify-center lg:justify-normal'>
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    {/* location */}
                    <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                        <span className='text-2xl text-accent-default'>
                            <FaMapMarkerAlt />
                        </span>
                        <div>123 Arling, Miola, NY</div>
                    </div>
                    {/* phone */}
                    <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                        <span className='text-2xl text-accent-default'>
                            <FaPhoneAlt />
                        </span>
                        <div>(+487) 384 9452</div>
                    </div>
                    <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0 '>Book now</button>

                    {/* mobile nav */}
                    <nav className={`${isNavOpen ? 'left-0' : '-left-[300px]'} bg-white fixed w-[300px] top-0 h-screen shadow-2xl lg:hidden transition-all duration-300 z-20`}>
                    {/* nav trigger btn */}
                    <div className='bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all' onClick={toggleNav}>
                        <span className='text-white text-2xl'>
                                {isNavOpen ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
                        </span>
                    </div>
                    
                    {/* logo list form  */}
                    <div className='px-12 flex flex-col gap-y-12 h-full'>
                    {/* logo */}
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                            {/* list */}
                            <ul className='flex flex-col gap-y-4'>
                                <li>
                                    <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Home</a>
                                </li>
                                <li>
                                    <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Doctors</a>
                                </li>
                                <li>
                                    <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Department</a>
                                </li>
                                <li>
                                    <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Services</a>
                                </li>
                                <li>
                                    <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Blog</a>
                                </li>
                                <li>
                                    <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Contact</a>
                                </li>
                            </ul>

                            {/* form */}
                            <form className='relative flex gap-x-[10px] ' >
                                <label htmlFor='mnav-search-input' className='text-2xl text-accent-default'>
                                    <IoSearch />
                                </label>
                                <input type="text" id='mnav-search-input' placeholder='Search...' className='outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent-default placeholder:italic'/>
                            </form>
                    </div>
                </nav>

                {/* desktop nav  */}
                <nav className='bg-white absolute w-full left-0 px-5 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg;px-[50px] '>
                    {/* list */}
                        <ul className='flex gap-x-4'>
                            <li>
                                <a href="#" className='border-r px-4 text-secondary hover:text-accent-default transition-all duration-300'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='border-r px-4 text-secondary hover:text-accent-default transition-all duration-300'>Doctors</a>
                            </li>
                            <li>
                                <a href="#" className='border-r px-4 text-secondary hover:text-accent-default transition-all duration-300'>Department</a>
                            </li>
                            <li>
                                <a href="#" className='border-r px-4 text-secondary hover:text-accent-default transition-all duration-300'>Services</a>
                            </li>
                            <li>
                                <a href="#" className='border-r px-4 text-secondary hover:text-accent-default transition-all duration-300'>Blog</a>
                            </li>
                            <li>
                                <a href="#" className='text-secondary hover:text-accent-default transition-all duration-300'>Contact</a>
                            </li>
                        </ul>

                        {/* form */}
                        <form className='relative flex gap-x-[10px] ' >
                            <label htmlFor='search-input' className='flex justify-center items-center group text-2xl text-accent'>
                                <IoSearch />
                            </label>
                            <input type="text" id='search-input' placeholder='Search...' className='outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent-default placeholder:italic placeholder:text-base transiton-all duration-150' />
                        </form>
                </nav>
            </div>
        </div>
    </header >
  );
}

export default Header;