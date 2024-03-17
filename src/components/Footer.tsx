import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../assets /img/header/logo.svg"

const Footer = () => {
    return (
        <footer className="footer pt-12 xl:pt-[150px] ">
            <div className="container mx-auto pb-12 xl:pb-[100px] ">
                <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
                    {/* footer contact links */}
                    <div className="footer__item flex-1 ">
                        <a href="#">
                            <img src={logo} className="pb-5" alt="insove logo" />
                        </a>
                        <p className="mb-[20px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, commodi?</p>
                        <div className="flex flex-col gap-y-3 mb-10">
                            <div className="flex items-center gap-x-[10px] ">
                                    <FaMapMarkerAlt className="text-[24px] text-accent-default " />
                                    <div>123 Airling, Miola, NY</div>
                            </div>

                            <div className="flex items-center gap-x-[10px] ">
                                <IoMdMail className="text-[24px] text-accent-default " />
                                <div>insove@gmail.com </div>
                            </div>

                            <div className="flex items-center gap-x-[10px] ">
                                <FaPhone className="text-[24px] text-accent-default " />
                                <div>(+123) 456 78910</div>
                            </div>
                        </div>

                        <div className="flex gap-[14px] text-[30px] ">
                            <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent-default cursor-pointer transition-all ">
                                <FaFacebook />
                            </div>

                            <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent-default cursor-pointer transition-all ">
                                <FaInstagram />
                            </div>

                            <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent-default cursor-pointer transition-all ">
                                <FaTwitter />
                            </div>

                            <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent-default cursor-pointer transition-all ">
                                <FaLinkedin />
                            </div>
                        </div>


                    </div>
                    {/* footer quick links */}
                    <div className="footer__item flex-1">
                        <h4 className="h4 mb-5">Quick Links</h4>
                        <div className="flex gap-x-5">
                            {/* list one */}
                            <ul className="flex-1 flex flex-col gap-y-5">
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Doctors</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Departments</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Blogs</a>
                                </li>
                            </ul>


                            {/* list two */}
                            <ul className="flex-1 flex flex-col gap-y-5">
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Our Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Faqs</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent-default transition-all">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* footer opening hours  */}
                    <div className="footer__item flex-1">
                        <h4 className="h4 mb-5">Opening Hours</h4>
                        <div className="flex flex-col gap-5">
                            <div className="flex-1">
                                <div className="flex justify-between items-center border-b pb-[10px] ">
                                    <div>Monday - Thursday</div>
                                    <div className="text-accent-default font-medium">8:00 AM - 6:00 PM</div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-center border-b pb-[10px] ">
                                    <div>Friday - Saturday</div>
                                    <div className="text-accent-default font-medium">10:00 AM - 4:00 PM</div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-center border-b pb-[10px] ">
                                    <div>Sunday</div>
                                    <div className="text-accent-default font-medium">Emergency Only</div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-center border-b pb-[10px] ">
                                    <div>Personal</div>
                                    <div className="text-accent-default font-medium">7:00 AM - 9:00 PM</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[30px] border-t ">
                <div className="container mx-auto text-center">
                    <span className="font-light text-base flex items-center justify-center gap-x-3">
                        <FaRegCopyright className="inline" /> 2023 Insove - All rights reserved!
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer