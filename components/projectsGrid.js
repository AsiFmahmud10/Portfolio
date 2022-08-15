import Card from "./card";

const Projects = () => {
  const data = [
    { 
       id: 1,
       title:"Social Media",
       tech:['react','git','firebase'],
        
    },
    { id: 2,title:"Social Media",
    tech:['react','git','firebase'] },{ id: 3,title:"Social Media",
    tech:['react','git','firebase'] },{ id: 4,title:"Social Media",
    tech:['react','git','firebase'] }];

  return (
    <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 lg:px-24 pt-10">
            {data.map((value) => (
                <div key={value.id} >
                    <Card  data={value} className="h-" />

                </div>
        ))}
        </div>
     
    </>
  );
};

export default Projects;
