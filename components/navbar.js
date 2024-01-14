import Link from "next/link";
import { useEffect, useState } from "react";
import {useTheme} from 'next-themes'
import { BsDownload } from "react-icons/bs";
import {BsSun} from 'react-icons/bs'
import {GiNightSky} from 'react-icons/gi'

const Navbar = () => {
  const {theme,setTheme} = useTheme()
  const [isDark,setIsDark] = useState(false)
  
  useEffect(()=>{
    if(theme === 'dark')
      setIsDark(true)
    else
      setIsDark(false)

  },[theme,setTheme])

  return (
    <div className="w-screen  pt-9 md:px-20 px-4 absolute">
      <div className="flex justify-between ">
        <div className="  text-lg md:text-xl font-bold flex">
          <span className="hidden md:block ">Download</span> CV
          <div className="ml-2">
            <a href="file/AsifMahmud.CV.pdf" download="Asif_Mahmud.CV.pdf">
              <div className="mt-1 hover:text-white transition hover:scale-150">
                <BsDownload />
              </div>
            </a>
          </div>
        </div>

        <div className="flex md:text-lg items-center ">
          <div className=" font-normal transition ease-in-out md:hover:scale-110 hover:text-white    md:mr-16 mr-4 ">
            <Link href="/"> Home</Link>
          </div>
          <div
            className=" font-normal transition  ease-in-out 
                  md:hover:scale-110 hover:text-white md:mr-16 mr-4"
          >
            <Link href="/projects"> Skills</Link>
          </div>
          <div className=" hover:text-white  transition ease-in-out md:hover:scale-110 "
          >
            <Link href="/skills">Projects</Link>
          </div>
            {/* button */}
            <div className="  font-normal transition  ease-in-out 
                  md:hover:scale-125 hover:text-white md:mr-16 ml-5"
          >  
            
            <button onClick={()=>{setTheme(theme === 'dark' ? 'light':'dark')}}>
              { isDark ? <BsSun size={21} /> : <GiNightSky size={21}/>} 
            </button>
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
