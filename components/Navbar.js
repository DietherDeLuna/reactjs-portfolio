import Link from 'next/link'
import React, {useState} from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import ddicon from './images/dd-icon.png'

const Navbar = ({toggleSidebar}) => {

  const router = useRouter()
  
  const navAbout = [
    {
      name: "About Me",
      link: "/about",
    },
  ]

  const navExperience = [
    {
      name: "Experience",
      link: "/experience",
    },
  ]

  const navProject = [
    {
      name: "Project",
      link: "/project",
    },
  ]

  const navContact = [
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  }


  return (
    <div className='bg-white fixed w-full h-20 z-[100]'>

      <div className='container mx-auto flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* Navbar Website */}

        <div className='flex flex-col-1'>
          <Link href='/'>
            <Image className='cursor-pointer' src={ddicon} alt='/' width='80' height='50'/>
            
          </Link>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/'>
              <p className='text-[#5050e6] font-bold tracking-[3px] text-sm uppercase mt-3'>Diether De Luna</p>
              <p className='text-[#5050e6] font-bold tracking-[3px] text-sm uppercase'>Web Developer</p>
            </Link>
          </div>
        </div>

        <div className='flex flex-col-1'>
          <ul className='hidden md:flex '>
            <li className='nav ml-10 text-sm uppercase'>
              {navAbout.map(({ link, name}) => (
                <Link
                  key={name}
                  href={link}
                  className={`${router.pathname === link ? 'navactive ' : ''} `}
                  >
                    {name}
                </Link>
              ))}
              {/* <Link href='/about'>About Me</Link> */}
            </li>

            <li className='nav ml-10 text-sm uppercase'>
              {navExperience.map(({ link, name}) => (
                <Link
                  key={name}
                  href={link}
                  className={`${router.pathname === link ? 'navactive ' : ''} `}
                  >
                    {name}
                </Link>
              ))}
            </li>

            <li className='nav ml-10 text-sm uppercase'>
              {navProject.map(({ link, name}) => (
                <Link
                  key={name}
                  href={link}
                  className={`${router.pathname === link ? 'navactive ' : ''} `}
                  >
                    {name}
                </Link>
              ))}
            </li>

            <li className='nav ml-10 text-sm uppercase'>
              {navContact.map(({ link, name}) => (
                <Link
                  key={name}
                  href={link}
                  className={`${router.pathname === link ? 'navactive' : ''} `}
                  >
                    {name}
                </Link>
              ))}
              {/* <Link href='/about'>About Me</Link> */}
            </li>
            

            {/* <Link href='/skills'>
              <li className='nav ml-10 text-sm uppercase'>Skills</li>
            </Link> */}

            {/* <Link href='/experience'>
              <li className='nav ml-10 text-sm uppercase'>Experience</li>
            </Link> */}

            {/* <Link href='/contact'>
              <li className='nav ml-10 text-sm uppercase'>Contact</li>
            </Link> */}

          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>

            <AiOutlineMenu size={25}/>

          </div>
        </div>
      </div>

      {/* Navbar Mobile */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        <div className={nav ? 
        'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={ddicon} alt='/' width='87' height='35'/>

              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 font-bold text-[#5050e6]'>Diether De Luna - Web Developer</p>
            </div>
          </div>

          <div className='py-4 flex flex-col-1'>
            <ul className='uppercase'>
               <li className='nav mb-4 text-sm uppercase'>
                  {navAbout.map(({ link, name}) => (
                    <Link
                      key={name}
                      href={link}
                      className={`${router.pathname === link ? 'navactive' : ''} `}
                      >
                        {name}
                    </Link>
                  ))}
                </li>

                <li className='nav mb-4 text-sm uppercase'>
                  {navExperience.map(({ link, name}) => (
                    <Link
                      key={name}
                      href={link}
                      className={`${router.pathname === link ? 'navactive' : ''} `}
                      >
                        {name}
                    </Link>
                  ))}
                </li>

                <li className='nav mb-3 text-sm uppercase'>
                  {navContact.map(({ link, name}) => (
                    <Link
                      key={name}
                      href={link}
                      className={`${router.pathname === link ? 'navactive' : ''} `}
                      >
                        {name}
                    </Link>
                  ))}
                </li>

              {/* <Link href='/about'>
                <li className='nav py-4 text-sm uppercase'>About Me</li>
              </Link> */}

              {/* <Link href='/skills'>
                <li className='nav py-4 text-sm'>Skills</li>
              </Link> */}

              {/* <Link href='/experience'>
                <li className='nav py-4 text-sm'>Experience</li>
              </Link> */}

              {/* <Link href='/contact'>
                <li className='nav py-4 text-sm'>Contact</li>
              </Link> */}
            </ul>

          </div>

          <div className='pt-40'>

            <p className='uppercase tracking-widest text-[#5050e6] font-bold'>Lets create together</p>

            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-300'>
                <Link href='https://www.linkedin.com/in/diether-de-luna-314183285/'>
                  <FaLinkedinIn/>
                </Link>
              
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-300'>
                <FaGithub/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-300'>
                <AiOutlineMail/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-300'>
                <BsFillPersonLinesFill/>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar
