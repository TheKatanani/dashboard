import './CoursesComp.css'
import { FaUser } from "react-icons/fa";
function CoursesComp(props){
    return(
                <div className="card rounded mb-3 p-0" >
                            <img src={props.user} className="rounded-circle border CoursesImg border-white" alt=""></img>
                    <img src={props.bg} class="card-img-top" alt="..."></img>
                    <div className="card-body p-0">
                        <h5 className="card-title p-2">Card title</h5>
                        <p className="card-text  p-2 pb-5 text-black-50 border-bottom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#\" className="btn btn-primary myBtn d-flex justify-content-center rounede m-auto">Course Info</a>

                        <div className='d-flex justify-content-between container p-2'>
                            <span className='text-black-50'><FaUser/>{props.frends}</span>
                            <span className='text-black-50'>{props.price}</span>
                        </div>
                    </div>
                </div>
    )
}

export default CoursesComp;