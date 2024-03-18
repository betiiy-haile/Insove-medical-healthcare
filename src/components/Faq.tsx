import FaqItem from "./FaqItem";

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


const Faq = () => {
  return (
      <section className="faq">
          <div className="container mx-auto">
              <h2 className="faq__title h2 text-center mb-[50px]">We've got answers</h2>
              <div className="max-w-5xl mx-auto">
                  {questions.map((item, index) => (
                      <FaqItem key={index} question={item.question} answer={item.answer} />
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Faq
