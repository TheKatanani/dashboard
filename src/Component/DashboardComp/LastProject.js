import './LastProject.css'
import TitleComp from'../TitleComp'

function LastProject(){
    return(
            <div className='container pb-5 rounded border m-2 bg-white' style={{maxWidth:"96.5%"}}>
                <div className='pb-4 '>
                <TitleComp TitleComp="Last News" />
                <ul className='projectList pb-4  mb-5 mt-3'>
                    <li>
                        <h6>Got The Project</h6>
                    </li>
                    <li>
                        <h6>Started The Project</h6>
                    </li>
                    <li>
                        <h6>The Project About To Finish</h6>
                    </li>
                    <li>
                        <h6>Test The Project</h6>
                    </li>
                    <li>
                        <h6>Finish The Project & Get Money</h6>
                    </li>
                </ul>
                </div>
            </div>
    )
}

export default LastProject;