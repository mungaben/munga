import Image from 'next/image'
import GitHubRepos from './components/GitHubRepos'
import AnimateScroll from './components/AnimateScroll'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="relative  before:shadow-2xl after:shadow-2xl  flex place-items-center selection:bg-red-600 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full after:contents-['hfchgcvjg'] before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['hello'] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-700 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      




        <div className=' flex  items-center justify-center h-[60vh]  '>
          <div className=''>
          <AnimateScroll/>

          </div>
         
        </div>
      </div>
      <GitHubRepos/>
    </main>
  )
}
