import TitleComp from'../TitleComp'
import SearchComp from './SearchComp';

import { GrDocumentPdf,GrDocumentZip, GrDocumentRtf,GrDocumentText,GrDocumentStore,GrDocumentVideo} from "react-icons/gr";
function LastUpload(){
    return(
        <div className='container LastUpload pb-2 rounded border m-2 bg-white'style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Last News" />

            <SearchComp icon={<GrDocumentPdf size={30}/>} className="" user="Elzero" title="my-file.pdf" count="2.9mb"/>
            <SearchComp icon={<GrDocumentVideo size={30}/>} className="border-top" user="Admin" title="My-Video-File.avi" count="4.9mb"/>
            <SearchComp icon={<GrDocumentRtf size={30}/>} className="border-top" user="Osama" title="My-Psd-File.pdf" count="4.5mb"/>
            <SearchComp icon={<GrDocumentZip size={30}/>} className="border-top" user="User" title="My-Zip-File.pdf" count="8.9mb"/>
            <SearchComp icon={<GrDocumentStore size={30}/>} className="border-top" user="Admin" title="My-Dll-File.pdf" count="4.9mb"/>
            <SearchComp icon={<GrDocumentText size={30}/>} className="border-top" user="Designer" title="My-Eps-File.pdf" count="8.9mb"/>
        </div>
    )
}

export default LastUpload;