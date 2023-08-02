// import './Tasks.css'
import SearchComp from './SearchComp';
import TitleComp from'../TitleComp'

function TopSearch(){
    return(
        <div className="container bg-white rounded border m-2" style={{maxWidth:"96.5%"}}>
            <TitleComp TitleComp="Top Search Items" />
            <ul className='px-2'> 
                <li className="d-flex justify-content-between p-0 m-1 align-item-center">
                    <h6 className="text-black-50 p-0 m-0">Keyword</h6>
                    <p className="text-black-50 p-0 m-0">Search Count</p>
                </li>
                <SearchComp title="Programming" count="220"/>
                <SearchComp title="JavaSctipt" count="180"/>
                <SearchComp title="PHP" count="160"/>
                <SearchComp title="Code" count="145"/>
                <SearchComp title="Design" count="110"/>
                <SearchComp title="Logic" count="95"/>
            </ul>
        </div>
    )
}

export default TopSearch;