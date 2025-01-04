import React from 'react'

const Contact = ({ isOpen, isOpen2, isOpen3, setIsOpen3 }) => {
  // if (isOpen && isOpen2) setIsOpen3(false)

  return (
    <>
      {isOpen3 ? (
        <div
          className={`text-green-500 flex flex-row justify-start mt-24 ${
            !isOpen3 ? 'invisible' : ''
          }`}
        >
          <div className='flex flex-col items-baseline ml-2'>
            {/* <a href={'mailto:thisgoestodavid@gmail.com'}>
          thisgoestodavid@gmail.com
        </a> */}
            <button className='hover:text-green-300'>e-mail</button>
            <button className='hover:text-green-300'>resume</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Contact
