import me2 from '../images/me2.jpeg'

const Nav = () => {
  return (
    <div>
      <section className='flex flex-row h-40 justify-between lg:justify-around'>
        <img alt='me2.jpg' src={me2}></img>
        <div className='flex flex-row items-end space-x-3 px-3'>
          <div class='group '>
            <a href='#'>about</a>
            <div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div class='group'>
            <a href='#'>work</a>
            <div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div class='group'>
            <a href='#'>contact</a>
            <div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nav
