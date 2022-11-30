import { useState } from 'react'

import Nav from './Nav'
import Footer from './Footer'
import Work from './Work'
import Contact from './Contact'
import Resume from './Resume'
import About from './About'

const Home = () => {
  const [currentPage, setCurrentPage] = useState('')

  const renderPage = () => {
    console.log('butts')
    if (currentPage === 'Work') {
      console.log(currentPage)
      return <Work />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <About />
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className='flex flex-col h-screen justify-between'>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>

      <Footer />
    </div>
  )
}

export default Home
