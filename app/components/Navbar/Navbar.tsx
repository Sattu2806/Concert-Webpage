'use client'

import Image from "next/image"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="">
            <div className="pt-5">
                <div className="flex flex-row items-center justify-between">
                    <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{duration:0.4, delay:0.1}} >
                        <Image priority={true} style={{width:'196px', height:'auto'}} src='/logo.png' width={196} height={20} alt="Logo" />
                    </motion.div>
                    <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, y:0},
                            hidden: { opacity: 0, y: 40 }
                        }} className="flex flex-row items-center lg:space-x-10 space-x-6 max-md:hidden">
                        <li><a href="">Home</a></li>
                        <li><a href="">Performance</a></li>
                        <li><a href="">Booking</a></li>
                        <li><a href="">Store</a></li>
                        <li><a href="">About Us</a></li>
                    </motion.ul>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay:0.3 }}
                        variants={{
                            visible: { opacity: 1, y:0},
                            hidden: { opacity: 0, y: 40 }
                        }}
                     className="button cursor-pointer">
                        <button className=" lg:px-7 py-2 px-5 bg-white text-black">Sign In</button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Navbar