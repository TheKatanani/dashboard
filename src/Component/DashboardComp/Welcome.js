import "./Welcome.css"
import TitleComp from'../TitleComp'
import WelcomeImg from '../images/undraw_react_re_g3ui.svg'
import ProfileImg from '../ProfileImg'
import Bottun from '../Bottun'
function Welcome(){
return(<div className="rounded border-light m-2 bg-secondary bg-opacity-25 ">

<div className="Welcome container   d-flex ">
    <TitleComp TitleComp="Welcome" description="katanani"/>
        <img src={WelcomeImg} className="img-fluid w-50" alt="welcome"/>
</div>
<section className="WelcomeSection position-relative d-flex">
    <div className="imgProfile position-absolute">
        <ProfileImg/>  
    </div>
    <div className="container rounded-bottom border pt-5 pb-5 bg-white">
        <div className="row d-flex  align-items-center justify-content-center">
            <hr></hr>
            <div className="col-4 text-center">
                <h6>M.katanani</h6>
                <p className="text-black-50">Developer</p>
            </div>
            <div className="col-4 text-center">
                <h6>80</h6>
                <p className="text-black-50">Projects</p>
            </div>
            <div className="col-4 text-center">
                <h6>$8522</h6>
                <p className="text-black-50">Earned</p>
            </div>
            <hr></hr>
        </div>
        <Bottun name="Profile"/>
    </div>
</section>
</div>
)
}
export default Welcome;