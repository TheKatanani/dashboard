import './Social.css'
import TitleComp from'../TitleComp'
import { FaFacebookF ,FaTwitter,FaYoutube,FaLinkedinIn} from "react-icons/fa";

function Social(){

    return(
        <div className='container Social pb-5 rounded border m-2 bg-white'style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Social Media Stats" />
        <ul className='m-2 p-2 pb-3'>
            <li className='mt-2 align-items-center justify-content-between d-flex '>
                <div className='d-flex align-items-center justify-content-between'>
                <div className='svg'>
                <FaTwitter size={30} color="#fff"/>
                </div>
                <p className='m-2'>90K Followers</p>
                </div>
                <span className=' me-2 rounded p-2'>Followers</span>
            </li>
            <li className='mt-2 align-items-center justify-content-between d-flex'>
                <div className='d-flex align-items-center justify-content-between'>
                <div className='svg'>
                <FaFacebookF size={30} color="#fff"/>
                </div>
                <p className='m-2'>2M Like</p>
                </div>
                <span className=' me-2 rounded p-2 '>Like</span>
            </li>
            <li className='mt-2 align-items-center justify-content-between d-flex'>
                <div className='d-flex align-items-center  justify-content-between'>
                <div className='svg'>
                <FaYoutube size={30} color="#fff"/>
                </div>
                <p className='m-2'>1M Subscribe</p>
                </div>
                <span className=' me-2 rounded p-2 '>Subscribe</span>
            </li>
            <li className='mt-2 align-items-center justify-content-between d-flex'>
                <div className='d-flex align-items-center justify-content-between'>
                <div className='svg'>
                <FaLinkedinIn size={30} color="#fff"/>
                </div>
                <p className='m-2'>70K Followers</p>
                </div>
                <span className=' me-2 rounded p-2 '>Followers</span>
            </li>
            
        </ul>
    </div>
    )
}

export default Social;