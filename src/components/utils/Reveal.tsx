import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


interface RevealProps {
    children: React.ReactNode;
}
const Reveal = ({ children }: RevealProps) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()


    useEffect(() => {
        if (isInView) {
            console.log("hello")
            controls.start("visible")
        }
    }, [isInView])

    return (
        <div className="relative overflow-hidden">
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 100,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.4,
                            duration: 0.8,
                            type: "tween",
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
            >{children}</motion.div>
        </div>
    )
}

export default Reveal