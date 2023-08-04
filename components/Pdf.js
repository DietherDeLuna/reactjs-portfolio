import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../pages/variants'

const Pdf = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: true, amount: 0.7 }}
    className='flex items-center justify-center py-5 mb-8'>
        <a className='btn' href="DeLuna.pdf" download="Diether De Luna">Download CV</a>
    </motion.div>
  )
}

export default Pdf