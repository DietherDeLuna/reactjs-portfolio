import React from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'

import {RiLightbulbFlashLine} from 'react-icons/ri'

const WhatIDo = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <motion.div 
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}>
            <Heading title="What I Do"/>
        </motion.div>
        

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#5050e6] text-white rounded-[10px]'>

                <RiLightbulbFlashLine className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Creative Designs</h2>

                <p>
                    Ensuring that the user interface and user experience is stunning and well-planned.
                </p>

            </motion.div>

            <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#5050e6] text-white rounded-[10px]'>

                <RiLightbulbFlashLine className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Design for you</h2>

                <p>
                    Design website to meet every individuals particular needs.
                </p>

            </motion.div>

            <motion.div 
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#5050e6] text-white rounded-[10px]'>

                <RiLightbulbFlashLine className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Build your Website</h2>

                <p>
                    Build and create something new, make your business and vision connect more to people.
                </p>

            </motion.div>

        </div>
        
    </section>
  )
}

export default WhatIDo
