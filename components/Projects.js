import React from 'react'
import Heading from './Heading'
import Button from "./Button"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'
import skill1 from './images/react-.png'
import skill2 from './images/html5.png'
import skill3 from './images/js.png'
import skill4 from './images/php-.png'
import skill5 from './images/mysql-.png'
import skill6 from './images/cs.png'

import project1 from './images/yt.JPG'
import project2 from './images/pdao-web.JPG'
import project3 from './images/pos-web.JPG'



const Projects = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='font-medium flex items-center justify-center gap-4 py-8 border-gray-300 
        text-[#232940] text-[20px] sm:text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] '>
            <div className='bg-[#5050e6] h-[2px] w-[100px] sm:w-[200px] md:w-[260px] lg:w-[370px]
             xl:w-[482px] translate-y-1'></div>
            <p className='py-4 font-medium text-gray-500 uppercase'>Projects</p>
            <div className='bg-[#5050e6] h-[2px] w-[100px] sm:w-[200px] md:w-[260px] lg:w-[370px]
             xl:w-[482px] translate-y-1'></div>
            
        </motion.div>
        

        <motion.p 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='text-gray-600 mt-5 mb-12 text-[15px] md:text-[20px]'>
            I am a Full Stack Developer specializing in building and designing exeptional digital experiences.
            Currently I am focused looking for a job opportunity where I can use my knowledge, skills and learnings.
            Obtain a responsible career path that will allow me to make the most of my education and experience while
            mastering both front-end and back-end languages, tools and frameworks. <br/>
            Below are some of my latest created projects.
        </motion.p>

        <div className='grid md:grid-cols-2 gap-8'>

            <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='relative'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-black/60 mb-10'>
                    <Image className='rounded-xl group-hover:opacity-40' src={project1} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='pb-4 text-2xl text-white tracking-wider text-center'>YouTube API Project</h3>
                        {/* <p className='pb-4 pt-2 text-white text-center'>Php, MySQL, Vue.js</p> */}
                        <Link href='https://github.com/DietherDeLuna/YouTube_API_Project'>
                            <p className='text-center w-[50%] mx-auto py-2 rounded-md bg-white text-gray-500 font-medium cursor-pointer hover:scale-105 ease-in duration-300'>More Info</p>
                        </Link>
                    </div>
                </div>

                <h2 className='text-2xl text-gray-400 tracking-wider font-medium'>Php, MySQL, Vue.js</h2>

            </motion.div>

            <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='relative'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-black/60 mb-10'>
                    <Image className='rounded-xl group-hover:opacity-40' src={project2} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='pb-4 text-2xl text-white tracking-wider text-center'>PDAO Laguna Website</h3>
                        {/* <p className='pb-4 pt-2 text-white text-center'>Php, MySQL, Bootstrap</p> */}
                        <Link href=''>
                            <p className='text-center w-[50%] mx-auto py-2 rounded-md bg-white text-gray-500 font-medium cursor-pointer hover:scale-105 ease-in duration-300'>More Info</p>
                        </Link>
                    </div>
                </div>
                <h2 className='text-2xl text-gray-400 tracking-wider font-medium'>Php, MySQL, Bootstrap</h2>

            </motion.div>

            <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='relative'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-black/60 mb-10'>
                    <Image className='rounded-xl group-hover:opacity-40' src={project3} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='pb-4 text-2xl text-white tracking-wider text-center'>Point of Sale System</h3>
                        {/* <p className='pb-4 pt-2 text-white text-center'>Php, MySQL, Bootstrap</p> */}
                        <Link href=''>
                            <p className='text-center w-[50%] mx-auto py-2 rounded-md bg-white text-gray-500 font-medium cursor-pointer hover:scale-105 ease-in duration-300'>More Info</p>
                        </Link>
                    </div>
                </div>
                <h2 className='text-2xl text-gray-400 tracking-wider font-medium'>Php, MySQL, Bootstrap</h2>

            </motion.div>





        </div>

    </section>
  )
}

export default Projects
