import brand1 from "../assets /img/brands/brand-1.svg"
import brand2 from "../assets /img/brands/brand-2.svg"
import brand3 from "../assets /img/brands/brand-3.svg"
import brand4 from "../assets /img/brands/brand-4.svg"
import brand5 from "../assets /img/brands/brand-5.svg"

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, staggerChildren: 0.5 }
  },
};

const Brands = () => {
  return (
    <section className="brands section">
      <div className="container mx-auto">
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center"
        >
          <img className="brands__logo" src={brand1} alt="brand 1" />
          <img className="brands__logo" src={brand2} alt="brand 2" />
          <img className="brands__logo" src={brand3} alt="brand 3" />
          <img className="brands__logo" src={brand4} alt="brand 4" />
          <img className="brands__logo" src={brand5} alt="brand 5" />
        </motion.div>
      </div>
    </section>
  )
}

export default Brands
