// import picture from '../images/ruin.jpeg'
// hover shadow button

const Project = ({ project }) => {
  const { name, img, desc } = project[0]
  // const { name, gitlink, deploy, img, desc } = project[0]

  return (
    <div className='flex flex-col h-full justify-between'>
      <div className=''>
        <img
          // src={picture}
          src={img}
          alt=''
          className=''
        />

        <div className='flex flex-col'>
          <div className=''>
            <div>
              <h1 className='pl-1 mb-1'>{name}</h1>
              <p className='pl-1'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-1'>
        <button className='hover:text-green-300 border-dotted border-2 hover:border-dashed rounded-full'>
          github
        </button>
        <button className='hover:text-green-300 border-dotted border-2 hover:border-dashed rounded-full'>
          deployment
        </button>
      </div>
    </div>
  )
}

export default Project
