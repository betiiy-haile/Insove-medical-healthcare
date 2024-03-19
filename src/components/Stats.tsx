import { motion, Variants } from "framer-motion";
import StatItem from "./StatItem";

const statsData = [
    {
        name: "Happy Patients",
        amount: "+5120",
    },
    {
        name: "Total Branches",
        amount: "26",
    },
    {
        name: "Senior Doctors",
        amount: "+53",
    },
    {
        name: "Years Experience",
        amount: "+10",
    },
];

const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5, staggerChildren: 0.5 }
    },
};

const Stats = () => {
    return (
        <section className="stats section">
            <div className="container mx-auto">
                <motion.div
                    className="flex flex-col xl:flex-row gap-y-6 justify-between"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.name}
                            variants={itemVariants}
                            transition={{ duration: 1 }}
                            custom={index}
                        >
                            <StatItem name={stat.name} amount={stat.amount} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;