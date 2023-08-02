import './News.css'
function News(props){
    return(
        <div className={props.className}>
            <div className="row News d-flex ps-2 align-items-center justify-content-between">
                <img src={props.image} className="rounded p-0  m-2 col-3" alt="sdf">
            
                </img>
                <div className='col-5 m-0 p-0'>
                <h6 className="pt-2 ps-2 m-0 TitleComp">{props.title}</h6>
                <p className="ps-2 text-black-50">{props.descreption}</p>
                </div>
                <p className='bg-light col-2 rounded p-1 py-2 lastNewsAgo m-1 me-2 border'>{props.ago} Days Ago</p>
            </div>
        </div>
    )
}

export default News;