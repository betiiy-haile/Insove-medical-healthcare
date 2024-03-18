
interface StatProp  {
    name: string,
    amount: string
} 
const StatItem = ({ name, amount }: StatProp) => {
  return (
      <div className="stats_item flex-1 gap-y-4  flex flex-col items-center">
          <span className="text-4xl p-2 xl:text-[72px] font-semibold text-accent-secondary xl:mb-2 ">{amount}</span>
          <span className="text-xl">{name}</span>
      </div>
  )
}

export default StatItem
