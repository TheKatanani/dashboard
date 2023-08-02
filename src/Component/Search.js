import Profile from './ProfileImg'
import "./Search.css"
import {
    FaSearch,FaRegBell
} from "react-icons/fa";
function Search(){
return(
        <div className="search-bar p-2 d-flex align-items-center justify-content-between">

            <div className="search-box ms-3 p-2 rounded">
            <label htmlFor="search"><FaSearch color="#999" /></label>
            <input type="text" placeholder="Type A Keyword" id="search"></input>
            </div>
            <div className="notification d-flex align-items-center">
                <div className="icon bg-light">
                <FaRegBell size={25}/>  
                </div>
                <Profile/>    
            </div>    
            

        </div>
)
}
export default Search;