import './FilesComp.css'
import { FcDownload} from "react-icons/fc";
function FilesComp(props){
    return(
                <div className="card rounded mb-3 p-2 container" >
                    {props.vip&&<span className='vip'>VIP</span>}
                    <div className='card-head text-center'>
                        <div className='card_top_icon'>
                            <FcDownload color="#777"/>
                        </div>
                        <div>
                            <img src={props.bg} className="rounded mt-5" alt="..."></img>
                        </div>
                        <h6 className='mt-2'>{props.title}</h6>
                        <p className='text-black-50 text-start'>{props.description}</p>
                    </div>
                    <div className="card-body p-0 ">
                        <div className='d-flex justify-content-between border-top container p-2'>
                            <span className='date text-black-50'>{props.date}</span>
                            <span className='size text-black-50'>{props.size}</span>
                        </div>
                    </div>
                </div>
    )
}

export default FilesComp;
