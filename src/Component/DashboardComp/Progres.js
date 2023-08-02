import "./Progres.css"

function Progres(props){
    return(
        <div className={`container ${props.className}`}>
            <h6 className="text-black-50 fs-6">{props.TargetType}</h6>
            <h5 className="text-black fs-6">{props.Target}</h5>
            <div className="bar w-100">
                <span className="targetDone" style={{width:`${props.done}%`,backgroundColor:`${props.color}`}}  data-done={`${props.done}%`}></span>
            </div>
        </div>

    )
}

export default Progres;