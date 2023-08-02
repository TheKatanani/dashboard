import './LastTasks.css'

import TitleComp from'../TitleComp'
import Tasks from'./Task'

function LastTasks(){
    return(
        <div className='container rounded border m-2 bg-white'style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Last Tasks" />
            <div className='pt-3 boxs row  d-flex justify-content-center align-itmes-center gap-2 pb-4'>
                <Tasks  className=""  title="Created SASS Section" descreption="New SASS New Websete Design"/>
                <Tasks  className="border-top"  title="Changed The Design" descreption="A Brand New Website Design"/>
                <Tasks  className="border-top"  title="Team Increased" descreption="3 Developers Joined The Team"/>
                <Tasks  className="border-top done"  title="Added Payment Gateway" descreption="Many New Payment Gateways Add"/>
                <Tasks  className="border-top"  title="Added Payment Gateway" descreption="Many New Payment Gateways Add"/>
            </div>
        </div>
    )
}

export default LastTasks;