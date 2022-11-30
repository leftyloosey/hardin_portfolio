import Project from './Project'

const Work = () => {
  const project1 = [
    {
      name: 'Weather Dashboard App',
      gitlink: 'https://github.com/leftyloosey/bertrand_russel_oliphaunt-6',
      deploy: 'https://leftyloosey.github.io/bertrand_russel_oliphaunt-6/',
      img: '../images/man.jpeg',
    },
  ]

  const project2 = [
    {
      name: 'Notetaker App',
      gitlink:
        'https://github.com/leftyloosey/michel-delving-express-notetaker',
      deploy: 'https://michel-delving-notetaker.herokuapp.com/',
      img: '../images/schedule.jpeg',
    },
  ]
  const project4 = [
    {
      name: 'Tech Blog App',
      gitlink: 'https://github.com/leftyloosey/cirith-stuart-techblog',
      deploy: 'https://cirith-blog.herokuapp.com/',
      img: 'ruin.jpeg',
    },
  ]
  const project5 = [
    {
      name: 'Text Editor App',
      gitlink: 'https://github.com/leftyloosey/thales-valinor-19',
      deploy: 'https://thales-valinor.herokuapp.com/',
      img: 'press.jpeg',
    },
  ]
  const project6 = [
    {
      name: 'Weather Mood Music App',
      gitlink: 'https://github.com/tanyamilburn/birthday-cake',
      deploy: 'https://tanyamilburn.github.io/birthday-cake/index.html',
      img: 'woman.jpeg',
    },
  ]
  const project7 = [
    {
      name: 'Set Lists',
      gitlink: 'https://github.com/leftyloosey/hopeful_muddy',
      deploy: 'https://hopeful-muddy.herokuapp.com/',
      img: 'fax.jpeg',
    },
  ]
  return (
    <>
      <Project project={project1} />
      <Project project={project2} />
    </>
  )
}

export default Work
