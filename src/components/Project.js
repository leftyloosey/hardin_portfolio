// import picture from '../images/ruin.jpeg'
// hover shadow button

const Project = ({ handleClick2, project }) => {
  // const { name, img, desc } = project[0]
  const { name, gitlink, deploy, img, desc } = project[0]

  const timer = () => {
    setTimeout(() => {
      handleClick2()
    }, 200)
  }

  return (
    <div className='flex flex-col justify-betwee mt-28 h-96 gap-y-4'>
      <div>
        <img src={img} alt='' className='' />
        <h1 className='pl-1 mb-1'>{name}</h1>
        <p className='pl-1'>{desc}</p>
      </div>
      <div className='flex flex-col justify-betwee'>
        <div className='flex flex-col gap-y-1'>
          <button className='hover:text-green-300 border-dotted border-2 hover:border-dashed rounded-full'>
            <a href={gitlink} alt='' target='_blank' rel='noopener noreferrer'>
              github
            </a>
          </button>
          <button className='hover:text-green-300 border-dotted border-2 hover:border-dashed rounded-full'>
            <a href={deploy} alt='' target='_blank' rel='noopener noreferrer'>
              deployment
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project
