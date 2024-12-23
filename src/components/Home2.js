import { useState, useEffect } from 'react'

// import me2 from '../images/green_bulb_david2.jpg'

import Nav from './Nav'
// import Footer from './Footer'
import Work from './Work'
import Contact from './Contact'
// import Resume from './Resume'
import About from './About'

const Home2 = () => {
  // const [currentPage, setCurrentPage] = useState('')

  // const renderPage = () => {
  //   if (currentPage === 'Work') {
  //     return <Work />
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />
  //   }
  //   if (currentPage === 'About') {
  //     return <About />
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />
  //   }
  //   return <About />
  // }

  // const handlePageChange = (page) => setCurrentPage(page)

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  // const [recent, setRecent] = useState()

  const handleClick = () => {
    if (isOpen2 && isOpen3) setIsOpen3(!isOpen3)
    setIsOpen(!isOpen)
    console.log('1:1', isOpen)
    console.log('1:2', isOpen2)
    console.log('1:3', isOpen3)
  }

  const handleClick2 = () => {
    setIsOpen2(!isOpen2)
    // if (isOpen && isOpen2 && isOpen3) setIsOpen(!isOpen)
    console.log('2:1', isOpen)
    console.log('2:2', isOpen2)
    console.log('2:3', isOpen3)
  }

  const handleClick3 = () => {
    setIsOpen3(!isOpen3)
    // if (isOpen && isOpen2 && isOpen3) setIsOpen(!isOpen)

    console.log('3:1', isOpen)
    console.log('3:2', isOpen2)
    console.log('3:3', isOpen3)
  }
  useEffect(() => {
    console.log('rerender')
    if (isOpen3 && isOpen2) setIsOpen(false)
  }, [isOpen2, isOpen3])

  return (
    <div className='flex flex-col'>
      <Nav
        isOpen={isOpen}
        isOpen2={isOpen2}
        isOpen3={isOpen3}
        handleClick={handleClick}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
      />
      <div className='flex flex-row'>
        <div
          onClick={() => handleClick()}
          className={`duration-500 border-r-2 border-green-500 ${
            isOpen ? 'w-48' : 'w-12'
          }`}
        >
          <About
            isOpen={isOpen}
            isOpen2={isOpen2}
            isOpen3={isOpen3}
            setIsOpen={setIsOpen}
          />
        </div>
        <div
          onClick={() => handleClick2()}
          className={`duration-500 border-r-2 border-green-500 ${
            isOpen2 ? 'w-48' : 'w-12'
          }`}
        >
          <Work isOpen2={isOpen2} />
        </div>
        <div
          onClick={() => handleClick3()}
          className={`duration-500 border-r-2 border-green-500 ${
            isOpen3 ? 'w-48' : 'w-12'
          }`}
        >
          <Contact
            isOpen={isOpen}
            isOpen2={isOpen2}
            isOpen3={isOpen3}
            setIsOpen3={setIsOpen3}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home2
