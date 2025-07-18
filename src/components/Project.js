const Project = ({ handleClick2, project }) => {
  const { name, gitlink, deploy, img, desc } = project[0]

  return (
    <div className='flex flex-col justify-between h-96 mt-28'>
      <div>
        <img src={img} alt='' className='' />
        <h1 className='pl-1 mb-1 font-bold'>{name}</h1>
        <p className='pl-1'>{desc}</p>
      </div>
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
  )
}

export default Project
