import './LatestPost.css'
import TitleComp from'../TitleComp'
import ProfileImg from '../ProfileImg'
import { FcLike ,FcComments} from "react-icons/fc";

function LatestPost(){

    return(
            <div className='container LatestPost pb-2 rounded border m-2 bg-white'style={{maxWidth:"96.5%"}}>
                <TitleComp TitleComp="Latest Post" />
                <div className=' m-2 p-2 py-3 ps-0 d-flex'>
                    <ProfileImg/>
                <div>
                        <h6>Mohammed Katanani</h6>
                        <p className='text-black-50'>About 3 Hours Ago</p>
                </div>
                </div>
                    <p className='py-4 border-bottom border-top text-capitalize '>
                        you can fool all of the people sone of the time, and some of the people all of the fime, but you can't fool of the people all of the time.
                    </p>
                    <div className='pb-4 text-black-50 d-flex justify-content-between align-items-center py-3'>
                        <div>
                            <FcLike/>
                            <span>1.8k</span>
                        </div>
                        <div>
                            <FcComments/>
                            <span>500</span>
                        </div>
                    </div>
            </div>
    )
}

export default LatestPost;