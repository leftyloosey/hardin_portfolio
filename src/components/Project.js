// import picture from '../images/ruin.jpeg'

const Project = ({ project }) => {
  const { name, gitlink, deploy, img, desc } = project[0]

  return (
    <div className='flex flex-col w-96 ml-40'>
      {/* // <div className='flex flex-col p-6 m-3 space-y-6 bg-white rounded-2xl shadow-2xl md:flex-row md:p-16'> */}
      <div className='mb-16 flex flex-row'>
        <img
          // src={picture}
          src={img}
          alt=''
          className=''
          // className='shadow-md mx-auto duration-200 w-60 hover:scale-105'
        />

        <div className='ml-2 text-green-500'>
          <div className=''>
            <div>
              <h1>{name}</h1>
              <p className=''>{desc}</p>
            </div>
          </div>
          <div className=''>
            <button className='flex py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
              <a href={deploy}>deployment</a>
            </button>

            <button className='flex py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
              <a href={gitlink}>github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
