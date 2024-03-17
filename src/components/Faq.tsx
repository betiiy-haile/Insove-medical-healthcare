import { MdAdd } from "react-icons/md";

const Faq = () => {
  return (
    <section className="faq">
        <div className="container mx-auto">
            <h2 className="faq__title h2 text-center mb-[50px] ">
                We've got answers
            </h2>

            {/* item wrapper */}
            <div className="max-w-5xl mx-auto">


                {/* item */}
                <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
                    {/* title and icon */}
                    <div className="flex item-center justify-between mb-[10px] ">
                        <h4 className="h4">Why to believe in Insove medical Healthcare?</h4>
                        <MdAdd className="faq__btn text-2xl text-accent-default " />
                    </div>

                      {/* answer text */}
                      {/* h-0 overflow-hidden u need to change  */}
                      <div className="faq__answer h-0 overflow-hidden">  
                          <p className="font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!</p>
                      </div>
                </div>

                  {/* item */}
                  <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
                      {/* title and icon */}
                      <div className="flex item-center justify-between mb-[10px] ">
                          <h4 className="h4">Will we get health care updates after surgery?</h4>
                          <MdAdd className="faq__btn text-2xl text-accent-default " />
                      </div>

                      {/* answer text */}
                      <div className="faq__answer h-0 overflow-hidden">
                          <p className="font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!</p>
                      </div>
                  </div>

                  {/* item */}
                  <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
                      {/* title and icon */}
                      <div className="flex item-center justify-between mb-[10px] ">
                          <h4 className="h4">What preparations are necessary before undergoing Surgery?</h4>
                          <MdAdd className="faq__btn text-2xl text-accent-default " />
                      </div>

                      {/* answer text */}
                      <div className="faq__answer h-0 overflow-hidden">
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!</p>
                      </div>
                  </div>

                  {/* item */}
                  <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
                      {/* title and icon */}
                      <div className="flex item-center justify-between mb-[10px] ">
                          <h4 className="h4">How long will it take to recover after surgery?</h4>
                          <MdAdd className="faq__btn text-2xl text-accent-default " />
                      </div>


                      {/* answer text */}
                      <div className="faq__answer h-0 overflow-hidden">
                          <p className="font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo asperiores sequi quod soluta, optio, atque deleniti nostrum fugiat provident inventore consequatur expedita ea ex quasi recusandae, eveniet veritatis. Aperiam!</p>
                      </div>
                  </div>
            </div>
        </div>
      
    </section>
  )
}

export default Faq
