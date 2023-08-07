import React from 'react'
import Heading from './Heading'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiIndeed } from 'react-icons/si'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#EFF1F5] bg-cover bg-center h-[200px] grid place-items-center'>
        
        <div className='text-center'>

            <div className='bg-[#5050e6] h-[2px] w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px]
             xl:w-[1000px] translate-y-1'></div>
             <div className='flex items-center justify-between mt-5'>
              <p className='font-medium text-gray-500 uppercase text-[10px] md:text-[20px]'>Follow Me!</p>
              <p className='font-medium text-gray-500 uppercase text-[10px] md:text-[20px]'>&copy; Diether De Luna 2023</p>
             </div>
             <div className='flex items-center gap-4 my-4 w-full sm:w-[300px] md:w-[350px] lg:w-[400px]
             xl:w-[1000px]'>

                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                ease-in duration-300'>
                <Link href='https://www.linkedin.com/in/diether-de-luna'>
                    <FaLinkedinIn/>
                </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                ease-in duration-300'>
                  <Link href='https://github.com/DietherDeLuna'>
                    <FaGithub/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                ease-in duration-300'>
                  <Link href='/contact'>
                    <AiOutlineMail/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                ease-in duration-300'>
                  <Link href='https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage&_ga=2.115928070.1261388638.1690700199-593607457.1690109824'>
                    <SiIndeed/>
                  </Link>
                  
                </div>

              </div>
        </div>

    </div>
  )
}

export default Footer
