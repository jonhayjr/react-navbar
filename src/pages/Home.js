import { Link } from "react-router-dom"

const Home = () => {
  return (
      <>
        <div className='hero flex justify-center items-center'>
            <div className='text-white flex flex-col text-center shadow-3xl bg-slate-800 p-10 w-8/12 mx-auto max-w-xl rounded'>
                <h2 className="text-4xl font-bold">My name is <span className='text-red-600 text-5xl uppercase block'>Jon</span></h2>
                <p className="text-3xl font-bold mt-3">And I like to <span className='text-red-600 text-5xl uppercase block'>code</span></p>
                <button className='mt-7 border-white border-8 p-4 block uppercase font-bold bg-transparent tracking-wide text-xl hover:text-black hover:bg-white'><Link to='/projects'>See my work</Link></button>
            </div>
        </div>
      </>
  )
}

export default Home