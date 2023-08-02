// import './Tasks.css'
import './LastUpload.css'
function SearchComp(props){
    const classN=`${props.className} d-flex justify-content-between align-items-center`
    return(

        <li className={classN}>
            <div className="d-flex align-items-center">
                <div className="mx-2 pb-2">
            {props.icon&&props.icon }

                </div>
            <div>
            <h6 className="p-0 m-1">{props.title}</h6>
            {props.user&&<p><p className="text-black-50 m-1 ">{props.user}</p></p>}
            </div>

            </div>
            <p className="bg-light rounded p-2 p-0 m-1">{props.count}</p>
        </li>
    )
}

export default SearchComp;