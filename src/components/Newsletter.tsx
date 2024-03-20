import image from "../assets /img/newsletter/pattern.svg"
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, staggerChildren: 0.5 }
    },
};

const Newsletter = () => {
    return (
        <section className="newsletter bg-accent-default md:h-[444px] py-12 flex items-center relative overflow-hidden ">
            
            <motion.div 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-0 left-0"
            >
                <img src={image} alt="newsletter pattern image" />
            </motion.div>

            <motion.div 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="newsletter__container container mx-auto"
            >
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px] ">
                    <div className="flex-1 z-10 text-center md:text-left">
                        <div className="text-base uppercase text-white tracking-[2.24px] font-medium ">Our Newsletter</div>
                        <h1 className="h1 mb-4 text-white">Subscribe to get more updates!!</h1>
                    </div>
                    <form className="flex-1">
                        <div className="flex flex-col md:flex-row relative gap-y-4">
                            <input type="text" placeholder="Your email address" className="rounded-full w-full h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white" />
                            <button className="btn btn-lg btn-white md:absolute right-0">Subscribe</button>

                        </div>
                        </form>
                </div>
            </motion.div>

        </section>
    )
}

export default Newsletter