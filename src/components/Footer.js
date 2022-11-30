import github from '../images/github.png'
import linkedin from '../images/linked.png'

const style = { height: '1.5rem' }

const Footer = () => {
  return (
    <div className='width-auto border border-top-1'>
      <div className='flex flex-row justify-between'>
        <span>© 2022 david hardin</span>
        <div style={style} className='flex flex-row '>
          <img src={github} alt='github' />
          <img src={linkedin} alt='linkedin' />
        </div>
      </div>
    </div>
  )
}

export default Footer
