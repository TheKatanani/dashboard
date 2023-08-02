import "./Tickets.css"
import TitleComp from'../TitleComp'
import { FaRegListAlt, FaCloudsmith ,FaRegCheckCircle,FaRegWindowClose} from "react-icons/fa";
function Tickets(){
    return(
        <div className='container Tickets rounded border m-2 bg-white'>
        <TitleComp TitleComp="Tickets Statistics" description="Everything About Supports"/>
            <div className='boxs row  d-flex justify-content-center alighn-itmes-center gap-2 pb-4'>
                <div className='ticketsBox rounded border p-2  col-5 text-center'>
                    <FaRegListAlt color='orange'/>
                    <h2>2500</h2>
                    <p>Total</p>
                </div>
                <div className='ticketsBox rounded border p-2  col-5 text-center'>
                    <FaCloudsmith color='#0d6efd'/>
                    <h2>500</h2>
                    <p>Pending</p>
                </div>
                <div className='ticketsBox rounded border p-2  col-5 text-center'>
                    <FaRegCheckCircle color='#20c997'/>
                    <h2>1900</h2>
                    <p>Closed</p>
                </div>
                <div className='ticketsBox rounded border p-2  col-5 text-center'>
                    <FaRegWindowClose color='#dc3545'/>
                    <h2>100</h2>
                    <p>Deleted</p>
                </div>
            </div>
        </div>
    )
}

export default Tickets;
