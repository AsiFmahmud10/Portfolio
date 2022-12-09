import Head from "next/head"
import {HomeTitle,MediaIcons} from "../components";

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
{/* 
      <div className="absolute top-28 right-3 rounded-full border-2 ">
          <Image className="rounded-lg" src={`/asif_photo.png`} alt="pet" height={415}  width="601"/>
      </div> */}
   
      <MediaIcons/>
    </div>
    </>
  );
};

export default Home;
