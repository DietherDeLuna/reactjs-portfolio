import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Typewritter from "typewriter-effect"
import Button from "./Button"

import {AiOutlineGift} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {BsGlobe2} from 'react-icons/bs'
import {TbPacman} from 'react-icons/tb'
import {IoLocationOutline} from 'react-icons/io5'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'



const Hero = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
            
            
        </div> 

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            {/*About Me Image*/}
            <motion.div 
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}>
                <Image className='flex mx-auto rounded-[10px]' src='/../public/images/D-1.jpg' alt='/' width='400' height='50'/>
            </motion.div>
            {/*End About Me Image*/}

            <div>

                <div className='container mx-auto px-4'>

                    <div className='max-w-[450px] text-white flex flex-col gap-[40px] mx-auto'>

                        <div className='justify-between'>
                            <motion.h1 
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-5xl text-[#5050e6]'>Lets create your vision together</motion.h1>
                            <motion.h4 
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-2xl mt-3 text-gray-500'>I am a Passionate
                                <Typewritter
                                    options={{ 
                                        strings: [
                                            "Web Developer",
                                            "UI/UX Designer",
                                            "Freelancer"
                                        ],
                                        changeDelay: 3,
                                        changeDeletedSpeed: 2,
                                        autoStart: true,
                                        loop: true

                                    }}/>
                            </motion.h4>

                        </div>

                        <motion.div 
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='bg-[#5050e6] h-[2px] w-[100px]'>
                        </motion.div>

                        <div>
                            <motion.p 
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-gray-500'>
                                My name is Diether De Luna. I am a web developer and Im dedicated to my work.
                                Lets build and turn your vision into reality. 
                            </motion.p>

                            
                            {/* <Button link='about' text="Know More"/> */}
                            <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}>
                                <Link href='/about'>
                                    <button className='btn'>Know More</button>
                                </Link>
                            </motion.div>
                        </div>

                    </div>

                </div>

              

            </div>

        </div>

    </section>
    // <div className='bg-[url("../public/images/hero.jpg")] h-screen bg-cover bg-center bg-fixed flex 
    // items-center'>

    //     <div className='container mx-auto px-4'>

    //         <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>

    //             <div className='justify-between'>
    //                 <h1 className='text-5xl'>Im Diether De Luna </h1>
    //                 <h4 className='text-2xl mt-3'>
    //                     <Typewritter 
    //                         options={{ 
    //                             strings: [
    //                                 "Front End Developer",
    //                                 "UI/UX Designer"
    //                             ],
    //                             changeDelay: 3,
    //                             changeDeletedSpeed: 2,
    //                             autoStart: true,
    //                             loop: true

    //                         }}/>
    //                 </h4>

    //             </div>

    //             <div className='bg-[#5050e6] h-[2px] w-[100px]'></div>

    //             <div>
    //                 <p>
    //                     In a professional context it often happens that private clients 
    //                     corder a publication  to be made.
    //                 </p>

    //                 <Button link="#" text="Learn More"/>
    //             </div>

    //         </div>

    //     </div>

    // </div>
  )
}

export default Hero
