import { useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import IconButton from "./iconButton";

const MediaIcons = (props) => {
   let CleintSideWindow ;
  useEffect(()=>{
    CleintSideWindow = window;
       
  },[])
  function clienSiteWindow(){
     
  }
 

  const media = {
    github: "https://github.com/AsiFmahmud10",
    linkdin: "https://www.linkedin.com/mynetwork/",
    gmail: CleintSideWindow,
    color: 'rgba(47, 69, 84, 0.82)',
    size: 41
  };

  return (
    <div className="absolute media   ">
      <div className="flex  ">
        <IconButton url={media.github}>
          <FiGithub size={media.size} color={media.color} title="github" />
        </IconButton>

        <IconButton url={media.linkdin}>
          <FiLinkedin size={media.size} color={media.color} title="linkdin" />
        </IconButton>

      <div onClick={()=>{media.gmail.open('mailto:test@example.com')}}>
        <Link>
        </Link>
          <FiMail size={media.size} color={media.color} title="gmail" />
      </div>
        
      </div>
    </div>
  );
};

export default MediaIcons;
