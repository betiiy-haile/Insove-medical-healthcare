import image from '../assets /img/testimonials/img.png'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Carousel from './utils/Carousel';

import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem dolor eligendi, quod ratione! Tempore dolor recusandae quibusdam quas veniam sequi dicta fugit, a, incidunt in illum? Praesentium, tempora.',
        author: 'Jane Rodrigo',
        role: 'Customer',
    },
    {
        id: 2,
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem dolor eligendi, quod ratione! Tempore dolor recusandae quibusdam quas veniam sequi dicta fugit, a, incidunt in illum? Praesentium, tempora.',
        author: 'John Doe',
        role: 'Customer',
    },
    {
        id: 3,
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem dolor eligendi, quod ratione! Tempore dolor recusandae quibusdam quas veniam sequi dicta fugit, a, incidunt in illum? Praesentium, tempora.',
        author: 'Sarah Smith',
        role: 'Customer',
    },
    {
        id: 4,
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem dolor eligendi, quod ratione! Tempore dolor recusandae quibusdam quas veniam sequi dicta fugit, a, incidunt in illum? Praesentium, tempora.',
        author: 'Michael Johnson',
        role: 'Customer',
    },
];

const Testimonial = () => {
    return (
        <motion.section
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                type: "tween",
            }}
            className="bg-grey bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0 "
        >
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    duration: 0.8,
                    type: "tween",
                }}
                className="container mx-auto "
            >
                <div className='flex  flex-col items-center gap-x-14 xl:flex-row'>

                    <div className='hidden xl:flex'>
                        <img src={image} alt="" />
                    </div>


                    <div className='max-w-[98%] xl:max-w-[710px] my-auto '>
                        <div className="flex flex-col items-center  gap-10">   
                            <Carousel>   

                                {testimonials.map(testimonial => (
                                    <div key={testimonial.id} className="max-w-[680px] p-8 mx-auto text-center xl:text-left">
                                        <div className='mb-7'>
                                            <FaQuoteLeft className="text-3xl text-accent-secondary inline -mt-10 mx-2" />
                                            <p className="mb-7 font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left inline">
                                                <span className='mx-2'>{testimonial.quote}</span>
                                            </p>
                                            <FaQuoteRight className="text-3xl text-accent-secondary inline  -mt-10 mx-2" />
                                        </div>
                                        <div className="text-[26px] first-line:text-[#4c5354]  font-semibold">{testimonial.author}</div>
                                        <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px] ">{testimonial.role}</div>
                                    </div>
                                ))}

                                 
                                </Carousel>  

                            </div>
                    </div>


                </div>
            </motion.div>
        </motion.section>
    )
}

export default Testimonial
