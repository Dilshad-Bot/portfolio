import banner1 from './assets/banner1.png'
import project1 from './assets/project1.png'
import logo from './assets/Logo.png'
import logo2 from './assets/Logo2.png'
import game from './assets/game.png'
import buildx from './assets/Buildx.png'
import greenfair from './assets/GreenFair.png'
import startx from './assets/StartEx.png'
import sstech from './assets/SStech.png'
import omnifood from './assets/Omnifood.png'

import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio flex items-center justify-center py-8">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        
        {/* Game Projects Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Game Projects</h3>
          <p className="mt-2 text-gray-600">
            Here are some of the exciting games I've worked on. From concept to execution, I enjoy bringing interactive experiences to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold">Hands Up!</h4>
              <p className="mt-2 text-gray-600">A chaotic vertical platformer that’s equal parts hilarious and infuriating!</p>
              <img className='my-3 rounded-lg' src={game} alt='Hands Up!'/>
              <a href="https://unemployedundegraduates.itch.io/hands-up" className="text-blue-500 mt-4 inline-block">Play on Itch.io</a>
            </div>
          </div>
        </div>

        {/* Personal Demo Projects Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Personal Demo Projects</h3>
          <p className="mt-2 text-gray-600">
            These are some of the personal web applications and demos I’ve built to showcase my skills and explore new technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold">Buildx</h4>
              <img className='my-3 rounded-lg' src={buildx} alt='Buildx'/>
              <a href="https://dilshad-bot.github.io/Buildx" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
            <div className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold">Greenfair</h4>
              <img className='my-3 rounded-lg' src={greenfair} alt='Greenfair'/>
              <a href="https://dilshad-bot.github.io/Greenfair" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
            <div className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold">SSTech</h4>
              <img className='my-3 rounded-lg' src={sstech} alt='SSTech'/>
              <a href="https://dilshad-bot.github.io/sstech/" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
            <div className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold">StartEx</h4>
              <img className='my-3 rounded-lg' src={startx} alt='StartEx'/>
              <a href="https://dilshad-bot.github.io/Corporate/" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
            <div className="border rounded-lg p-5 shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold">Omnifood</h4>
              <img className='my-3 rounded-lg' src={omnifood} alt='Omnifood'/>
              <a href="https://dilshad-bot.github.io/Omnifood-Res/" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
          </div>
        </div>

        {/* Arts & Illustrations Section */}
        <div className="mt-10 mb-10">
          <h3 className="text-2xl font-semibold">Arts & Illustrations</h3>
          <p className="mt-2 text-gray-600">
            I also enjoy creating digital art and illustrations. Here are some of my favorite pieces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="">
              <img className='my-3 rounded-lg' src={banner1} alt='logo' />
            </div>
            <div className="">
              <img className='my-3 rounded-lg' src={project1} alt='logo' />
            </div>
            <div className="">
              <img className='my-3 rounded-lg max-w-56 mx-auto' src={logo} alt='logo' />
            </div>
            <div className="">
              <img className='my-3 rounded-lg max-w-56 mx-auto' src={logo2} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
