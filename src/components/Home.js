import { useState } from 'react'

import me2 from '../images/green_bulb_david2.jpg'

import Nav from './Nav'
import Footer from './Footer'
import Work from './Work'
import Contact from './Contact'
import Resume from './Resume'
import About from './About'

const Home = () => {
  const [currentPage, setCurrentPage] = useState('')

  const renderPage = () => {
    if (currentPage === 'Work') {
      // console.log(currentPage)

      return <Work />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <About />
  }

  const handlePageChange = (page) => setCurrentPage(page)

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex flex-col justify-between font-mono'>
      <div className='flex flex-row'>
        <div className='flex flex-col border-r-2 border-green-600'></div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className=''>{renderPage()}</div>
        {/* <div className='crt'>.</div> */}
      </div>
      <div className=''>.</div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
