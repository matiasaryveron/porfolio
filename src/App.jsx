import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Main from './assets/components/Main/Main'
import Projects from './assets/components/Projects/Projects'
import Skills from './assets/components/Skills/Skills'
import Footer from './assets/components/Footer/Footer'
import FloatingButtons from './assets/components/FloatingButtons/FloatingButtons'

const App = () => {
  return (
    <main  className='overflow-x-hidden'>
      <Navbar/>
      <Main/>
      <Skills/>
      <Projects/>
      <Footer/>
      <FloatingButtons/>
    </main>
  )
}

export default App