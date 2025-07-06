import { lazy } from 'react'

import green_blendz from '../images/green_blendz_home.png'
import green_cirith from '../images/green_cirith_home.png'
import green_malaia from '../images/green_malaia_home.png'
import green_setlists from '../images/green_setlists_home.jpg'
import green_proshop from '../images/green_proshop_home.png'
import green_weather from '../images/green_weather_home.png'
import green_housing from '../images/green_housing_swoop.jpg'
import green_signup from '../images/green_blendz_signup_home.jpg'

const Project = lazy(() => import('./Project'))

const Work = ({ handleClick2, isOpen2 }) => {
  const project1_blendz = [
    {
      name: '88Blendz Barbershop',
      gitlink: 'https://github.com/leftyloosey/88blendz',
      deploy: 'https://eighty8blendz.herokuapp.com/',
      img: green_blendz,
      desc: 'React + Tailwind. Barbershop in Salt Lake City, Utah.',
    },
  ]

  const project2_blog = [
    {
      name: 'miniBBS Blog',
      gitlink: 'https://github.com/leftyloosey/cirith-stuart-techblog',
      deploy: 'https://cirith-blog.herokuapp.com/',
      img: green_cirith,
      desc: 'Sequelize, Bootstrap, Handlebars. A blog for posting and commenting.',
    },
  ]

  const project3_setlists = [
    {
      name: 'Set Lists',
      gitlink: 'https://github.com/leftyloosey/hopeful_muddy',
      deploy: 'https://hopeful-muddy.herokuapp.com/',
      img: green_setlists,
      desc: "Mongo, graphQL, React, Node. Fullstack musician's app for organizing songs into set lists.",
    },
  ]
  const project4_malaia = [
    {
      name: 'Kate Malaia Portfolio',
      gitlink: 'https://github.com/leftyloosey/bree_uncouth',
      deploy: 'https://www.katemalaia.com',
      img: green_malaia,
      desc: "React, Tailwind. University of Utah professor's portfolio.",
    },
  ]
  const project5_proshop = [
    {
      name: 'ProShop eCommerce Platform',
      gitlink: 'https://github.com/leftyloosey/khazad-aufheben',
      deploy: 'https://khazad-aufheben-6509b1bdcf3e.herokuapp.com/',
      img: green_proshop,
      desc: 'MERN. Complete functioning business website with payment.',
    },
  ]
  const project6_weather = [
    {
      name: 'Weather Forecast App',
      gitlink: 'https://github.com/leftyloosey/khazad-aufheben',
      deploy: 'https://leftyloosey.github.io/bertrand_russel_oliphaunt-6/',
      img: green_weather,
      desc: 'Fetch, CSS. Get a weather forecast for any city.',
    },
  ]
  const project7_housing = [
    {
      name: 'Utah Housing Insecurity Project',
      gitlink: 'https://github.com/leftyloosey/hoobasar_mathom',
      deploy: 'https://utahhousinginsecurity.org',
      img: green_housing,
      desc: 'React, Tailwind. An research archive (photos + interviews) for the University of Utah',
    },
  ]
  const project8_signup = [
    {
      name: 'Barbershop Signup App',
      gitlink: 'https://github.com/leftyloosey/vernunft_anduril/tree/main',
      deploy: 'https://blendz-a0e7082e8ee7.herokuapp.com/',
      img: green_signup,
      desc: "React, graphQL. 88Blendz Barbershop's dynamic barber visit signup sheet and QRcode generator.",
    },
  ]
  return (
    <>
      <div
        className={`flex flex-row h-full space-x-2 overflow-y-hidden no-scrollbar ${
          !isOpen2 ? 'hidden' : ''
        }`}
      >
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project7_housing} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project1_blendz} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project8_signup} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project4_malaia} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project3_setlists} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project2_blog} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project6_weather} />
        </div>
        <div className='basis-48 shrink-0 grow-0'>
          <Project project={project5_proshop} />
        </div>
      </div>
    </>
  )
}

export default Work
