

const Stats = () => {
    return (
        <section className="stats section">
            <div className="container mx-auto">
                {/* wrapper */}
                <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
                    {/* item */}
                    <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
                        <div className="text-4xl xl:text-[64px] font-semibold text-accent-secondary xl:mb-2 ">+5120</div>
                        <div>Happy Patients</div>
                    </div>

                    <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
                        <div className="text-4xl xl:text-[64px] font-semibold text-accent-secondary xl:mb-2 ">26</div>
                        <div>Total Branches</div>
                    </div>

                    <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
                        <div className="text-4xl xl:text-[64px] font-semibold text-accent-secondary xl:mb-2 ">+53</div>
                        <div>Senior Doctors</div>
                    </div>

                    <div className="stats_item flex-1  flex flex-col items-center">
                        <div className="text-4xl xl:text-[64px] font-semibold text-accent-secondary xl:mb-2 ">+10</div>
                        <div>Years Experiance</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
