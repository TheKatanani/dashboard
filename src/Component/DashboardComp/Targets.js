import TitleComp from'../TitleComp'
import Progres from './Progres';
import "./Targets.css"
import { FaDollarSign,FaCode,FaUser } from "react-icons/fa";
function Targets(){
    return(
        <div className='rounded border m-2 bg-white'>
        <div className="container pb-4">
            <TitleComp TitleComp="Yearly Targets" description="Targets Of The Year"/>
            <div className='d-flex p-2'>
                <div className='icon p-4 blue' >
                    <FaDollarSign color='#0d6efd'/>
                </div>
                <Progres done="80"  TargetType="Money" Target="$20.000" className="blue"/>
            </div>
            <div className='d-flex p-2'>
            <div className='icon p-4 brown'>
                    <FaCode color='rgb(245,158,11)'/>
                </div>
                <Progres done="55"  TargetType="Project" Target="24" className="brown"/>
            </div>
            <div className='d-flex p-2'>
            <div className='icon p-4 green'>
                    <FaUser color='rgb(34,197,94)'/>
                </div>
                <Progres done="75"  TargetType="Team" Target="12" className="green"/>
            </div>
        </div>

        </div>

    )
}

export default Targets;