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
        <div className='overflow-scroll flex flex-col mt-24 bg-black text-green-500'>
          <div className={`h-auto w-48 rounded-sm`}>
            My Name is David Hardin.<br></br>
            <br></br>i can fit my entire fist in my mouth. i can fit your entire
            fist in my mouth<br></br>Mongo, Express, React, Node. etc etc
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
