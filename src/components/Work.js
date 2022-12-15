import Project from './Project'
import social from '../images/social_screen.png'
import weather from '../images/weather_screen.png'
import woman from '../images/woman.jpeg'
import set from '../images/set_screen.png'
import barber from '../images/jesus_screen.jpeg'

const Work = () => {
  const project1 = [
    {
      name: 'Weather Dashboard App',
      gitlink: 'https://github.com/leftyloosey/bertrand_russel_oliphaunt-6',
      deploy: 'https://leftyloosey.github.io/bertrand_russel_oliphaunt-6/',
      img: weather,
      desc: 'DOM and Fetch API. A little weather dashboard that gives a 5-day forecast for any city.',
    },
  ]

  const project2 = [
    {
      name: '88Blendz Barber Studio',
      gitlink: 'https://github.com/leftyloosey/88blendz',
      deploy: 'https://eighty8blendz.herokuapp.com/',
      img: barber,
      desc: "I wrote and host my barber's site, a React single-page app.",
    },
  ]
  const project4 = [
    {
      name: 'miniBBS',
      gitlink: 'https://github.com/leftyloosey/cirith-stuart-techblog',
      deploy: 'https://cirith-blog.herokuapp.com/',
      img: social,
      desc: 'MVC performed with mySQL/Sequelize rather than Mongo. Node/express. Handlebars! This is a little blog where people can post and comment. You could say anything, really.',
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
  const project6 = [
    {
      name: 'Weather Mood Music App',
      gitlink: 'https://github.com/tanyamilburn/birthday-cake',
      deploy: 'https://tanyamilburn.github.io/birthday-cake/index.html',
      img: woman,
      desc: 'A cute little algorithm that queries a couple different APIs to randomly provide a song based on the weather and your mood',
    },
  ]
  const project7 = [
    {
      name: 'Set Lists',
      gitlink: 'https://github.com/leftyloosey/hopeful_muddy',
      deploy: 'https://hopeful-muddy.herokuapp.com/',
      img: set,
      desc: "MERN, graphQL, CSS. This is a simple musician's app for organizing songs into set lists.",
    },
  ]
  return (
    <>
      <div className='mt-56'>
        <Project project={project2} />
        <Project project={project7} />
        <Project project={project4} />
        <Project project={project6} />
        <Project project={project1} />
      </div>
    </>
  )
}

export default Work
