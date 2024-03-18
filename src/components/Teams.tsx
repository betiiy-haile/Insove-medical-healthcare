
import doctor1 from "../assets /img/team/doctor-1.png"
import doctor2 from "../assets /img/team/doctor-2.png"

import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Leslie Taylor",
    specialty: "Pediatrician",
    image: doctor1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque ratione totam.",
    links: [
      { icon: FaYoutube, link: "https://youtube.com/leslietaylor" },
      { icon: FaFacebook, link: "https://facebook.com/leslietaylor" },
      { icon: AiFillInstagram, link: "https://instagram.com/leslietaylor" },
      { icon: FaPinterest, link: "https://pinterest.com/leslietaylor" },
    ],
  },
  {
    id: 2,
    name: "Dr. Zachary Brown",
    specialty: "Cardiologist",
    image: doctor2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque ratione totam.",
    links: [
      { icon: FaYoutube, link: "https://youtube.com/zacharybrown" },
      { icon: FaFacebook, link: "https://facebook.com/zacharybrown" },
      { icon: AiFillInstagram, link: "https://instagram.com/zacharybrown" },
      { icon: FaPinterest, link: "https://pinterest.com/zacharybrown" },
    ],
  },
];

const Teams = () => {
  return (
    <section className="team section">
      <div className="container mx-auto">

        <h2 className="team__title h2 mb-[50px] text-center xl:text-left ">
          Our Team
        </h2>
        <div className='flex flex-col mb-[20px] items-center gap-x-14 xl:flex-row'>

            <div className='flex flex-col md:flex-row gap-9'>
              {teamMembers.map((member) => (
                <div key={member.id} className='flex flex-col xl:flex-row items-center gap-[30px] '>

                  <div className='flex-1'>
                    <img src={member.image} alt="doctor one" />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <h4 className='h4 mb-[10px] '>{member.name}</h4>
                    <div className='font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] '>
                      {member.specialty}
                    </div>
                    <p className='font-light mb-[26px] max-w-[320px] '>{member.description}</p>
                    <div className='flex items-center gap-x-3 text-[30px] text-accent-tertiary '>

                      {member.links.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.link}
                            href={social.link}
                            className="cursor-pointer hover:text-accent-default"
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

            </div>

        </div>
        <div className="w-full flex px-6 xl:px-0 justify-end underline cursor-pointer">
          All Team Members
        </div>
      </div>
    </section>
  )
}

export default Teams
