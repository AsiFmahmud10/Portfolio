import Link from "next/Link";
import { BsDownload } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-screen  pt-9 md:px-20 px-4 absolute">
      <div className="flex justify-between ">
        <div className="  text-lg md:text-xl font-bold flex">
          Download CV
          <div className="ml-2">
            <a href="/cv.pdf" download="cv.pdf">
              <div className="mt-1 hover:text-white transition hover:scale-150">
                <BsDownload />
              </div>
            </a>
          </div>
        </div>

        <div className="flex md:text-lg ">
          <div
            className=" font-normal transition  ease-in-out 
            md:hover:scale-110 hover:text-white md:mr-16 mr-4 "
          >
            <Link href="/"> Home</Link>
          </div>
          <div
            className=" font-normal transition  ease-in-out 
                  md:hover:scale-110 hover:text-white md:mr-16 mr-4"
          >
            <Link href="/skills"> Skills</Link>
          </div>
          <div
            className="  hover:text-white  transition ease-in-out 
                  md:hover:scale-110 "
          >
            <Link href="/projects">Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
