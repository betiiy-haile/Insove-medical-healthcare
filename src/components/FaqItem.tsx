import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { LuMinus } from "react-icons/lu";

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
        <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
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
        </div>
    );
}

export default FaqItem