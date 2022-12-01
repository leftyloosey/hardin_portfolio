import github from '../images/github.png'
import linkedin from '../images/linked.png'

const style = { height: '1.5rem' }

const Footer = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 right-0 width-auto shadow-sm sticky top-0'>
      <div className='flex flex-row justify-between'>
        <div>© 2022 david hardin</div>
        <div style={style} className='flex flex-row'>
          <img src={github} alt='github' />
          <img src={linkedin} alt='linkedin' />
        </div>
      </div>
    </div>
  )
}

export default Footer
