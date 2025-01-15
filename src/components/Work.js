import { lazy } from 'react'
// import { lazy, Suspense } from 'react'

import green_blendz from '../images/green_blendz_home.png'
import green_cirith from '../images/green_cirith_home.png'
import green_malaia from '../images/green_malaia_home.png'
import green_muddy from '../images/green_muddy_home.png'
import green_proshop from '../images/green_proshop_home.png'
import green_weather from '../images/green_weather_home.png'

const Project = lazy(() => import('./Project'))

const Work = ({ handleClick2, isOpen2 }) => {
  const project1 = [
    {
      name: '88Blendz Barbershop',
      gitlink: 'https://github.com/leftyloosey/88blendz',
      deploy: 'https://eighty8blendz.herokuapp.com/',
      img: green_blendz,
      desc: 'Barbershop in Salt Lake City, Utah. React/Tailwind. Welcome splash, haircut gallery, map.',
    },
  ]

  const project2 = [
    {
      name: 'miniBBS Tech Blog',
      gitlink: 'https://github.com/leftyloosey/cirith-stuart-techblog',
      deploy: 'https://cirith-blog.herokuapp.com/',
      img: green_cirith,
      desc: 'Sequelize, Bootstrap. Blog model, posting and commenting.',
    },
  ]

  const project3 = [
    {
      name: 'Set Lists',
      gitlink: 'https://github.com/leftyloosey/hopeful_muddy',
      deploy: 'https://hopeful-muddy.herokuapp.com/',
      img: green_muddy,
      desc: "Mongo, graphQL, React, Node. This is a simple musician's app for organizing songs into set lists.",
    },
  ]
  const project4 = [
    {
      name: 'Kate Malaia Portfolio',
      gitlink: 'https://github.com/leftyloosey/bree_uncouth',
      deploy: 'https://leftyloosey.github.io/bree_uncouth/',
      img: green_malaia,
      desc: "React, Tailwind. Professor Malaia's porftolio.",
    },
  ]
  const project5 = [
    {
      name: 'ProShop eCommerce Platform',
      gitlink: 'https://github.com/leftyloosey/khazad-aufheben',
      deploy: 'https://khazad-aufheben-6509b1bdcf3e.herokuapp.com/',
      img: green_proshop,
      desc: 'MERN. Complete functioning business website with payment.',
    },
  ]
  const project6 = [
    {
      name: 'Weather Forecast App',
      gitlink: 'https://github.com/leftyloosey/khazad-aufheben',
      deploy: 'https://khazad-aufheben-6509b1bdcf3e.herokuapp.com/',
      img: green_weather,
      desc: 'Fetch, DOM manipulation. Get a weather forecast for any city.',
    },
  ]
  return (
    <>
      <div
        className={`flex flex-row h-full space-x-2 overflow-y-hidden no-scrollbar ${
          !isOpen2 ? 'hidden' : ''
        }`}
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
          <Project project={project2} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project3} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project4} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project5} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project6} />
        </div>
      </div>
    </>
  )
}

export default Work
