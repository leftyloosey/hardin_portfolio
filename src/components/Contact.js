import React from 'react'

const Contact = ({ isOpen, isOpen2, isOpen3, setIsOpen3 }) => {
  // if (isOpen && isOpen2) setIsOpen3(false)

  return (
    <>
      {isOpen3 ? (
        <div className={`flex flex-row mt-20 ${!isOpen3 ? 'invisible' : ''}`}>
          <div className='hover:text-green-300'>
            {/* <a href={'mailto:thisgoestodavid@gmail.com'}>
          thisgoestodavid@gmail.com
        </a> */}
            <div>e-mail</div>
            <div>resume</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Contact
