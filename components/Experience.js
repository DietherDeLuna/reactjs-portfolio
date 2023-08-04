import React from 'react'
import Heading from './Heading'
import Button from "./Button"
import Image from 'next/image'
import {RiContactsBook2Line} from 'react-icons/ri'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { BsGlobe, BsGlobe2 } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'

const Experience = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='font-medium flex items-center justify-center gap-4 py-8 border-gray-300 
        text-[#232940] text-[27px] sm:text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] '>
            <div className='bg-[#5050e6] h-[2px] w-[100px] sm:w-[125px] md:w-[160px] lg:w-[300px]
             xl:w-[350px] translate-y-1'></div>
            <p className='py-4 font-medium text-gray-500 uppercase'>Work & Experience</p>
            <div className='bg-[#5050e6] h-[2px] w-[100px] sm:w-[125px] md:w-[160px] lg:w-[300px]
             xl:w-[350px] translate-y-1'></div>
            
        </motion.div>

        

        <div className='flex flex-col text-[25px]'>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-6 '>

            <div className=' flex flex-col gap-4 px-8 py-10 text-gray-500 rounded-[10px]'>
                <motion.div 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='-mt-5 mb-10'>
                    <h2 className='font-medium text-[20px] md:text-[30px]'>WEB DEVELOPER | Freelancer</h2>
                    <p className='font-medium'>2023 - Present</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Freelance programmer, front-end and back-end developer. Adept at working 
                    in teams to create high-quality websites and spot opportunities to improve user experience.</p>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='-mt-5 mb-10'>
                    <h2 className='font-medium w-[100%] md:w-[100%] text-[20px] md:text-[30px]'>LSPU SUPPLY OFFICE - Santa Cruz Laguna | Supply Chain Assistant</h2>
                    <p className='font-medium'>02/2023 - 06/2023</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Worked with procurement to create timely, precise production plans, ensuring that office supply operations proceeded as planned.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Maintained material inventories to achieve production schedules.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Expedited deliveries, verifying shipping estimates to support timely delivery of customer orders.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Documents were produced and photocopied on behalf of the office personnel.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Sourced vendors for supply, office equipment and facilities maintenance needs.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Performed a one-time cleansing of the LSPU offices and college departments.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Maintained and updated the record of the office equipment properties.</p>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='-mt-5 mb-10'>
                    <h2 className='font-medium w-[100%] md:w-[70%] text-[20px] md:text-[30px]'>JOLLIBEE - Santa Cruz Laguna | Service Crew</h2>
                    <p className='font-medium'>06/2019 - 09/2019</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Take orders from customers and present them as requested.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Serve fresh hot food in a timely manner.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Get tables cleaned once customers are through with their dining.</p>
                    <p className='w-[100%] md:w-[70%] text-[15px] md:text-[20px]'>•	Provide helpful answers to queries or questions proffered by customers.</p>
                </motion.div>
                
                

            </div>

        </div>
        
    </section>
  )
}

export default Experience
