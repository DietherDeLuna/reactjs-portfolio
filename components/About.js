import React from 'react'
import Heading from './Heading'
import Image from 'next/image'

import {BsPerson} from 'react-icons/bs'
import {AiOutlineGift} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {BsGlobe2} from 'react-icons/bs'
import {TbPacman} from 'react-icons/tb'
import {IoLocationOutline} from 'react-icons/io5'

import Button from "./Button"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'



const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='font-medium flex items-center justify-center gap-4 py-8 border-gray-300 
        text-[#232940] text-[27px] sm:text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] '>
            <div className='bg-[#5050e6] h-[2px] w-[160px] sm:w-[200px] md:w-[260px] lg:w-[370px]
             xl:w-[472px] translate-y-1'></div>
            <p className='py-4 font-medium text-gray-500 uppercase'>About me</p>
            <div className='bg-[#5050e6] h-[2px] w-[160px] sm:w-[200px] md:w-[260px] lg:w-[370px]
             xl:w-[472px] translate-y-1'></div>
            
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            {/*About Me Image*/}
            <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}>
                <Image className='rounded-[10px]' src='/../public/images/D-4.jpg' alt='/' width='500' height='50'/>
            </motion.div>
            {/*End About Me Image*/}

            <div>

              <motion.div 
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='max-w-[800px]'>

                <h2 className='font-bold mb-5 text-[#5050e6] text-[20px] uppercase'>
                  Personal Information
                </h2>

              </motion.div>

              <motion.div 
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='flex items-center justify-between w-[400px]'>
                {/*Description*/}
                <div className='flex flex-col gap-6'>
                  

                  <div className='flex gap-4 items-center font-medium'>
                  <BsPerson className='text-[#5050e6] text-[22px]'/>
                    Name
                  </div>

                  <div className='flex gap-4 items-center font-medium'>
                  <AiOutlineGift className='text-[#5050e6] text-[22px]'/>
                    Birthday
                  </div>

                  <div className='flex gap-4 items-center font-medium'>
                  <FiBookOpen className='text-[#5050e6] text-[22px]'/>
                    Study
                  </div>

                  {/* <div className='flex gap-4 items-center font-medium'>
                  <BsGlobe2 className='text-[#5050e6] text-[22px]'/>
                    Website
                  </div> */}

                  <div className='flex gap-4 items-center font-medium'>
                  <TbPacman className='text-[#5050e6] text-[22px]'/>
                    Interest
                  </div>

                  <div className='flex gap-4 items-center font-medium'>
                  <IoLocationOutline className='text-[#5050e6] text-[22px]'/>
                    Location
                  </div>

                </div>
                {/*End Description*/}

                <div className='flex flex-col gap-6 text-gray-600'>

                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                  {/* <div>:</div> */}
                  <div>:</div>
                  <div>:</div>

                </div>

                <div className='flex flex-col gap-6 text-gray-600'>

                  <div>Diether D. De Luna</div>
                  <div>Augsut 03, 2000</div>
                  <div>BS in Information Technology</div>
                  {/* <div>www.dietherdeluna.com</div> */}
                  <div>Frontend & Backend Developer</div>
                  <div>Santa Cruz Laguna</div>

                </div>

              </motion.div>

              <div className='max-w-[800px]'>

                <motion.h2 
                variants={fadeIn('left', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='font-bold mt-8 mb-10 text-[#5050e6]'>
                  Im Diether and a Web Developer
                </motion.h2>

                <motion.div
                variants={fadeIn('left', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}>
                  <p className='text-gray-600'>
                  Good Day! My name is Diether De Luna. I am a Web Developer, and Im very passionate and dedicated
                  to my work. Seeking a challenging opportunity where I may 
                  broaden my knowledge, skills, learnings, and ability to work 
                  well with people. Obtain a responsible career path that will 
                  allow me to make the most of my education.
                  </p>
                  <Link href='/contact'>
                    <button className='btn'>Hire me</button>
              ``  </Link>
                </motion.div>

              </div>

            </div>

        </div>

    </section>

    // <section className='container mx-auto py-10 px-4'>

    //     <Heading title="About Me" /> 

    //     <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
    //         {/*About Me Image*/}
    //         <div>
    //             <Image 
    //             className='w-[400px]'
    //             src={Dietpng} 
    //             alt='dietdeluna'

    //             />
    //         </div>
    //         {/*End About Me Image*/}

    //         <div>

    //           <div className='flex items-center justify-between w-[400px]'>
    //             {/*Description*/}
    //             <div className='flex flex-col gap-6'>

    //               <div className='flex gap-4 items-center font-medium'>
    //               <AiOutlineGift className='text-[#5050e6] text-[22px]'/>
    //                 Birthday
    //               </div>

    //               <div className='flex gap-4 items-center font-medium'>
    //               <FiBookOpen className='text-[#5050e6] text-[22px]'/>
    //                 Study
    //               </div>

    //               <div className='flex gap-4 items-center font-medium'>
    //               <BsGlobe2 className='text-[#5050e6] text-[22px]'/>
    //                 Website
    //               </div>

    //               <div className='flex gap-4 items-center font-medium'>
    //               <TbPacman className='text-[#5050e6] text-[22px]'/>
    //                 Interest
    //               </div>

    //               <div className='flex gap-4 items-center font-medium'>
    //               <IoLocationOutline className='text-[#5050e6] text-[22px]'/>
    //                 Location
    //               </div>

    //             </div>
    //             {/*End Description*/}

    //             <div className='flex flex-col gap-6 text-gray-600'>

    //               <div>:</div>
    //               <div>:</div>
    //               <div>:</div>
    //               <div>:</div>
    //               <div>:</div>

    //             </div>

    //             <div className='flex flex-col gap-6 text-gray-600'>

    //               <div>08.03.2000</div>
    //               <div>Laguna State Polytechnic University</div>
    //               <div>www.dietherdeluna.com</div>
    //               <div>Gaming, Coding</div>
    //               <div>Bukana, Gatid</div>

    //             </div>

    //           </div>

    //           <div className='max-w-[800px]'>

    //             <h2 className='font-bold mt-16 mb-10'>
    //               Im Diether and Full Stack Developer
    //             </h2>

    //             <p className='text-gray-600'>
    //               Good Day! My name is Diether De Luna. I am a Web Developer, and Im very passionate and dedicated
    //               to my work. With 4 years experience as a professional. 
    //             </p>

    //             <Button link='' text='Hire me'/>

    //           </div>

    //         </div>

    //     </div>

    // </section>
  )
}

export default About
