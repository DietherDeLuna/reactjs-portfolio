import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'
import project1 from './images/pdao-web.jpg'
import project2 from './images/pdao-dashboard.jpg'
import project3 from './images/pos-web.jpg'

const Work = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        
        <motion.div 
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>
            <Heading title="Projects"/>
        </motion.div>

        <div className='grid grid-cols-1 gap-4'>

            {/* <div className='row-span-2 relative group'>

                <Image 
                src={Dietpng} 
                alt=''

                />

                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition 
                duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                    Project Title
                </div>

            </div> */}
            

            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='relative group'>

                <Image className='' src={project1} alt='/' width='1300' height='50'/>

                <div className='bg-black/60 absolute w-[100%] h-[100%] top-0 opacity-0 transition 
                duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                    <p className='font-medium text-[20px]'>
                        pdaoportal.online
                    </p>
                </div>

                

            </motion.div>

            <div className='grid grid-cols-2 gap-4'>

                <motion.div 
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='relative group'>

                    <Image className='' src={project2} alt='/' width='1300' height='50'/>

                    <div className='bg-black/60 absolute w-[100%] h-[100%] top-0 opacity-0 transition 
                    duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                        <p className='font-medium text-[20px]'>
                            Admin Dashboard
                        </p>
                    </div>

                    

                </motion.div>

                <motion.div 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='relative group'>

                    <Image className='' src={project3} alt='/' width='1300' height='50'/>

                    <div className='bg-black/60 absolute w-[100%] h-[100%] top-0 opacity-0 transition 
                    duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                        <p className='font-medium text-[20px]'>
                            POS System
                        </p>
                    </div>
                </motion.div>

            </div>

            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col items-center justify-center mt-8 text-[15px] sm:text-[40px]'>
                <p className='py-4 font-medium text-[#5050e6] uppercase'>Lets Build something New</p>
                <p className='py-4 font-medium text-[#5050e6] uppercase'>Team with me</p>
            </motion.div>

        </div>
        
        
        
    </section>
  )
}

export default Work