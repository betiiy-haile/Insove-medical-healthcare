import { motion } from "framer-motion"

const Appointment = () => {
  return (
    <section className=" section">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
          }}
          className="h2 mb-5 xl:mb-[50px] text-center xl:text-left"
        >Book Appointment or Call <span className="text-accent-tertiary">(+123) 456-7890</span></motion.h2>
        <motion.form
          className="flex flex-col gap-y-5"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            type: "tween",
          }}
        >
            <div className="flex flex-col xl:flex-row gap-5 ">

                <div className=" select relative flex items-center">

                    <select className="apperance-none outline-none h-full w-full bg-transparent px-4 ">
                        <option value="0">Select department</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                    </select>

                 </div>

                <div className=" select relative flex items-center">
                    <select className="apperance-none outline-none h-full w-full bg-transparent px-4 ">
                        <option value="0">Select Doctor</option>
                        <option value="1">Dr. Jane Doe</option>
                        <option value="2">Dr. John Doe</option>
                        <option value="3">Dr. Bob Smith</option>
                    </select>

                </div>                
            </div>

                  <div className="flex flex-col xl:flex-row gap-5">
                      <input type="text" className="input" placeholder="full name" />
                      <input type="text" className="input" placeholder="Phone Number" />
                  </div>

                  <div className="flex flex-col xl:flex-row gap-5">
                      <input type="date" className="input"  />
                      <input type="time" className="input" />
                  </div>

                  <button className="btn btn-lg btn-accent self-start" type="submit">Book an Appointment</button>
        </motion.form>
      
      </div>
    </section>
  ) 
}

export default Appointment
