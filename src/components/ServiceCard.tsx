import { motion } from 'framer-motion'
interface Service {
    icon: string;
    title: string;
    desc: string;
}

const ServiceCard = ({ icon, title, desc }: Service) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                type: "tween",
                delay: 0.5,
            }}
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center "
        >
            <div className='mb-[15px] '>
                <img src={icon} alt="" />
            </div>

            <h3 className="h3 mb-[10px] ">{title}</h3>
            <p className='font-light leading-normal max-w-[300px] '>{desc}</p>
        </motion.div>
    ) 
}

export default ServiceCard