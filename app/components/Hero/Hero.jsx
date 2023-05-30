'use client'
import Image from "next/image"
import {motion} from "framer-motion"

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, y:30,  },
        show: { opacity: 1, y:0, transition:{type: 'smooth'} },
    };

    const image = {
        hidden: { opacity: 0, y:30,  },
        show: { opacity: 1, y:0, transition:{type: 'smooth'} },
    }

    return (
        <div className="pt-28">
            <motion.div initial='hidden' whileInView='show' viewport={{once:true}} variants={container}
             className="flex flex-col items-center justify-between">
                <motion.h1 variants={item} className="text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl">Feel the Rhythm of</motion.h1>
                 <motion.p className="text-center text-9xl pb-14 max-lg:text-7xl max-md:text-5xl" variants={item}>Your Heart&apos;s Music</motion.p>
                <motion.p variants={item} className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm">The biggest, extraordinary and spread out K-Pop music festival all around the world 
                    , in cooperation with all the famous k-pop indusry agencies in korea and other outstanding talents
                </motion.p>
            </motion.div>
            <div className="mt-28 text-white">
                <div className="p-2 relative">
                    <motion.img initial={{y:400, opacity:0 }} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8, type:"keyframes"}} className="w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover object-top opacity-100" src="/Image4.webp" alt="" />
                    <motion.div variants={container} whileInView='show' initial='hidden' viewport={{once:true}} transition={{delayChildren:0.1}}>
                    <motion.span variants={image} className="absolute top-4 left-4 lg:text-7xl text-4xl">Aespa</motion.span>
                    <motion.span variants={image} className="absolute bottom-8 left-4 lg:text-xl md:text-base text-sm max-sm:hidden">Aespa is a South Korean girl group formed by SM Entertainment. </motion.span>
                    <motion.span variants={image}className="absolute top-4 right-4 md:text-xl text-sm">Go and Buy the tickets</motion.span>
                    <motion.span variants={image} className="absolute right-4 bottom-4 md:text-3xl text-sm">Seoul, December 12</motion.span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero