import Card from "../components/card";

const Projects = () => {
  const data = [
    { 
       id: 1,
       title:"Social Media",
       tech:"react,git,firebase" }, { id: 2 },{ id: 3 },{ id: 4 }];

  return (
    <>
        <div className="grid bg-white lg:grid-cols-3 gap-7 lg:px-24 lg:pt-5">
            {data.map((value) => (
                <div key={value.id} >
                    <Card  data={value} width={" w-26 "} height={" h-60"} className="h-" />

                </div>
        ))}
        </div>
     
    </>
  );
};

export default Projects;
