import { BsFillCameraVideoOffFill } from "react-icons/bs";
import Image from 'next/image'
const Card = ({data,link,width,height}) => {
     const {title, tech,id} = data; 
    return ( 
        <>   
        <div className={` shadow-sm border-2  hover:shadow-md text-gray-600 font-bold hover:shadow-gray-600 rounded-md p-3 `}>
            <Image src={`/p${id}.jpg`} alt="pet" width={410} height={280} />
            
            <section className="">
                 <h2 className="text-xl text-center">
                    {title}
                 </h2>
                 <div className="text-large pr-3">
                     {tech.map((items)=>(
                        <div key={items}>{items}</div>
                    ))} 
                
                 </div>
                  
                  <div className="flex justify-between p-5 ">
                        < BsFillCameraVideoOffFill/>
                        < BsFillCameraVideoOffFill/>
                  </div>
            </section>

        </div>
            
        </>
     );
}
 
export default Card;