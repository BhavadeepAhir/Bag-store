import React from 'react'
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart } from './components'
import { heroapi, bestselling, toprateslaes, highlight, story, footerAPI } from './data/data.js'

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={bestselling} ifExists />
        <FlexContent highlight={highlight} />
        <Sales endpoint={toprateslaes} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  )
}

export default App