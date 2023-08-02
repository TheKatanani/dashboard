import { AiFillStar} from "react-icons/ai";
import "./Profile.css"
import ProfileImg from "./ProfileImg";
import TitleComp from "./TitleComp";
import act_1 from './images/activity-01.png'
import act_2 from './images/activity-02.png'
import act_3 from './images/activity-03.png'
import Switches from './Switches '
function Profile(){

    return(
        <div className=' m-auto row Profile  pb-4 overflow-auto'>
            <div className="col-12 bg-white rounded p-2 py-3 row m-auto ">
                <div className="col-lg-2 col-md-12 text-center container  border-end">
                    <div className="img mt-4 mb-3">
                        <ProfileImg/>
                    </div>
                    <h4>M.Katanani</h4>
                    <p className="text-black-50">Level 20</p>
                    <div className="progres m-auto  my-3 rounded"></div>
                    <div className="stars d-flex gap-1 justify-content-center">
                        <AiFillStar color="#ffc107"/>
                        <AiFillStar color="#ffc107"/>
                        <AiFillStar color="#ffc107"/>
                        <AiFillStar color="#ffc107"/>
                        <AiFillStar color="#ffc107"/>
                    </div>
                    <p className="text-black-50">550Rating</p>
                </div>
                <div className="col-10 container">
                <div className="p-2 border-bottom">
                    <h6 className="text-black-50">General Information:</h6>
                    <div className="row">
                        <p className="col-lg-3 col-md-12 text-black-50">Full Name: <span className="text-black">Mohammd Katanani</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Gender:<span className="text-black">Male</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Country:<span className="text-black">Palestain</span></p>
                        <div className="col-lg-3 col-md-12">
                            <Switches/>
                        </div>
                    </div>
                </div>
                <div className="p-2 border-bottom">
                    <h6 className="text-black-50">Personal Information</h6>
                    <div className="row">
                        <p className="col-lg-3 col-md-12 text-black-50">Email:<span className="text-black">mkatanani14@gmail.com</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Phone:<span className="text-black">+972 592263808</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Date Of Birth:<span className="text-black">8/7/2002</span></p>
                        <div className="col-lg-3 col-md-12">
                            <Switches/>
                        </div>
                    </div>
                </div>
                <div className="p-2 border-bottom">
                    <h6 className="text-black-50">Job Information</h6>
                    <div className="row">
                        <p className="col-lg-3 col-md-12 text-black-50">Title:<span className="text-black">Front-End Developer</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Programmming Languge:<span className="text-black">Java Script</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Years Of Ecperience:<span className="text-black">+1</span></p>
                        <div className="col-lg-3 col-md-12">
                            <Switches/>
                        </div>
                    </div>
                </div>
                <div className="p-2 ">
                    <h6 className="text-black-50">Billing Information</h6>
                    <div className="row">
                        <p className="col-lg-3 col-md-12 text-black-50">Payment Method:<span className="text-black">Paypal</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Email:<span className="text-black">m@gmail.com</span></p>
                        <p className="col-lg-3 col-md-12 text-black-50">Subscription:<span className="text-black">Nomthly</span></p>
                        <div className="col-lg-3 col-md-12">
                            <Switches/>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className=" col-md-12 col-lg-4 bg-white mt-3 border-end border-light rounded p-2 py-3">
                <TitleComp TitleComp="My Skills" description="Complete Skills List"/>
                <div className="p-2 py-3 border-bottom">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">HTML</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Pugjs</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">HAML</span>
                </div>
                <div className="p-2 py-3 border-bottom">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">scss</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">css</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">sass</span>
                </div>
                <div className="p-2 py-3 border-bottom">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">PHP</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Lravel</span>
                    
                </div>
                <div className="p-2 py-3 border-bottom">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Java</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Pugjs</span>
                    
                </div>
                <div className="p-2 py-3 border-bottom">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Python</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Mysql</span>
                    
                </div>
                <div className="p-2 py-3 border-bottom">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">JavaScript</span>
                    <span className="py-1 px-2 border bg-white ms-1 rounded">React</span>
                    
                </div>
                <div className="p-2 py-3 ">
                    <span className="py-1 px-2 border bg-white ms-1 rounded">Typescript</span>
                    
                </div>
            </div>
            <div className="col-md-12 col-lg-8 border bg-white border-start border-light mt-3 rounded pb-3 p-2 py-3">
            <TitleComp TitleComp="Latest Activites" description="Latest Activites Done By The User"/>
            <div className="d-flex border-bottom align-items-center p-2 py-3 ">
                <div className="img pe-3">
                    <img src={act_1} alt=" "></img>
                </div>
                <div className="d-flex justify-content-between w-100">

                    <div>
                        <h6>Store</h6>
                        <p className="text-black-50">Bought The Mastering Python Course</p>
                    </div>
                    
                    <div>
                        <h6>18:10</h6>
                        <p className="text-black-50">Yesterday</p>
                    </div>
                    
                </div>
            </div>
            <div className="d-flex border-bottom align-items-center p-2 py-3 ">
                <div className="img pe-3">
                    <img src={act_2} alt=" "></img>
                </div>
                <div className="d-flex justify-content-between w-100">

                    <div>
                        <h6>Academy</h6>
                        <p className="text-black-50">Got The PHP Certificate</p>
                    </div>
                    
                    <div>
                        <h6>17:15</h6>
                        <p className="text-black-50">Yesterday</p>
                    </div>
                
                </div>
            </div>
            <div className="d-flex border-bottom align-items-center p-2 py-3 ">
                <div className="img pe-3">
                    <img src={act_3} alt=" "></img>
                </div>
                <div className="d-flex justify-content-between w-100">

                    <div>
                        <h6>Badges</h6>
                        <p className="text-black-50">Unlocked The 10 Skills Badge</p>
                    </div>
                    
                    <div>
                        <h6>21:40</h6>
                        <p className="text-black-50">Yesterday</p>
                    </div>
                    
                </div>
            </div>
            <div className="d-flex  align-items-center p-2 py-3 ">
                    <div className="img pe-3">
                        <img src={act_1} alt=" "></img>
                    </div>
                    <div className="d-flex justify-content-between w-100">

                    <div>
                        <h6>Store</h6>
                        <p className="text-black-50">V=Bought The Typescript Course</p>
                    </div>
                    
                    <div>
                        <h6>12:11</h6>
                        <p className="text-black-50">Yesterday</p>
                    </div>
                
                </div>
            </div>
            </div>
    </div>
    )
}

export default Profile;