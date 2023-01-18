import Card from "./card";

const ProjectsGrid = () => {

  const data = [
    { 
      id: 7,
      title:"Portfolio",
      tech:['next js',"tailwindcss"],
      imgSrc:"/projectPic/portfolio.png",
      live:"https://portfolio-nine-blue-57.vercel.app/",
      gitLink:"https://github.com/AsiFmahmud10/Portfolio",
      showProject:""  
   },
   {   
     id: 2,title:"APP : HISAB RAKHI(Group Project) ",
     tech:['flutter','hive'], 
     imgSrc:"/projectPic/hisab.png",
     gitLink:"https://github.com/AsiFmahmud10/3.1-Project_HISAB_RAKHI",
     showProject:"https://www.linkedin.com/posts/asif-mahmud-bb67581b3_flutter-hive-activity-6928676392280748032-X8tQ?utm_source=share&utm_medium=member_desktop"
    },
    { 
      id: 3,
      title:"Live_chatroom",
      tech:['vue','firebase'],
      imgSrc:"/projectPic/chatapp.png",
      live :"",
      gitLink :"https://lnkd.in/gND9R-7",
      showProject : "https://www.linkedin.com/posts/asif-mahmud-bb67581b3_liveabrchatroom-activity-6768166163819180032-NLiT?utm_source=share&utm_medium=member_desktop",
    },
    { 
      id: 4,title:"#Find_Recipe",
      tech:['react','context_api','raw_css'],
      imgSrc:"/projectPic/food.png",
      live:'https://lnkd.in/ga6jNyx',
      gitLink:'https://github.com/AsiFmahmud10/React-First-Project-Food-App-',
      showProject:"https://www.linkedin.com/posts/asif-mahmud-bb67581b3_findabrrecipeabrapp-react-contextabrapi-activity-6790536291357474817-PgvK?utm_source=share&utm_medium=member_desktop" 
    },
    
    { 
      id: 5,
      title:"ToDo_With_Animation",
      tech:['vue',' Gsap'],
      imgSrc:"/projectPic/toto.png",
      live :"https://lnkd.in/gVQXR2j",
      gitLink :"https://lnkd.in/g6mm_J5",
      showProject : "https://www.linkedin.com/posts/asif-mahmud-bb67581b3_todoabrwithabranimation-activity-6773631345836085248-SXfI?utm_source=share&utm_medium=member_desktop",
    },
    { 
      id: 6,
      title:"Game : Reaction timer ",
      tech:['vue.js','git','firebase'],
      imgSrc:"/projectPic/reaction.png",
      live :"https://lnkd.in/gYE--R7",
      gitLink :"https://lnkd.in/g6mm_J5",
      showProject : "https://www.linkedin.com/posts/asif-mahmud-bb67581b3_reactionabrtimer-activity-6769626253164204032-R4KF?utm_source=share&utm_medium=member_desktop",
    },
    
    { 
       id: 1,
       title:"Image share",
       tech:['react',"framer-motion",'firebase'],
       imgSrc:"/projectPic/image.png",
       live:"https://lnkd.in/g7Uq6ue",
       gitLink:"https://github.com/AsiFmahmud10/CORE-base-social-site-",
       showProject:"https://www.linkedin.com/posts/asif-mahmud-bb67581b3_react-firebase-please-activity-6798134620601892864-kwtd?utm_source=share&utm_medium=member_desktop"  
    },
    
  ];
  
  return (
    <>
        <div className=" justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-7  px-10 md:px-24 pt-10">
            {data.map((value) => (
                <div key={value.id} >
                    <Card  data={value} className="" />
                </div>
        ))}
        </div>
     
    </>
  );
};

export default ProjectsGrid;
