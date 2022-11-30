import picture from '../images/ruin.jpeg'

const Project = ({ project }) => {
  const { name, gitlink, deploy, img } = project[0]

  return (
    <div class='flex flex-col p-6 m-3 space-y-6 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16'>
      <div>
        <img
          src={picture}
          //   src={img}
          alt=''
          class='mx-auto duration-200 w-60 hover:scale-105'
        />
      </div>

      <div class='flex flex-col'>
        <div class='flex flex-col mb-4 space-y-3 text-center md:text-left'>
          <div>
            <h1>{name}</h1>
            <p class='text-sm font-light text-gray-400'>project description </p>
          </div>

          <div class='flex flex-row justify-center md:space-y-0 md:space-x-4 md:flex-row'>
            <button class='flex py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
              <span>deployment</span>
            </button>

            <button class='flex  py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
              <span>github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
