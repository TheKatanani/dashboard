import ProjectComp from './ProjectComp'
import Team_1 from './images/team-01.png'
import Team_2 from './images/team-02.png'
import Team_3 from './images/team-03.png'
import Team_4 from './images/team-04.png'
import Team_5 from './images/team-05.png'
function Project (){
    return(
        <div className=" Project row container overflow-scroll content ps-4">
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Ministry Wikipedia" date="10 May 2022" description="Elzero dasgboard Project Design " price="$5300" team={[Team_1 ,Team_2,Team_3,Team_5]} features={["Programing", "Deaign", "Hosting" , "Marketing"]} done="60" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Ministry Wikipedia" date="10 May 2022" description="Academy Portal Project Design And Programming" price="$5300" team={[Team_1 ,Team_2,Team_3,Team_5]} features={["Programing", "Deaign",  "Marketing"]} done="50" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Bouba App" date="10 May 2022" description="Chatting Application Project Design" price="$500" team={[Team_1 ,Team_2,Team_5]} features={[ "Deaign", "Hosting" , "Marketing"]} done="49" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Mahmoud Website" date="19 Mar 2022" description="Academy Portal Project Design And Programming" price="$650" team={[Team_2,Team_3]} features={["Programing", "Deaign", "Hosting"]} done="30" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Mahmoud Website" date="1 Mar 2022" description="Academy Portal Project Design And Programming" price="$700" team={[Team_2,Team_4]} features={["Programing",  "Marketing"]} done="100" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Sayed Website" date="5 May 2021" description="Academy Portal Project Design And Programming" price="$400" team={[Team_1]} features={[ "Marketing"]} done="14" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Arena Application" date="10 sep 2020" description="Mohamed Application Project Design" price="$200" team={[Team_1 ,Team_2,Team_4,Team_5]} features={["Programing", "Deaign", "Hosting" , "Marketing"]} done="80" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Arena Application" date="10 sep 2020" description="Academy Portal Project Design And Programming" price="$200" team={[Team_5]} features={[ "Marketing"]} done="77" />
                   </div>
                   <div className='box col-lg-4 col-md-6 col-sm-12 border-whight'>
                    <ProjectComp title="Arena Application" date="10 sep 2020" description="Ahmed Application Project Design" price="$200" team={[Team_1 ,Team_2,Team_4,Team_5]} features={["Deaign", "Hosting" , "Marketing"]} done="10" />
                   </div>
                    
        </div>
    )
}

export default Project ;

/*
date *
price*
done
features
team*
description
title*
*/ 