import image from '../assets /img/testimonials/img.png'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <section className="testimonial bg-grey bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0 ">
            <div className="testminonial__container container mx-auto">
                <div className='flex  flex-col items-center gap-x-14 xl:flex-row'>
                    {/* img  */}
                    <div className='hidden xl:flex'>
                        <img src={image} alt="" />
                    </div>

                    {/* slider  */}
                    <div className='max-w-[98%] xl:max-w-[710px] my-auto '>
                        <div className='h-[400px] '>
                            <div className="flex flex-col gap-10">                                 
                                    <div className="max-w-[680px] mx-auto text-center xl:text-left">
                                        <div className='mb-7'>                                        
                                            <FaQuoteLeft className="text-3xl text-accent-secondary inline -mt-10 mx-2" />
                                            <p className="mb-7 font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left inline">
                                                <span className='mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem dolor eligendi, quod ratione! Tempore dolor recusandae quibusdam quas veniam sequi dicta fugit, a, incidunt in illum? Praesentium, tempora.</span>
                                            </p>
                                            <FaQuoteRight className="text-3xl text-accent-secondary inline  -mt-10 mx-2" />
                                        </div>
                                        <div className="text-[26px] first-line:text-[#4c5354]  font-semibold">Jane Rodrigo</div>
                                        <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px] ">Customer</div>
                                    </div>
                          
                                 
                                    <div className="max-w-[680px] mx-auto text-center xl:text-left">
                                        <div className='mb-7'>                                        
                                            <FaQuoteLeft className="text-3xl text-accent-secondary inline -mt-10 mx-2" />
                                            <p className="mb-7 font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left inline">
                                                <span className='mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem dolor eligendi, quod ratione! Tempore dolor recusandae quibusdam quas veniam sequi dicta fugit, a, incidunt in illum? Praesentium, tempora.</span>
                                            </p>
                                            <FaQuoteRight className="text-3xl text-accent-secondary inline  -mt-10 mx-2" />
                                        </div>
                                        <div className="text-[26px] first-line:text-[#4c5354]  font-semibold">Jane Rodrigo</div>
                                        <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px] ">Customer</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
