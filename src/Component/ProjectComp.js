import './ProjectComp.css'
import TitleComp from'./TitleComp'

function ProjectComp(props){
    let BgColor =()=> {
        if(+props.done === 100){
            return '#0d6efd'
        }else if(+props.done >=50){
            return '#20c997'
        }else return '#dc3545'
    }
    return(
            <div className='ProjectBox  border bg-white rounded mb-3 pb-4'>
                <TitleComp TitleComp={props.title} description={props.description}/>
                <div className='p-3 ps-4 '>
                    {
                        props.team.map((U)=>
                        (
                            <img src={U} className="rounded-circle border border-white" alt=""></img>
                        )
                    )
                    }
                </div>
                <div className='p-3 border-top border-bottom'>
                    {
                        props.features.map((U)=>
                        (
                            <span className='py-1 px-2 bg-light border rounded border-light m-1'>{U}</span>
                        )
                    )
                    }
                </div>
                <div className='d-flex justify-content-between align-items-center p-3'>
                <div className='Progres p-1 bg-light border rounded'>
                    <span className='rounded' style={{backgroundColor:`${BgColor()}`,width:`${props.done}%`}}></span>
                </div>
                    <div className='price text-black-50'>{props.price}</div>
                </div>
                <span className='date text-black-50'>{props.date}</span>
            </div>
    )
}

export default ProjectComp;