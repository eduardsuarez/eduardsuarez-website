
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import React from 'react'
import Skills from '@/components/Skills'

export default function Home (): JSX.Element {
  return (

    <><Navbar />
      <Main />
      <About />
      <Skills />
    </>
  )
}
