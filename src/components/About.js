import me2 from '../images/green_bulb_david2.jpg'

const About = ({ isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <div className='flex flex-col mt-24 text-green-500 no-scrollbar h-full overflow-hidden'>
          <div className='w-48 rounded-sm'>
            My Name is David Hardin.<br></br>
            <br></br>Full Stack React + Technical Writer<br></br>Mongo, Express,
            REST, Redux, graphQL, Node, Java. etc etc
            <img alt='me2.jpg' src={me2}></img>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default About
