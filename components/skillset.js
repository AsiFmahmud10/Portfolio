import Image from "next/image";

const SkillSets = () => {
  const infoAboutMe = {
    comfortableWith: [
      { title: "git" },
      { title: "react" },
      { title: "flutter" },
      { title: "sql" },
      { title: "firebase" },
      { title: "next" },
    ],
    familiarWith: [{ title: "typescript" }, { title: "vue" }],

    imageSize: { height: "110", width: "110" },
    languages: ["bangla", "english"],
    school: {
      name: "Name : Police Lines School And College, Rangpur",
      gpa:  "SSC_GPA : 5.00",
      src: "/",
    },
    college: {
      name: "Name : Police Lines School And College, Rangpur",
      gpa:  "HSC_GPA : 5.00",
      src: "/",
    },
  };

  const {school,college,languages,imageSize,comfortableWith,familiarWith} = infoAboutMe

  return (
    <>
      <div className="p-4">
        <p className=" text-2xl font-bold p-4 my-8"> Comfortable with : </p>
        <div className="  flex justify-start gap-7   ">
          {infoAboutMe.comfortableWith.map((value) => (
            <div key={value.title} className=" border px-2 rounded-xl dark:bg-dark-grid bg-gray-50  w-24 hover:drop-shadow-lg ">
              <Image
                {...imageSize}
                src={`/skillPic/${value.title}.png`}
                alt={`${value.title}`}
              />
            </div>
          ))}
        </div>

        <div>
          <p className=" text-xl font-bold p-4 my-8"> Familiar with : </p>

          <div className=" flex justify-start gap-7">
            { familiarWith.map((value) => (
              <span key={value.title} className="border px-2 rounded-xl dark:bg-dark-grid bg-gray-50  w-24 hover:drop-shadow-lg">
                <Image 
                  src={`/skillPic/${value.title}.png`}
                  {...imageSize}
                  alt={`${value.title}`}
                />
              </span>
            ))}
          </div>
        </div>

        <p className=" text-xl font-bold p-4  mt-8"> Language: </p>
        {
           languages.map((language) => (
          <li className=" ml-7" key={language}> {language} </li>
          ))
        }

        <div className="md:inline-flex justify-around ">
            {/* University */}
          <div>
            <div className=" text-xl font-extrabold mt-8 "> University: </div> 
            <div className="p-4">
              <div>
                  
              </div>
              <div className=" text-xl font-light">
                  Currently studing cse at khulna university
              </div> 
            </div>      
          </div>
          
          
            {/* college */}
          <div>
            <div className=" text-xl font-bold mt-8 "> College: </div> 
            <div className="p-4">
              <div className=" text-xl font-light"> { college?.name} </div> 
              <div className=" text-xl font-light"> { college?.gpa} </div>         
            </div>      
          </div>
              {/* school */}
          <div>

            <div className=" text-xl font-bold mt-8 animate-loadOpacity "> School: </div> 
            <div className="p-4">
              <div className=" text-xl font-light"> { school?.name} </div> 
              <div className=" text-xl font-light"> { school?.gpa} </div>         
            </div>      
          
          </div>
        </div>




      </div>
         


    </>
  );
};

export default SkillSets;
