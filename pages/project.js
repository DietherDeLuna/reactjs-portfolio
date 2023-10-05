import Footer from '@/components/Footer'
import React from 'react'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Projects from '@/components/Projects'

const about = () => {
  return (
    <div>

      <Head>
        <title>Diether De Luna | Projects</title>
        <meta name='description' content='Generated by Created Next App'/>
        <link rel='icon' href='/delicon.png'/>
      </Head>

        <Projects/>
        <Footer/>
    </div>
  )
}

export default about