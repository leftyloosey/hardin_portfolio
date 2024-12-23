// import picture from '../images/ruin.jpeg'
// hover shadow button

const Project = ({ project }) => {
  const { name, img, desc } = project[0]
  // const { name, gitlink, deploy, img, desc } = project[0]

  return (
    <div className='flex flex-col'>
      <div className=''>
        <img
          // src={picture}
          src={img}
          alt=''
          className=''
        />

        <div className=''>
          <div className=''>
            <div>
              <h1 className='pl-1 mb-1'>{name}</h1>
              <p className='pl-1'>{desc}</p>
            </div>
          </div>
          <div className=''></div>
        </div>
      </div>
    </div>
  )
}

export default Project
