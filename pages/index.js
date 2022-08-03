import {HomeTitle,MediaIcons} from "../components/componentsPath";
import Head from "next/head"

const Home = () => {
  return (
    <>
    <Head>
      <title> PORTFOLIO </title>
       <meta content="Asif's portfolio" />
       <link rel="icon" href=""/>
    </Head>
    <div className="gradientgreen w-screen h-screen">
      <HomeTitle />
     <MediaIcons/>
    </div>
    </>
  );
};

export default Home;
