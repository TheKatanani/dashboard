import FriendsComp from './FriendsComp'
import bg_1 from './images/friend-01.jpg'
import bg_2 from './images/friend-02.jpg'
import bg_3 from './images/friend-03.jpg'
import bg_4 from './images/friend-04.jpg'
import bg_5 from './images/friend-05.jpg'
function Friends (){
    return(
        <div className=" Friends row overflow-auto">
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="10 May 2022" articles="15" title="Ministry Wikipedia" bg={bg_1} description="mobile developer" projects="65"  frends="960" vip="true"/>
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="30 May 2022" articles="19" title="Ministry Wikipedia" bg={bg_2} description="cloud developer" projects="10" frends="90" />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="21 May 2022" articles="17" title="Bouba App" bg={bg_3} description="javaScript developer" projects="50" frends="60"  />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="16 May 2022" articles="14" title="Mahmoud Website" bg={bg_4} description="back-End developer" projects="60"   frends="30" />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="19 Mar 2022" articles="20" title="Mahmoud Website" bg={bg_5} description="javaScript developer" projects="70"   frends="100" />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="1 Mar 2022"  articles="22" title="Sayed Website" bg={bg_1} description="cloud developer" projects="40"   frends="114" />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="5 May 2021"  articles="10" title="Arena Application" bg={bg_5}  description="front-End developer"  projects="81"  frends="580" />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="10 sep 2020" articles="13" title="Arena Application" bg={bg_4}  description="content creator" projects="20"  frends="707" />
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="10 sep 2020" articles="15" title="Arena Application" bg={bg_3}  description="front-End developer" projects="20"   frends="1031" vip="true"/>
                    </div>
                    <div className='box col-xl-2 col-lg-4 col-md-6 col-sm-12 border-whight'>
                        <FriendsComp date="10 sep 2020" articles="10" title="Arena Application" bg={bg_2}  description="UI UX Designer" projects="20"   frends="1031" />
                    </div>
                        
        </div>
    )
}

export default Friends ;

