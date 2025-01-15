// import { useState, useEffect } from 'react'
import me2 from '../images/green_bulb_david2.jpg'

const About = ({ isOpen, isOpen2, isOpen3, setIsOpen }) => {
  // const check3 = () => {
  //   if (isOpen2 && isOpen3) setIsOpen(true)
  //   console.log('click')
  // }

  return (
    <div>
      {isOpen ? (
        <div className='flex flex-col mt-24 text-green-500 no-scrollbar h-full overflow-x-hidden'>
          <div className='w-48 rounded-sm'>
            My Name is David Hardin.<br></br>
            <br></br>Full Stack React + Technical Writer<br></br>Mongo, Express,
            REST, Redux, graphQL, Node. etc etc
            <img alt='me2.jpg' src={me2}></img>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
  // return (
  //   <div className='flex mt-40 bg-black crt text-green-500'>
  //     <div className={`h-auto w-48 rounded-sm ${!isOpen ? 'invisible' : ''}`}>
  //       My Name is David Hardin.<br></br>
  //       <br></br>text text text text text text text text text text text text
  //       text text text text text text text text<br></br>Mongo, Express, React,
  //       Node. etc etc
  //       <img
  //         alt='me2.jpg'
  //         src={me2}
  //       ></img>
  //     </div>
  //   </div>
  // )
}

export default About
