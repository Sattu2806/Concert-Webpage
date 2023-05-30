'use client'
import {motion} from "framer-motion"

const Book = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.8
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, },
        show: { opacity: 1,  transition:{type: 'keyframe', duration:0.4} },
    };

      const item1 = {
        hidden: { opacity: 0, x:30,  },
        show: { opacity: 0.2, x:0, transition:{type: 'keyframe', duration:0.4} },
    };
    return (
        <motion.div initial='hidden' whileInView='show' variants={container} viewport={{once:true}} className="mt-32 mb-20">
            <div className="relative ">
                <motion.img variants={item1} className=" w-full h-auto  max-h-[500px] object-cover opacity-20" src="/concert.png" alt="" />
                <motion.div variants={item} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                    <h1 className="uppercase text-center md:text-4xl text-xl">Get Your tickets Now</h1>
                    <p className="text-center md:text-xl text-sm mt-3 max-sm:hidden">Get a 40% discount on first purchase</p>
                    <div className="flex items-baseline md:mt-16 mt-5 justify-center">
                        <button className="md:px-7 px-3 max-md:text-sm md:py-2 py-1 border-2 hover:bg-white hover:text-black transition-all ease-in duration-200">See More</button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Book