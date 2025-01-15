import { useState, useEffect } from 'react'
import Nav from './Nav'
import Work from './Work'
import Contact from './Contact'
import About from './About'

const Home2 = () => {
  let down = String.fromCodePoint(8595)

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [toggle3, setToggle3] = useState(true)

  const handleClick = () => {
    if (isOpen2 && isOpen3) setIsOpen3(!isOpen3)
    setIsOpen(!isOpen)
  }

  const handleClick2 = () => {
    setIsOpen2(!isOpen2)
  }

  const handleClick3 = () => {
    setIsOpen3(!isOpen3)
  }
  useEffect(() => {
    if (isOpen3 && isOpen2) setIsOpen(false)
  }, [isOpen2, isOpen3])

  const translate = () => {
    setToggle(!toggle)
    if (!toggle) {
      setIsOpen(false)
      setIsOpen2(false)
      setIsOpen3(false)
    }

    setTimeout(() => {
      setToggle2(!toggle2)
    }, 700)
    setTimeout(() => {
      setToggle3(!toggle3)
    }, 700)
  }
  return (
    <div className=''>
      <div className='flex flex-col h-full'>
        <Nav
          isOpen={isOpen}
          isOpen2={isOpen2}
          isOpen3={isOpen3}
          handleClick={handleClick}
          handleClick2={handleClick2}
          handleClick3={handleClick3}
          toggle={toggle}
          toggle2={toggle2}
          toggle3={toggle3}
        />

        <div
          className={`duration-500 flex flex-row ${
            toggle3 ? 'h-16' : 'h-full'
          }`}
        >
          <div
            onClick={() => handleClick()}
            className={`overflow-scroll duration-500 border-r-2 border-green-500 ${
              isOpen ? 'w-48' : 'w-12'
            }`}
          >
            <About
              isOpen={isOpen}
              isOpen2={isOpen2}
              isOpen3={isOpen3}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
          </div>
          <div
            onClick={() => handleClick2()}
            className={`overflow-scroll duration-500 border-r-2 border-green-500 ${
              isOpen2 ? 'w-48' : 'w-12'
            }`}
          >
            <Work
              handleClick2={handleClick2}
              isOpen2={isOpen2}
              toggle={toggle}
            />
          </div>
          <div
            onClick={() => handleClick3()}
            className={`duration-500 border-r-2 border-green-500 overflow-hidden ${
              isOpen3 ? 'w-48' : 'w-12'
            }`}
          >
            <Contact
              isOpen={isOpen}
              isOpen2={isOpen2}
              isOpen3={isOpen3}
              setIsOpen3={setIsOpen3}
              toggle={toggle}
            />
          </div>
        </div>
        <div
          className={`duration-500 w-auto border-b-2 border-green-500 crt ${
            toggle3 ? 'invisible' : ''
          }
          `}
        ></div>
        <div className='flex justify-center'>
          <button onClick={translate} className=' text-green-500'>
            <div className=''>
              <div
                className={` transform duration-700 text-2xl ${
                  toggle
                    ? ''
                    : '-translate-x-48 md:-translate-x-72 lg:-translate-x-0'
                }
            ${toggle2 ? '' : 'rotate-180'} 
            `}
              >
                {down}
                <p
                  className={`text-2xl ${toggle && toggle2 ? '' : 'hidden'}
            
            `}
                >
                  []
                </p>
              </div>
            </div>
          </button>
        </div>
        {/* <Footer /> */}
      </div>
      <div className='text-black'>.</div>
    </div>
  )
}

export default Home2
