import Project from './Project'
import social from '../images/social_screen.png'
import weather from '../images/weather_screen.png'
import woman from '../images/woman.jpeg'
import set from '../images/set_screen.png'
import barber from '../images/barber.png'

const Work = () => {
  const project1 = [
    {
      name: 'Weather Dashboard App',
      gitlink: 'https://github.com/leftyloosey/bertrand_russel_oliphaunt-6',
      deploy: 'https://leftyloosey.github.io/bertrand_russel_oliphaunt-6/',
      img: weather,
      desc: 'see a realtime forecast for any city',
    },
  ]

  const project2 = [
    {
      name: '88Blendz Barber Studio',
      gitlink: 'https://github.com/leftyloosey/88blendz',
      deploy: 'https://eighty8blendz.herokuapp.com/',
      img: barber,
      desc: "I'm developing a network of barber sites.",
    },
  ]
  const project4 = [
    {
      name: 'Tech Blog App',
      gitlink: 'https://github.com/leftyloosey/cirith-stuart-techblog',
      deploy: 'https://cirith-blog.herokuapp.com/',
      img: social,
      desc: 'a social network for tech posts',
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
      desc: 'choose a song by the weather',
    },
  ]
  const project7 = [
    {
      name: 'Set Lists',
      gitlink: 'https://github.com/leftyloosey/hopeful_muddy',
      deploy: 'https://hopeful-muddy.herokuapp.com/',
      img: set,
      desc: 'organise your songs into set lists',
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
