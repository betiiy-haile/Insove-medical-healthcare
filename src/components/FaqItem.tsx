import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { LuMinus } from "react-icons/lu";

import { motion } from 'framer-motion'

interface Props {
    question: string,
    answer: string,
}

const FaqItem = ({ question, answer }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                type: "tween",
                delay: 0.5,
            }}
            className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
        >
            <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">{question}</h4>
                {isOpen ? (
                    <LuMinus
                        className="text-2xl text-accent-default"
                        onClick={handleToggle}
                    />
                ) : (
                    <MdAdd
                        className="text-2xl text-accent-default"
                        onClick={handleToggle}
                    />
                )}
                
            </div>
            <div className={`${!isOpen ? 'hidden' : ''}`}>
                <p className="font-light">{answer}</p>
            </div>
        </motion.div>
    );
}

export default FaqItem