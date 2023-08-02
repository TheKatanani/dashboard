import CoursesComp from './CoursesComp'
import Team_1 from './images/team-01.png'
import Team_2 from './images/team-02.png'
import Team_3 from './images/team-03.png'
import Team_4 from './images/team-04.png'
import Team_5 from './images/team-05.png'
import bg_1 from './images/course-01.jpg'
import bg_2 from './images/course-02.jpg'
import bg_3 from './images/course-03.jpg'
import bg_4 from './images/course-04.jpg'
import bg_5 from './images/course-05.jpg'

function Courses() {
    return (<div className=" Courses row overflow-auto" >
        <div className='box col-xl-2 col-lg-6 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Ministry Wikipedia"
                bg={
                    bg_1
                }
                description="Elzero dasgboard Courses Design And Prorammeng And Hosting"
                price="$5300"
                user={
                    Team_1
                }
                frends="960" />
        </div> <div className='box col-xl-2 col-lg-6 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Ministry Wikipedia"
                bg={
                    bg_2
                }
                description="Academy Portal Courses Design And Programming"
                price="$5300"
                user={
                    Team_2
                }
                done="50" />
        </div> <div className='box col-xl-2 col-lg-6 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Bouba App"
                bg={
                    bg_3
                }
                description="Chatting Application Courses Design"
                price="$500"
                user={
                    Team_5
                }
                done="69" />
        </div> <div className='box col-xl-2 col-lg-6 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Mahmoud Website"
                bg={
                    bg_4
                }
                description="Academy Portal Courses Design And Programming"
                price="$650"
                user={
                    Team_2
                }
                frends="30" />
        </div> <div className='box col-xl-2 col-lg-6 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Mahmoud Website"
                bg={
                    bg_5
                }
                description="Academy Portal Courses Design And Programming"
                price="$700"
                user={
                    Team_4
                }
                frends="100" />
        </div> <div className='box col-xl-2 col-lg-6 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Sayed Website"
                bg={
                    bg_1
                }
                description="Academy Portal Courses Design And Programming"
                price="$400"
                user={
                    Team_3
                }
                features={
                    ["Marketing"]
                }
                frends="114" />
        </div> <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Arena Application"
                bg={
                    bg_5
                }
                description="Mohamed Application Courses Design"
                price="$200"
                user={
                    Team_4
                }
                frends="580" />
        </div> <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Arena Application"
                bg={
                    bg_4
                }
                description="Academy Portal Courses Design And Programming"
                price="$200"
                user={
                    Team_5
                }
                features={
                    ["Marketing"]
                }
                frends="707" />
        </div> <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Arena Application"
                bg={
                    bg_3
                }
                description="Ahmed Application Courses Design"
                price="$200"
                user={
                    Team_1
                }
                frends="1031" />
        </div> <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight' >
            <CoursesComp title="Arena Application"
                bg={
                    bg_2
                }
                description="Ahmed Application Courses Design"
                price="$200"
                user={
                    Team_2
                }
                frends="1031" />
        </div>

    </div>
    )
}

export default Courses;