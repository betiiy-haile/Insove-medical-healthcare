import { motion } from "framer-motion"
interface StatProp  {
    name: string,
    amount: string
} 
const StatItem = ({ name, amount }: StatProp) => {
  return (
      <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
          duration: 1,
          type: "tween",
          delay: 0.5,
      }}
       className="stats_item flex-1 gap-y-4  flex flex-col items-center"
       >
          <span className="text-4xl p-2 xl:text-[72px] font-semibold text-accent-secondary xl:mb-2 ">{amount}</span>
          <span className="text-xl">{name}</span>
      </motion.div>
  )
}

export default StatItem
