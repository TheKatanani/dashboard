import './Reminders.css'
import TitleComp from'../TitleComp'

function Reminders(){
    return(
            <div className='container Reminders pb-2 rounded border m-2 bg-white' style={{maxWidth:"96.5%"}}>
                <TitleComp TitleComp="Reminders" />
                <ul className='mb-5 mt-3 ms-2'>
                    <li className='ps-3'>
                        <h6>Check My Tasks List</h6>
                        <p className='text-black-50'>28/09/2022 - 12:00am</p>
                    </li>
                    <li className='ps-3'>
                        <h6>Check My Project</h6>
                        <p className='text-black-50'>28/09/2022 - 12:00am</p>
                    </li>
                    <li className='ps-3'>
                        <h6>Call All My Clients</h6>
                        <p className='text-black-50'>28/09/2022 - 12:00am</p>
                    </li>
                    <li className='ps-3'>
                        <h6 className='d-block'>Finish The Development Workshop</h6>
                        <p className='text-black-50'>28/09/2022 - 12:00am</p>
                    </li>
                    
                </ul>
            </div>
    )
}

export default Reminders;