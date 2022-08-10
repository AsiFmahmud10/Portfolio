import { BsFillCameraVideoOffFill } from "react-icons/bs";

const Card = ({data,link,width,height}) => {
    return ( 
        <>   
        <div className={` shadow-sm hover:shadow-md shadow-gray-600 hover:shadow-green-600 text-white rounded-md ${width} ${height} `}>
            <hr></hr>
            <section>
                 <h2 className="text-black">{data.title}</h2>
                 <div className="">{data.tech}</div>
                  
                  < BsFillCameraVideoOffFill/>
                  < BsFillCameraVideoOffFill/>

            </section>
        </div>
            
        </>
     );
}
 
export default Card;