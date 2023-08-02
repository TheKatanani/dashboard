import './ProjectsTable.css'

let i=0;
function ProjectsTableRow(props){
    return(<>
                    <tr>
                    <th scope="row">{i+=0.5}</th>
                    <td>{props.name}</td>
                    <td>{props.finsh}</td>
                    <td>{props.client}</td>
                    <td>{props.price}</td>
                    <td>
                    {
                    props.team.map((U)=>
                        (
                            <img src={U} className="rounded-circle border border-white" alt="sdf"></img>
                        )
                    )
                        
                    }
                    
                    </td>
                    <td className={ props.statusClass }>
                        <span className='rounded p-1 px-2'>{props.status}</span>
                        </td>
                    </tr>
    </>
    )
}

export default ProjectsTableRow;