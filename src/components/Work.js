import { lazy, Suspense } from 'react'

// import Project from './Project'
// import social from '../images/social_screen.png'
import green_ruin from '../images/green_ruin.jpg'
import green_press from '../images/green_press.jpg'
// import weather from '../images/weather_screen.png'
// import woman from '../images/woman.jpeg'
// import set from '../images/set_screen.png'
// import barber from '../images/jesus_screen.jpeg'
const Project = lazy(() => import('./Project'))

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
        className={`flex flex-row overflow-scroll mt-20 space-x-2 ${
          !isOpen2 ? 'hidden' : ''
        }
                    
        `}
      >
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Project className='basis-96 shrink-0 grow-0' project={project1} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Project project={project4} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Project project={project2} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Project project={project1} />
        </Suspense> */}
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project1} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project4} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project2} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project1} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project1} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project1} />
        </div>

        {/* <Project project={project4} />
        <Project project={project6} />
        <Project project={project1} /> */}
      </div>
    </>
  )
}

export default Work
