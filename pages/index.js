import Head from "next/head"
import {HomeTitle,MediaIcons} from "../components";
import Image from 'next/image'

const Home = () => {
  console.log(`rendering Home page`)
  return (
    <>
    <Head>
      <title > PORTFOLIO </title>
      <meta content="Asif's portfolio" />
      <link rel="icon" href="/"/>
    </Head>

    <div className=" gradientgreen dark:bg-gradient-to-r from-start to-end  w-screen   h-screen">
      <HomeTitle />
 
      <div className=" border-2 rounded-full absolute sm:w-[247px] sm:h-[245px] right-[8%] top-[22%] xl:right-[15%] xl:w-[332px] xl:h-[330px]  invisible md:visible ">
          <Image className="" src={`/asif.png`} alt="pet" layout="fill"  />
      </div> 
   
      <MediaIcons/>
    </div>
    </>
  );
};

export default Home;
