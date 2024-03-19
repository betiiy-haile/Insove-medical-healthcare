import { useState } from 'react';
import { motion } from "framer-motion"

const Departments = () => {
    const [selectedLink, setSelectedLink] = useState('Laboratory Analysis');

    const handleLinkClick = (link: string) => {
        setSelectedLink(link);
    };

    const departmentContent = {
        'Laboratory Analysis': {
            title: 'Laboratory Analysis',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.',
            subDepartments: ['Neurocritical Care', 'Neuro Oncology', 'Geriatic Neurology'],
        },
        'Cardiology Clinic': {
            title: 'Cardiology Clinic',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.',
            subDepartments: ['Subdepartment 1', 'Subdepartment 2', 'Subdepartment 3'],
        },
        'Gynecology Clinic': {
            title: 'Gynecology Clinic',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.',
            subDepartments: ['Subdepartment 1', 'Subdepartment 2', 'Subdepartment 3'],
        },
        'Pathology Clinic': {
            title: 'Pathology Clinic',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.',
            subDepartments: ['Subdepartment 1', 'Subdepartment 2', 'Subdepartment 3'],
        },
        'Pediatrics Clinic': {
            title: 'Pediatrics Clinic',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.',
            subDepartments: ['Subdepartment 1', 'Subdepartment 2', 'Subdepartment 3'],
        },
        'Neurology Clinic': {
            title: 'Neurology Clinic',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consectetur voluptatum dolorum facilis tenetur! Illo iure laudantium officiis eos neque delectus, modi exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit tempora alias consequuntur, quia rem, ab omnis mollitia libero et perspiciatis cupiditate voluptate, sed amet nulla cumque eius iusto? Recusandae.',
            subDepartments: ['Subdepartment 1', 'Subdepartment 2', 'Subdepartment 3'],
        },
        // Add more departments here
    };

    const currentDepartment = departmentContent[selectedLink as keyof typeof departmentContent];

    return (
        <section className="departments section">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    type: "tween",
                }}
                className="bg-grey bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center"
            >
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            type: "tween",
                        }}
                        className="flex flex-col xl:flex-row gap-x-5"
                    >
                        <div className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y[40px] font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0">
                            {Object.keys(departmentContent).map((link) => (
                                <div
                                    key={link}
                                    className={`cursor-pointer hover:text-accent-default transition-all ${selectedLink === link ? 'text-accent-default' : ''
                                        }`}
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link}
                                </div>
                            ))}
                        </div>
                        <div className="xl:w-[710px]">
                            <h2 className="h2 mb-[20px] text-center xl:text-left">{currentDepartment.title}</h2>
                            <p className="mb-[30px] font-light text-center xl:text-left">{currentDepartment.description}</p>
                            <div className="flex flex-col xl:flex-row items-center xl:justify-between max-w-[555px] mb-[50px] mx-auto xl:mx-0">
                                {currentDepartment.subDepartments.map((subDepartment: string) => (
                                    <div
                                        key={subDepartment}
                                        className="text-accent-default xl:border-r border-[#dcdcdc] xl:pr-6"
                                    >
                                        {subDepartment}
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-lg bg-accent-default text-white mx-auto xl:mx-o">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Departments;