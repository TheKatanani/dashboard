import './FriendsComp.css'
import { FaPhoneAlt , FaEnvelope ,FaGrinBeam , FaProjectDiagram ,FaBookReader} from "react-icons/fa";
function CoursesComp(props){
    return(
                <div className="card rounded mb-3 p-2 container" >
                    {props.vip&&<span className='vip'>VIP</span>}
                    <div className='card-head text-center'>
                        <div className='card_top_icon'>
                            <span className='bg-light rounded-circle border p-2 m-1'><FaPhoneAlt color="#777"/></span>
                            <span className='bg-light rounded-circle border p-2'><FaEnvelope color="#777"/></span>
                        </div>
                        <div>
                            <img src={props.bg} className="rounded-circle mt-5" alt="..."></img>
                        </div>
                        <h6 className='mt-2'>{props.title}</h6>
                        <p className='text-black-50'>{props.description}</p>
                    </div>
                    <div className="card-body p-0 ">
                        <div className=' border-top p-2 '>
                            <div className='d-flex gap-3  align-items-center'>
                                <FaGrinBeam/>
                                <pre className='pt-2'>{props.frends} frends</pre>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <FaProjectDiagram/>
                                <pre className='pt-2'>{props.projects} Project</pre>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <FaBookReader/>
                                <pre className='pt-2'>{props.articles} Articles</pre>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between border-top container p-2'>
                            <span className='date text-black-50'>joined {props.date}</span>
                            <div className='d-flex gap-1 pt-2 '>
                            <a href="#\" className="btn btn-primary myBtn m-1 rounede m-auto">profile</a>
                            <a href="#\" className="btn btn-danger myBtn m-1 rounede m-auto">remove</a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CoursesComp;

/*
title 
description
friends
projects
articles
data
*/ 