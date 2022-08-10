import Link from "next/Link";
import { BsDownload } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-screen  pt-9 px-20 absolute">
      <div className="flex justify-between ">
        <div className="text-xl font-bold flex">
          Download CV
          <div className="ml-2">
            <a href="/cv.pdf" download="cv.pdf">
              <div className="mt-1 hover:text-white transition hover:scale-150">
                 <BsDownload />
              </div>
             
            </a>
          </div>
        </div>

        <div className="flex text-base">
          <div className=" font-normal transition delay-150 ease-in-out 
          hover:scale-150 hover:text-white mr-16">
            <Link href="/skills"> SKILLS</Link>
          </div>
          <div className="  hover:text-white  transition ease-in-out 
          hover:scale-150 ">
            <Link href="/projects">PROJECTS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
