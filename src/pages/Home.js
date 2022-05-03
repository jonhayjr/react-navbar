import { Link } from "react-router-dom"

const Home = () => {
  return (
      <>
        <div className='hero flex justify-center items-center'>
            <div className='text-white text-center flex flex-col shadow-3xl bg-gray-800 p-10'>
                <h2 className="text-4xl font-bold">My name is Jon</h2>
                <p className="text-3xl font-bold mt-3">And I like to code</p>
                <button className='mt-7 border-white border-8 p-4 block uppercase font-bold bg-transparent tracking-wide text-xl hover:bg-white hover:text-black'><Link to='/projects'>See my work</Link></button>
            </div>
        </div>
      </>
  )
}

export default Home