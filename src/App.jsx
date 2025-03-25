import { useState } from 'react';
import doodles from './assets/doodles mixed round.png';
import doodle from './assets/doodle items.png';
import Group from './assets/Group 2346.png';
import Vector from './assets/Vector 187.png';
import Group62 from './assets/Group 62.png' ;
import Projects from './assets/Projects page.png';
import Group2372 from './assets/Group 2372.png';
import Vector188 from './assets/Vector 188.png';
import Frame28 from './assets/Frame 28.png';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    // header section
    <div className='bg-[#222831] px-8 py-4'>
      <header className='flex justify-between item center mt-6'>
      <h2 className='text-white text-bold font-normal text-l'>EmDesign</h2>
      <div className='text-bold text-white gap-4 font-serif text-sm font-normal flex'>
        <button>Home</button>
        <button>About me</button>
        <button>Contact</button>
      </div>
      </header>
    {/* hero section */}
      <div className='flex py-40 px-16 justify-between relative'>
      <img src={Vector} alt="spiral direct" className='absolute w-auto h-1/5 left-1 bottom-1/2'/>
        <div className='py-20 grid h-40 w-60vw text-white'>
          <h1 className='text-6xl font-bold'>Creative Software</h1>
          <h1 className='text-[#00ADB5] text-start text-6xl font-bold'>Engineer</h1>
          <div className='flex font-sm font-bold gap-4 ml-4 mt-10'>
            <button className='bg-[#00ADB5] rounded-full px-8 py-2'>Hire Me</button>
            <button className='bg-[#393E46] rounded-full px-10 py-2'>Download CV</button>
          </div>
        </div>
        <div>
        <img src={doodles} alt="Background One" className="w-full h-auto relative"/>
          <img src={Group} alt="laptop man" className='absolute top-1/2 w-60vw h-auto'/>
        </div>
      </div>
      {/* navigator button */}
      <div className='h-30 w-20 grid item-center align-center px-80'>
        <button className='text-white text-2xl font-normal font-bold bg-[#393E46] px-4 py-4'>N</button>
      </div>
     {/* section 2 */}
     <div className="py-40 px-16 flex justify-start items-center">
  {/* Left Section - About Me */}
  <div className="w-80 max-w-lg text-white text-xs">
    <h2 className="text-left">
      <span className="text-white font-bold text-5xl">About</span>
      <span className="text-[#00ADB5] font-bold text-5xl"> me</span>
    </h2>
    <p className="mt-4 text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
      inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more
    </p>
  </div>

  {/* Right Section - Image */}
  <div className="h-96 w-106 ml-auto relative">
  <img src={doodle} alt="background two" className="w-full h-full object-cover" />
  <img src={Group62} alt="background man" className="w-1/2 h-auto absolute top-1/2 right-1/3" />
  </div>
</div>
{/* section 3 */}
<div>
    <div className='grid py-40 px-16 w-full h-auto'>
    <img src={Projects} alt="projects bg" className='object-cover'/>
    </div>
</div>

<div className='flex flex-start py-40 px-16 justify-between'>
  <div className='grid grid-col h-60 w-100 text-white'>
      <h2 className="text-left">
      <span className="text-white font-bold text-5xl">Got a project in</span><br />
      <span className="text-[#00ADB5] font-bold text-5xl"> mind?</span>
    </h2>
      <div className='w-100 h-40 flex justify-between item-center'>
      <img src={Vector188} alt="spiral direct" className='w-auto h-20 mt-20 ml-10'/>
      <img src={Group2372} alt="step man" className='w-auto h-60 object-contain'/>
      </div>   
  </div>
  <div className='grid grid-col h-60 w-100 text-white text-start mr-20 gap-3'>
      <div className='w-full h-auto flex gap-10'>
        <div>
        <h3>Your name</h3>
        <h3 className='bg-[#393E46] text-white text-opacity-40 text-sm w-full h-8 px-20 flex'>Name</h3>
        </div>
        <div>
        <h3>Your email</h3>
        <h3 className='bg-[#393E46] text-white text-opacity-40 text-sm w-full h-8 px-20 flex'>Email</h3>
        </div>
      </div>
      <div>
      <h3>Your message</h3>
      <h3 className='bg-[#393E46] text-white text-opacity-40 text-sm w-full h-60 px-20 flex'>Message</h3>
      </div>
      <button className='bg-[#00ADB5] rounded-full h-8 w-40 text-xs px-4'>Send Message</button>
  </div>
</div>
    {/* footer section */}
    <div className='grid gap-8 item-center py-40 px-16 justify-center'>
      <div className='flex text-bold text-white gap-20 text-xs font-normal flex'>
        <button>Home</button>
        <button>About me</button>
        <button>Contact</button>
      </div>
        <div className='item-center ml-14'>
        <img src={Frame28} alt="social media" className='w-40 h-auto content-center'/>
        </div>
      </div>
      <div className='text-end text-white text-xs mb-8'>
      <h3>Terms of Service - Privacy Policy</h3>
      </div>

    </div>

    
  )
}

export default App
