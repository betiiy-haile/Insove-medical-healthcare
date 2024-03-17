import icons1 from '../assets /icons/services/icon-1.svg';
import icons2 from '../assets /icons/services/icon-2.svg';
import icons3 from '../assets /icons/services/icon-3.svg';
import icons4 from '../assets /icons/services/icon-4.svg';

const Services = () => {
  return (
    <section className="services">
        {/* bg */}
        <div className="bg-accent-default text-gray-600 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10 ">
            <div className="container mx-auto">
                <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px] ">
                    <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
                        Our best services for your solution
                    </h2>
                    <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio voluptatum. Eligendi maiores quasi aspernatur dolor, rem autem modi odio alias ratione fuga aliquam, error consequatur quos eius consectetur debitis?</p>
                </div>
            </div>
        </div>

        {/* grid container */}
        <div className="container mx-auto mt-8 xl:-mt-[144px] ">
            {/* grid */}
            <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
                {/* grid item  */}
                <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
                    {/* grid item icon  */}
                    <div className='mb-[15px] '>
                        <img src={icons1} alt="" />
                    </div>

                    {/* grid item title  */}
                    <h3 className="h3 mb-[10px] ">General Practitioners</h3>
                    {/* grid item description  */}
                    <p className='font-light leading-normal max-w-[300px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?</p>
                </div>

                  {/* grid item  */}
                  <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
                      {/* grid item icon  */}
                      <div className='mb-[15px] '>
                          <img src={icons2} alt="" />
                      </div>

                      {/* grid item title  */}
                      <h3 className="h3 mb-[10px] ">Pregnancy Support</h3>
                      {/* grid item description  */}
                      <p className='font-light leading-normal max-w-[300px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?</p>
                  </div>

                  {/* grid item  */}
                  <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
                      {/* grid item icon  */}
                      <div className='mb-[15px] '>
                          <img src={icons3} alt="" />
                      </div>

                      {/* grid item title  */}
                      <h3 className="h3 mb-[10px] ">Nutritional Support</h3>
                      {/* grid item description  */}
                      <p className='font-light leading-normal max-w-[300px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?</p>
                  </div>

                  {/* grid item  */}
                <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
                    {/* grid item icon  */}
                    <div className='mb-[15px] '>
                        <img src={icons4} alt="" />
                    </div>

                    {/* grid item title  */}
                    <h3 className="h3 mb-[10px] ">Pharmaceutical Care</h3>
                    {/* grid item description  */}
                    <p className='font-light leading-normal max-w-[300px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veniam?</p>
                </div>

                
            </div>
        </div>

    </section>
  )
}

export default Services