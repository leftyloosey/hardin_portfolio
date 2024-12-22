// import me2 from '../images/green_bulb_david2.jpg'

const Nav = ({ currentPage, handlePageChange }) => {
  console.log(currentPage)
  return (
    <div className=''>
      {/* <img alt='me2.jpg' src={me2} className=''></img> */}

      {/* <section className='bg-black crt text-green-500 z-50  justify-between shadow-sm lg:justify-around border-b-2 border-green-600'> */}
      <section className='bg-black text-green-500 z-50 fixed top-0 flex flex-row h-16 w-screen justify-between border-b-2 border-green-600'>
        <div className='invisible'>.</div>
        <div className='flex flex-row items-end space-x-12 mr-48 crt'>
          <div className='group'>
            <a
              href='#About'
              onClick={() => handlePageChange('About')}
              className='hover:text-green-300'
            >
              about
            </a>
            {/* <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black'></div> */}
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <a
              href='#Work'
              onClick={() => handlePageChange('Work')}
              className='hover:text-green-300'
            >
              work
            </a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <a
              href='#a'
              onClick={() => handlePageChange('Resume')}
              className='hover:text-green-300'
            >
              resume
            </a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <a
              href='#Contact'
              onClick={() => handlePageChange('Contact')}
              className='hover:text-green-300'
            >
              contact
            </a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nav
