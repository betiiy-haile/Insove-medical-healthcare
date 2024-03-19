import FaqItem from "./FaqItem";
import { motion } from 'framer-motion'

const questions = [
    {
        question: 'Why to believe in Insove medical Healthcare?',
        answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!',
    },
    {
        question: 'Will we get health care updates after surgery?',
        answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!',
    },
    {
        question: 'What preparations are necessary before undergoing Surgery?',
        answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!',
    },
    {
        question: 'How long will it take to recover after surgery?',
        answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!',
    },
];

const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, staggerChildren: 0.5 }
    },
};


const Faq = () => {
  return (
      <section className="faq">
          <div className="container mx-auto">
              <motion.h2 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                      duration: 0.8,
                      type: "tween",
                  }}
                className="h2 text-center mb-[50px]"
              >We've got answers</motion.h2>
              <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                className="max-w-5xl mx-auto"
              >
                  {questions.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          transition={{ duration: 1 }}
                          custom={index}
                        >                            
                      <FaqItem key={index} question={item.question} answer={item.answer} />
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  )
}

export default Faq
