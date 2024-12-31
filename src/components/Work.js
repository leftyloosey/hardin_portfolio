import Project from './Project'
// import social from '../images/social_screen.png'
import green_ruin from '../images/green_ruin.jpg'
import green_press from '../images/green_press.jpg'
// import weather from '../images/weather_screen.png'
// import woman from '../images/woman.jpeg'
// import set from '../images/set_screen.png'
// import barber from '../images/jesus_screen.jpeg'

const Work = ({ isOpen2 }) => {
  const project1 = [
    {
      name: 'Beef Rinsed In Oil',
      gitlink: 'https://github.com/leftyloosey/bertrand_russel_oliphaunt-6',
      deploy: 'https://leftyloosey.github.io/bertrand_russel_oliphaunt-6/',
      img: green_press,
      desc: 'our stock of horsemeat rinsed in oil, on a timeline of regret',
    },
  ]

  const project2 = [
    {
      name: 'Does Anybody Remember Laughter',
      gitlink: 'https://github.com/leftyloosey/88blendz',
      deploy: 'https://eighty8blendz.herokuapp.com/',
      img: green_ruin,
      desc: 'three cheers for uncle sam four cheers for uncle sam five cheers for uncle sam six cheers for uncle sam',
    },
  ]
  const project4 = [
    {
      name: 'Nine Pound Hammer',
      gitlink: 'https://github.com/leftyloosey/cirith-stuart-techblog',
      deploy: 'https://cirith-blog.herokuapp.com/',
      img: green_ruin,
      desc: 'will you get in here and listen to these bawdy limericks with me',
    },
  ]
  // const project5 = [
  //   {
  //     name: 'Text Editor App',
  //     gitlink: 'https://github.com/leftyloosey/thales-valinor-19',
  //     deploy: 'https://thales-valinor.herokuapp.com/',
  //     img: '../press.jpeg',
  //   },
  // ]
  // const project6 = [
  //   {
  //     name: 'Weather Mood Music App',
  //     gitlink: 'https://github.com/tanyamilburn/birthday-cake',
  //     deploy: 'https://tanyamilburn.github.io/birthday-cake/index.html',
  //     img: woman,
  //     desc: 'A cute little algorithm that queries a couple different APIs to randomly provide a song based on the weather and your mood',
  //   },
  // ]
  // const project7 = [
  //   {
  //     name: 'Set Lists',
  //     gitlink: 'https://github.com/leftyloosey/hopeful_muddy',
  //     deploy: 'https://hopeful-muddy.herokuapp.com/',
  //     img: set,
  //     desc: "MERN, graphQL, CSS. This is a simple musician's app for organizing songs into set lists.",
  //   },
  // ]
  return (
    <>
      <div
        className={`h-4/5 overflow-scroll mt-20 ${!isOpen2 ? 'invisible' : ''}`}
      >
        <Project project={project1} />
        <Project project={project4} />
        <Project project={project2} />
        <Project project={project1} />
        {/* <Project project={project4} />
        <Project project={project6} />
        <Project project={project1} /> */}
      </div>
    </>
  )
}

export default Work
