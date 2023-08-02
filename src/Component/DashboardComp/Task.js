import './Tasks.css'
import { FaRegTrashAlt } from "react-icons/fa";
function Tasks(props){
    return(
        <div className={props.className}>
            <div className="d-flex Tasks ps-2 justify-content-between align-itmes-center">
                
                <div>
                <h6 className="pt-2 ps-2 m-0 TitleComp">{props.title}</h6>
                <p className="ps-2 text-black-50">{props.descreption}</p>
                </div>
                <div className="align-self-center m-2 deleteIcon">

                <FaRegTrashAlt/>
                </div>
            </div>
        </div>
    )
}

export default Tasks;