import Image from 'next/image'
import Head from 'next/head'
import Hero from "../components/Hero"
import About from "../components/About"

import Navbar from "../components/Navbar"
import WhatIDo from '../components/WhatIDo'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'


export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div>
      <Head>
        <title>Diether De Luna | Web Developer</title>
        <meta name='description' content='Generated by Created Next App'/>
        <link rel='icon' href='/delicon.png'/>
      </Head>

      <header>
        <Navbar toggleSidebar={toggleSidebar}/>
      </header>

      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Hero/>
        
        <WhatIDo/>
        {/* <Skills/> */}
        <Work/>
        {/* <Contact/> */}
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
