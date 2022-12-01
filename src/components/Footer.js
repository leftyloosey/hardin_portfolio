import github from '../images/github.png'
import linkedin from '../images/linked.png'

const style = { height: '1.5rem' }

const Footer = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 right-0 width-auto shadow-sm'>
      <div className='flex flex-row justify-between'>
        <div className='flex items-end ml-2 '>© 2022_david_hardin</div>
        <div className='flex items-end mr-5 space-x-3'>
          <a href='https://github.com/leftyloosey'>
            <img style={style} src={github} alt='github' />
          </a>
          <a href='https://www.linkedin.com/in/david-hardin-a934294b/'>
            <img style={style} src={linkedin} alt='linkedin' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
