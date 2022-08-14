import { useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import IconButton from "./iconButton";

const MediaIcons = (props) => {
  
  const media = {
    github: "https://github.com/AsiFmahmud10",
    linkdin: "https://www.linkedin.com/mynetwork/",
    gmail: CleintSideWindow,
    color: "rgba(47, 69, 84, 0.82)",
    size: 41,
  };

  return (
    <div className="absolute media">
      <div className="flex  ">
        <div
          className=" text-stone-700 dark:text-white
         "
        >
          <IconButton url={media.github}>
            <FiGithub size={media.size} title="github" />
          </IconButton>
        </div>
        <div
          className=" text-stone-700  dark:text-white
         "
        >
          <IconButton url={media.linkdin} className="text-dark">
            <FiLinkedin size={media.size} title="linkdin" />
          </IconButton>
        </div>
        <div
          className="  text-stone-700 dark:text-white
         "
        >
          <IconButton url={media.github} className="dark:hover:text-orange-400">
            <FiMail size={media.size} title="gmail" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MediaIcons;
