
import doctor1 from "../assets /img/team/doctor-1.png"
import doctor2 from "../assets /img/team/doctor-2.png"

import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Teams = () => {
  return (
    <section className="team section">
      <div className="container mx-auto">

        <h2 className="team__title h2 mb-[50px] text-center xl:text-left ">
          Our Team
        </h2>
        <div className='flex flex-col items-center gap-x-14 xl:flex-row'>

          {/* <div className="swiper_slide"> */}
            <div className='flex flex-col md:flex-row gap-9'>


              {/* Team Memeber one */}
              <div className='flex  flex-col xl:flex-row items-center gap-[30px] '>

                <div className='flex-1'>
                  <img src={doctor1} alt="doctor one" />
                </div>
                <div className='flex-1 flex flex-col'>
                  <h4 className='h4 mb-[10px] '>Dr. Leslie Taylor</h4>
                  <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] '>
                    Pediatrician
                  </div>
                  <p className='font-light mb-[26px] max-w-[320px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque ratione totam.</p>
                  <div className='flex items-center gap-x-3 text-[30px] text-accent-tertiary '>
                    <span className='cursor-pointer hover:text-accent-default'>
                      <FaYoutube />
                    </span>
                    <span className='cursor-pointer hover:text-accent-default '>
                      <FaFacebook />
                    </span><span className='cursor-pointer hover:text-accent-default'>
                      <AiFillInstagram />
                    </span><span className='cursor-pointer hover:text-accent-default '>
                      <FaPinterest />
                    </span>
                  </div>
                </div>
              </div>


            {/* Team Memeber Two */}

              <div className='flex  flex-col xl:flex-row items-center gap-[30px] '>
                <div className='flex-1'>
                  <img src={doctor2} alt="doctor one" />
                </div>
                <div className='flex-1 flex flex-col'>
                  <h4 className='h4 mb-[10px] '>Dr. Zachary Brown</h4>
                  <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] '>
                    Cardiologist
                  </div>
                  <p className='font-light mb-[26px] max-w-[320px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque ratione totam.</p>
                  <div className='flex items-center gap-x-3 text-[30px] text-accent-tertiary '>
                    <span className='cursor-pointer hover:text-accent-default'>
                      <FaYoutube />
                    </span>
                    <span className='cursor-pointer hover:text-accent-default '>
                      <FaFacebook />
                    </span><span className='cursor-pointer hover:text-accent-default'>
                      <AiFillInstagram />
                    </span><span className='cursor-pointer hover:text-accent-default '>
                      <FaPinterest />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}

        </div>
      </div>
    </section>
  )
}

export default Teams
