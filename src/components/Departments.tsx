const Departments = () => {
    return (
        <section className="departments section">
            <div className=" bg-grey bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center ">
                <div className=" container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-x-5">
                        <div className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y[40px] font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0 ">
                            <div className="cursor-pointer hover:text-accent-default transition-all ">Laboratory Analysis</div>
                            <div className="cursor-pointer hover:text-accent-default transition-all ">Cardiology Clinic</div>
                            <div className="cursor-pointer hover:text-accent-default transition-all ">Gynecology Clinic</div>
                            <div className="cursor-pointer hover:text-accent-default transition-all ">Pathology Clinic</div>
                            <div className="cursor-pointer hover:text-accent-default transition-all ">Pediatrics Clinic</div>
                            <div className="cursor-pointer hover:text-accent-default transition-all ">Neurology Clinic</div>
                        </div>
                        <div className="xl:w-[640px] " >
                            <h2 className="h2  mb-[20px] text-center xl:text-left ">Cardiology Clinic</h2>
                            <p className="mb-[30px] font-light text-center xl:text-left ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem.
                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.
                            </p>
                            <div className="flex flex-col xl:flex-row items-center xl:justify-between max-w-[555px] mb-[50px] mx-auto xl:mx-0 ">
                                <div className="text-accent-default xl:border-r border-[#dcdcdc] xl:pr-6 ">Neurocritical Care</div>
                                <div className="text-accent-default xl:border-r border-[#dcdcdc] xl:pr-6 ">Neuro Oncology</div>
                                <div className="text-accent-default">Geriatic Neurology</div>
                            </div>
                            <button className="btn btn-lg bg-accent-default text-white mx-auto xl:mx-o  ">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Departments