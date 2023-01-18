import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import IconButton from "./iconButton";

const MediaIcons = (props) => {
  
  const contactMedia = {
    github: "https://github.com/AsiFmahmud10",
    linkdin: "https://www.linkedin.com/in/asif-mahmud-bb67581b3/",
    gmail: 'mailto:mhamudasif2@gmail.com',
    color: "rgba(47, 69, 84, 0.82)",
    size: 41,
  };

  return (
    <div className="absolute media">
      <div className="flex  ">
        <div className=" ">
          <IconButton url={contactMedia.github}>
            <FiGithub size={contactMedia.size} title="github"  />
          </IconButton>
        </div>
        <div
          className=" text-stone-700  dark:text-white
         "
        >
          <IconButton url={contactMedia.linkdin} className="text-dark">
            <FiLinkedin size={contactMedia.size} title="linkdin" />
          </IconButton>
        </div>
        <div
          className="  text-stone-700 dark:text-white
         "
        >
          <IconButton url={contactMedia.gmail} >
            <FiMail  size={contactMedia.size} title="gmail" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MediaIcons;
