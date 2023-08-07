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


const Contacts = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='font-medium flex items-center justify-center gap-4 py-8 border-gray-300 
        text-[#232940] text-[20px] sm:text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px]  '>
            <div className='bg-[#5050e6] h-[2px] w-[100px] sm:w-[200px] md:w-[260px] lg:w-[370px]
             xl:w-[487px] translate-y-1'></div>
            <p className='py-4 font-medium text-gray-500 uppercase'>Contact</p>
            <div className='bg-[#5050e6] h-[2px] w-[100px] sm:w-[200px] md:w-[260px] lg:w-[370px]
             xl:w-[487px] translate-y-1'></div>
            
        </motion.div>

        

        <div className='flex flex-col text-[25px]'>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>

            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#5050e6] text-white rounded-[10px]'>

                <h2 className='font-medium mb-10 text-[25px] sm:text-[50px] md:text-[60px]'>Collaborate with me</h2>
                
                <h2 className='font-medium -mt-5 text-[11px] md:text-[20px]'>
                I am open to part-time/freelance or full-time employment opportunities.
                </h2>
                <h2 className='font-medium -mt-5 text-[11px] md:text-[20px]'>
                I am also ready to be a part of your team.
                </h2>
                <h2 className='font-medium -mt-5 text-[11px] md:text-[20px]'>
                Contact me so we can discuss..
                </h2>

                <div className='flex flex-col-1 gap-4'>
                    <div className=''>
                        <AiOutlineMail className='text-[15px] md:text-[28px]'/>
                        <IoLocationOutline className='text-[15px] md:text-[28px]'/>
                        <RiContactsBook2Line className='text-[15px] md:text-[28px] md:mb-1'/>
                        <FaLinkedinIn className='text-[15px] md:text-[28px]'/>
                    </div>

                    <div className=''>
                        <h2 className='font-medium text-[10px] md:text-[20px]'>dietherddeluna@gmail.com</h2>
                        <h2 className='font-medium text-[10px] md:text-[20px]'>Santa Cruz, Laguna</h2>
                        <h2 className='font-medium text-[10px] md:text-[20px]'>+63 (938) 788 0906</h2>
                        <h2 className='font-medium text-[10px] md:text-[20px]'>www.linkedin.com/in/diether-de-luna</h2>
                    </div>
                </div>
                

            </motion.div>

        </div>
        
    </section>
  )
}

export default Contacts
