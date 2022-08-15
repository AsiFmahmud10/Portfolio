import { FiGithub } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import Image from 'next/image'
const Card = ({data,link,width,height}) => {
     const {title, tech,id} = data; 
    return ( 
        <>   
        <div className={`skill-card `}>
            <Image className="rounded-lg" src={`/p${id}.jpg`} alt="pet" width={410} height={280} />
            
            <section className="">
                 <h2 className="text-xl text-center">
                    {title}
                 </h2>
                 <div className="text-large pr-3 pt-3 text-center">
                     {tech.map((items)=>(
                        <button className=" skill-card-btn " key={items}>
                           # {items}
                        </button>
                    ))} 
                
                 </div>
                  
                  <div className="flex justify-between p-5 ">
                    <button className="skill-card-Iconbtn"> <MdOutlineLiveTv size={26}/></button>
                    <button className="skill-card-Iconbtn"> <FiGithub size={26} title="github" />
                  </button>          
                            
                        
                  </div>
            </section>

        </div>
            
        </>
     );
}
 
export default Card;