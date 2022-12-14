import welder from '../images/welder.jpg'

const About = () => {
  return (
    <div className='mt-56'>
      <div className='mx-4 px-5 mt-5 shadow-md'>
        My Name is David Hardin.<br></br>
        <br></br> I'm a full stack developer by way of a career tending bar,
        around operate with the rigorous consistency under pressure crucial to
        that field. Graduate/certificate-holder of the University of Utah’s Dev
        Bootcamp, and I dream of robust, elegant code and subtly elegant boxes
        on screens. Mongo, Express, React, Node. etc etc
        <div className='flex flex-row shadow-sm'>
          <div>
            <p className='mt-8'>I'm also a welder/sculptor.</p>
          </div>
          <img
            alt='welder'
            src={welder}
            className='p-3 h-auto w-40 rounded-sm'
          ></img>
        </div>
      </div>
    </div>
  )
}

export default About
