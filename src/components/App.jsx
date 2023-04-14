// Main File

import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Technologies from './Technologies'
import Form from './Form'
import Footer from './Footer'

function App() {

  return (
    <main className=' text-gray-400 text-lg font-body leading-8'>

      <Navbar />
      <Title />
      <Technologies />
      <Form />
      <Footer />

    </main>
  )
}

export default App
