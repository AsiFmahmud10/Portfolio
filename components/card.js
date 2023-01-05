import { FiGithub } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import Image from 'next/image'
import Link from 'next/link'

const Card = ({data,link,width,height}) => {
    
     const {title, tech,id,imgSrc,live,gitLink,showProject} = data; 
     console.log(data)
     const buttonIcons = [
      {  
         name:'live',
         link:live,
         icon:MdOutlineLiveTv
      },
      {  
         name:'git',
         link:gitLink,
         icon:FiGithub
      },
      {  
         name:'video',
         link:showProject,
         icon:BsCameraVideo
      }

   ]
    return ( 
        <>   
        <div className={`skill-card max-w-[480px] `}>
            <Image className="rounded-lg" src={imgSrc} alt="pet" width={410} height={280} priority={true} />
            <div className=" h-[250px]">
                  <section className="">
                     <h2 className="text-xl text-center">
                        {title}
                     </h2>
                     <div className="text-md text-center h-[111px;]">
                           {
                              tech.map((items)=>(
                                 <button className=" skill-card-btn dark:hover:text-orange-300 " key={items}>
                                    # {items}
                                 </button>     
                                 )
                              )
                           } 
                     
                     </div>
                        
                        <div className="flex justify-between p-5 ">
                        {
                              buttonIcons.map((Btn,index)=>(
                              <Link key={index} href={ Btn?.link ? Btn.link :'' }>
                                 <div className="group">
                                    <button  className=" relative dark:hover:text-orange-300 skill-card-Iconbtn">
                                       <Btn.icon size={26}/>
                                    </button>
                                    <div className="hidden absolute dark:text-white text-red-500 group-hover:block text-center pl-6 pr-5 ">{Btn.name}</div>
                                 </div>
                              </Link> 
                              ))    
                        }
                                 
                              
                        </div>
                  </section>
            </div>
            
        </div>
            
        </>
     );
}
 
export default Card;