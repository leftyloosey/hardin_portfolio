import me2 from '../images/me2.jpeg'

const Nav = ({ currentPage, handlePageChange }) => {
  console.log(currentPage)
  return (
    <div>
      <section className='flex flex-row h-40 justify-between lg:justify-around'>
        <img alt='me2.jpg' src={me2}></img>
        <div className='flex flex-row items-end space-x-3 px-3'>
          <div className='group '>
            <a
              href='#About'
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About'
                  ? 'text-muted text-decoration-none p-1'
                  : 'text-dark text-decoration-none'
              }
            >
              about
            </a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <a href='#Work' onClick={() => handlePageChange('Work')}>
              work
            </a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <a href='#Contact' onClick={() => handlePageChange('Contact')}>
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
