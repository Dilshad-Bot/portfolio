import { GithubLogo, GitlabLogo, LinkedinLogo } from "@phosphor-icons/react"
import './Banner.css'

export default function Banner() {
  return (
    <section className="banner bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-8xl font-bold font-pixel">Hello! I'm MD Dilshad Hossain</h1>
        <p className="mt-4 text-lg font-ubuntu"><span className='a inline-block px-10 py-4 rounded-sm mr-2'>Game Developer</span>
        <span className='b inline-block px-10 py-4 rounded-sm ml-2'>Full Stack Web Developer</span></p>
        <p className="mt-4 text-lg font-ubuntu"><span className='c inline-block px-10 py-4 rounded-sm'>Software Developer</span></p>
        <ul className="flex items-center font-ubuntu justify-center mt-8">
        <li className="mb-8 mr-2 ml-2"><a className='p-5'href="https://www.linkedin.com/in/md-dilshad-hossain/"><LinkedinLogo size={48}/></a></li>
        <li className="mb-8 mr-2 ml-2"><a className='p-5'href="https://git.cs.usask.ca/mdh413"><GitlabLogo size={48}/></a></li>
        <li className="mb-8 mr-2 ml-2"><a className='p-5'href="https://github.com/Dilshad-Bot/"><GithubLogo size={48}/></a></li>
      </ul>
      </div>
    </section>
  );
}
