import './ProjectsTable.css'
import TitleComp from'../TitleComp'
import ProjectsTableRow from "./ProjectsTableRow"
import Team_1 from '../images/team-01.png'
import Team_2 from '../images/team-02.png'
import Team_3 from '../images/team-03.png'
import Team_4 from '../images/team-04.png'
import Team_5 from '../images/team-05.png'
function ProjectsTable(){
    return(<div className='rounded overflow-auto border m-2 bg-white w-100 m-auto mt-3'>
            <TitleComp TitleComp="Project" />
        
        <table class="table table-striped Project">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Finish Data</th>
                    <th scope="col">Client</th>
                    <th scope="col">Price</th>
                    <th scope="col">Team</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
   
                    <ProjectsTableRow name="Ministry Wikipedia" finsh="10 May 2022" client="Ministry" price="$5300" team={[Team_1 ,Team_2,Team_3,Team_5]} statusClass="Yellow" status="Pending"/>
                    <ProjectsTableRow name="Bouba App" finsh="10 May 2022" client="Elzero Company" price="$500" team={[Team_1 ,Team_2,Team_5]} statusClass="blue" status="in-Progress"/>
                    <ProjectsTableRow name="Mahmoud Website" finsh="19 Mar 2022" client="Bouba" price="$650" team={[Team_2,Team_3]} statusClass="green" status="Completed"/>
                    <ProjectsTableRow name="Mahmoud Website" finsh="1 Mar 2022" client="mohammed" price="$700" team={[Team_2,Team_4]} statusClass="green" status="Completed"/>
                    <ProjectsTableRow name="Sayed Website" finsh="5 May 2021" client="Sayed" price="$400" team={[Team_1 ,Team_5]} statusClass="red" status="Rejcted"/>
                    <ProjectsTableRow name="Arena Application" finsh="10 sep 2020" client="Arena Company" price="$200" team={[Team_1 ,Team_2,Team_4,Team_5]} statusClass="green" status="Completed"/>
                    
                </tbody>
        </table> 
    
    </div>
    )
}

export default ProjectsTable;