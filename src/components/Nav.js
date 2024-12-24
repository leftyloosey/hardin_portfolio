// import me2 from '../images/green_bulb_david2.jpg'

const Nav = ({
  isOpen,
  isOpen2,
  isOpen3,
  handleClick,
  handleClick2,
  handleClick3,
}) => {
  console.log(isOpen3)
  return (
    <div className=''>
      {/* <img alt='me2.jpg' src={me2} className=''></img> */}

      {/* <section className='bg-black crt text-green-500 z-50  justify-between shadow-sm lg:justify-around border-b-2 border-green-600'> */}
      <section className='bg-black text-green-500 z-50 fixed top-0 flex flex-row h-16 w-screen border-b-2 border-green-600 '>
        {/* <div className='invisible'>.</div> */}
        <div className='flex flex-row items-end space-x-2 crt'>
          <div
            className={`duration-500 hover:text-green-300 ${
              isOpen ? 'ml-36 pr-3' : ''
            }`}
          >
            <a
              href='#About'
              onClick={() => handleClick()}

              // onClick={() => handlePageChange('About')}
            >
              about
            </a>
          </div>

          <div
            className={`duration-500 hover:text-green-300 ${
              isOpen2 ? 'ml-32 pr-28' : ''
            }
            ${!isOpen && isOpen2 ? 'ml-32 pr-36' : ''}
             
            `}
          >
            <a
              href='#Work'
              onClick={() => handleClick2()}
              // onClick={() => handlePageChange('Work')}
              className='hover:text-green-300'
            >
              work
            </a>
          </div>

          <div
            className={`duration-500 hover:text-green-300 ${
              isOpen3 && isOpen2 ? 'ml-32 pl-1' : 'ml-36'
            }  `}
          >
            <a
              href='#Contact'
              onClick={() => handleClick3()}
              className='hover:text-green-300'
            >
              contact
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nav
