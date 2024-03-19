import icon1 from '../assets /icons/services/icon-1.svg';
import icon2 from '../assets /icons/services/icon-2.svg';
import icon3 from '../assets /icons/services/icon-3.svg';
import icon4 from '../assets /icons/services/icon-4.svg';
import ServiceCard from './ServiceCard';

import { motion } from "framer-motion"

const servicesList = [
    {
        icon: icon1,
        title: "General Practitioners",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?"
    },
    {
        icon: icon2,
        title: "Pregnancy Support",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?"
    },
    {
        icon: icon3,
        title: "Nutritional Support",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?"
    },
    {
        icon: icon4,
        title: "Pharmaceutical Care",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?"
    }
];

const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.5 }
    },
};

const Services = () => {
  return (
    <motion.section
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
              duration: 1,
              type: "tween",
          }}
    >
        <div className="bg-accent-default text-gray-600 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10 ">
            <div className="container mx-auto">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "tween",
                    }}
                    className=" flex items-center flex-col xl:flex-row xl:mb-[60px] "
                >
                    <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
                        Our best services for your solution
                    </h2>
                    <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio voluptatum. Eligendi maiores quasi aspernatur dolor, rem autem modi odio alias ratione fuga aliquam, error consequatur quos eius consectetur debitis?</p>
                </motion.div>
            </div>
        </div>

        <div className="container mx-auto mt-8 xl:-mt-[144px] ">
              <motion.div initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'
                >

                  {servicesList.map((services, index) => (
                      <motion.div 
                          key={services.title}
                          variants={itemVariants}
                          transition={{ duration: 1 }}
                          custom={index}
                        >
                         <ServiceCard key={services.title} icon={services.icon} title={services.title} desc={services.desc} />
                      </motion.div>
                  ))}
                                
            </motion.div>
        </div>

    </motion.section>
  )
}

export default Services
