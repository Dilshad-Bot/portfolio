import './AboutMe.css';
import Rive from '@rive-app/react-canvas';
import Bot from './bot.riv';

export default function AboutMe() {
  return (
    <section className="about bg-gray-100 flex items-center justify-center h-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center text-center lg:text-left max-w-6xl space-y-6 lg:space-y-0 lg:space-x-6 px-6">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-6xl font-bold font-pixel">About Me</h2>
          <p className="mt-4 text-gray-700 text-lg">
            I am a sophomore Computer Science student at the University of Saskatchewan with a strong passion 
            for technology and problem-solving. I have hands-on experience in game development, full-stack web 
            development, and software development, allowing me to create innovative and efficient solutions. 
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            I enjoy learning new skills, collaborating on projects, and building applications that make a meaningful impact.
          </p>
        </div>

        {/* Rive Animation Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Rive 
            className="rive w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96"
            src={Bot}
          />
        </div>
      </div>
    </section>
  );
}
