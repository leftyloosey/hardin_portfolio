import Nav from './Nav'
import Footer from './Footer'
import Work from './Work'

const Home = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Nav />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
