import Projects from "../components/projectsGrid";

const SkillPage = () => {
  return (
    <div className="w-screen dark:bg-gradient-to-r from-start to-blue-900">
      {/* background  */}
      <div className="gradientgreen dark:bg-gradient-to-r from-end via-blue-900 to-black h-20 shadow-lg "> </div>
      
      <Projects/>

    </div>
  );
};

export default SkillPage;
