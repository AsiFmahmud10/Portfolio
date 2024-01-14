import Image from "next/image";

const SkillSets = () => {
  const infoAboutMe = {
    comfortableWith: [
      { title: "git" },
      { title: "spring Boot" },
      { title: "data jpa" },
      { title: "react" },
      { title: "sql" },
      { title: "flutter" },
      { title: "firebase" },
      { title: "next" },
      { title: "php" },{ title: "typescript" }, { title: "vue" }
    ],
    familiarWith: [{ title: "typescript" }, { title: "vue" }],

    imageSize: { height: "110", width: "110" },
    languages: ["bangla", "english"],
    school: {
      name: "Name : Police Lines School And College, Rangpur",
      gpa: "SSC_GPA : 5.00",
      src: "/",
    },
    college: {
      name: "Name : Police Lines School And College, Rangpur",
      gpa: "HSC_GPA : 5.00",
      src: "/",
    },
    university: {
      name: "Name : Khulna University",
      gpa: "GPA : 3.68",
      src: "/",
    }
  };

  const {
    school,
    college,
    languages,
    imageSize,
    university,
    comfortableWith,
    familiarWith,
  } = infoAboutMe;

  return (
    <>
      <div className="p-4">
        <p className=" text-2xl font-bold p-4 my-8"> Work With : </p>
        <div className="flex flex-wrap gap-6 lg:gap-10 ">
          
          {infoAboutMe.comfortableWith.map((value) => (
            <div key={value.title}>
            <div  className="comp-skillset-Image pt-2 ">
              <Image
                {...imageSize}
                src={`/skillPic/${value.title}.png`}
                alt={`${value.title}`}
              />
              
            </div>
            <p className=" text-center ">{value.title}</p>
            </div>
            
            
          ))}
          
         
        </div>

        {/* <div>
          <p className=" text-xl font-bold p-4 my-8"> 
          {"Familiar with :"} 
          </p>

          <div className=" flex flex-wrap gap-6 lg:gap-10">
            {familiarWith.map((value) => (
              <span key={value.title} className="comp-skillset-Image">
                <Image
                  src={`/skillPic/${value.title}.png`}
                  {...imageSize}
                  alt={`${value.title}`}
                />
              </span>
            ))}
          </div>
        </div> */}
            
        <p className=" text-2xl font-bold p-4 my-8"> Language :  </p>  
        {languages.map((language) => (
          <li className=" skillset-comp-txt ml-7" key={language}>
            {" "}
            {language}{" "}
          </li>
        ))}

<p className=" text-2xl font-bold p-4 my-8"> Education :  </p> 
        <div className="md:inline-flex justify-around ">
          
        {/* University */}
        <div className="ml-4">
            <div className=" text-xl font-bold  "> University: </div>
            <div className="p-4">
              <div className=" skillset-comp-txt"> {university?.name} </div>
              <div className="skillset-comp-txt"> {university?.gpa} </div>
            </div>
          </div>
          {/* college */}
          <div>
            <div className=" text-xl font-bold mt-8 "> College: </div>
            <div className="p-4">
              <div className=" skillset-comp-txt"> {college?.name} </div>
              <div className="skillset-comp-txt"> {college?.gpa} </div>
            </div>
          </div>
          {/* school */}
          <div>
            <div className=" text-xl font-bold mt-8 animate-loadOpacity ">
              {" "}
              School:{" "}
            </div>
            <div className="p-4">
              <div className=" skillset-comp-txt"> {school?.name} </div>
              <div className=" skillset-comp-txt"> {school?.gpa} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSets;
