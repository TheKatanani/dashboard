import TitleComp from'../TitleComp'
import  One from "../images/OIP (1).jpg";
import  Two from "../images/OIP.jpg";
import  Three from "../images/12OKPWHLVCUFyLwqUGQFtjqKnol.jpg";
import  Four from "../images/fallout-3-hd-1920x1080-and-4k-uhd-3840x2160-large-178200882.jpg";
import News from './News';
function LastNews(){
    return(
        <div className='container rounded border  bg-white' style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Last News" />
            <div className='pt-3 boxs row  d-flex justify-content-center alighn-itmes-center gap-2 pb-4'>
                <News ago="3" className="" image={One} title="Created SASS Section" descreption="New SASS New Websete Design"/>
                <News ago="5" className="border-top" image={Two} title="Changed The Design" descreption="A Brand New Website Design"/>
                <News ago="7" className="border-top" image={Three} title="Team Increased" descreption="3 Developers Joined The Team"/>
                <News ago="9" className="border-top" image={Four} title="Added Payment Gateway" descreption="Many New Payment Gateways Add"/>

            </div>
        </div>
    )
}

export default LastNews;