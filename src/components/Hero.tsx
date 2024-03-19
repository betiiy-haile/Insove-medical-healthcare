import hero from '../assets /img/hero/img.png';
import { LuHeartPulse } from "react-icons/lu";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between h-full">

                    <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        type: "tween",
                    }}
                     className='hero__text xl:w-[48%] text-center xl:text-left'
                    >
                        <div className='flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0 ' >
                            <span className='text-2xl text-accent-default'>
                                <LuHeartPulse />
                            </span>
                             <div className='uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px] '>Live your life</div>
                        </div>
                        <h1 className='h1 mb-6 font-poppins'>We care about your health</h1>
                        <p className='mb-[42px] md:max-w-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo blanditiis rem! Modi illo at nemo ipsa nesciunt. Tempora asperiores reprehenderit iure </p>
                        <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>Contact us</button>
                    </motion.div>

                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            type: "tween",
                        }}
                     className='hero__img hidden xl:flex max-w-[814px] self-end'
                    >
                        <img src={hero} alt="" />
                    </motion.div>

                </div>
            </div>
        </section >
    )
}

export default Hero