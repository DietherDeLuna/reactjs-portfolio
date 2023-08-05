import React from 'react'
import Heading from './Heading'
import Button from "./Button"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from './Variants.js'
import skill1 from '../public/images/react-.png'
import skill2 from '../public/images/html5.png'
import skill3 from '../public/images/js.png'
import skill4 from '../public/images/php-.png'
import skill5 from '../public/images/mysql-.png'
import skill6 from '../public/images/cs.png'



const Skills = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <motion.div
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}>
            <Heading title="Skills"/>
        </motion.div>
        

        <motion.p 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='text-gray-600 -mt-10 mb-10 text-[15px] md:text-[20px]'>
            I am a highly skilled web developer with expertise in React.js, HTML5, JavaScript, PHP, MySQL, database 
            design, and front-end developer. Adept at working in teams to create high-quality websites 
            and spot opportunities to improve user experience.
        </motion.p>

        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 text-[20px] font-medium'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justitfy-center items-center'>
                    <div className='m-auto'>
                        <Image className='cursor-pointer' src={skill1} alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justitfy-center items-center'>
                    <div className='m-auto'>
                        <Image className='cursor-pointer' src={skill2} alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justitfy-center items-center'>
                    <div className='m-auto'>
                        <Image className='cursor-pointer' src={skill3} alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justitfy-center items-center'>
                    <div className='m-auto'>
                        <Image className='cursor-pointer' src={skill4} alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>PHP</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justitfy-center items-center'>
                    <div className='m-auto'>
                        <Image className='cursor-pointer' src={skill5} alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MySQL</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justitfy-center items-center'>
                    <div className='m-auto'>
                        <Image className='cursor-pointer' src={skill6} alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>



            {/* <div>
                <p>React.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>

                    <div className='bg-[#5050e6] absolute h-[4px] w-[90%] '> </div>

                </div>
            </div>

            <div>
                <p>HTML5</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>

                    <div className='bg-[#5050e6] absolute h-[4px] w-[85%] '> </div>

                </div>
            </div>

            <div>
                <p>JavaScript</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>

                    <div className='bg-[#5050e6] absolute h-[4px] w-[80%] '> </div>

                </div>
            </div>

            <div>
                <p>PHP</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>

                    <div className='bg-[#5050e6] absolute h-[4px] w-[96%] '> </div>

                </div>
            </div>

            <div>
                <p>CSS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>

                    <div className='bg-[#5050e6] absolute h-[4px] w-[85%] '> </div>

                </div>
            </div>

            <div>
                <p>MySQL</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>

                    <div className='bg-[#5050e6] absolute h-[4px] w-[90%] '> </div>

                </div>
            </div> */}

        </motion.div>

        
    </section>
  )
}

export default Skills