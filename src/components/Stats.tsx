import StatItem from "./StatItem"

const statsData = [
    {
        name: 'Happy Patients',
        amount: "+5120"
    },
    {
        name: 'Total Branches',
        amount: "26"
    },
    {
        name: 'Senior Doctors',
        amount: '+53'
    },
    {
        name: 'Years Experiance',
        amount: '+10'
    }
]

const Stats = () => {
    return (
        <section className="stats section">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
                    {statsData.map(stat => (
                        <StatItem key={stat.name} name={stat.name} amount={stat.amount} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats
