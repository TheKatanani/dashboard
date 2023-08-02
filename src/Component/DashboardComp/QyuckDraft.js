import "./QyuckDraft.css"
import TitleComp from'../TitleComp'
import Bottun from '../Bottun'


function  QyuckDraft(){
    return(
        <>
        <div className=" pb-5 rounded border m-2 bg-white">
            <TitleComp TitleComp="Qyuck Draft" description="Write A Draft For Your Ideas"/>
            <input type="text" id="quickTitle" placeholder='Title' className=' p-2 mx-2  mb-3'></input>
            <textarea id="quickTitlebox" placeholder="Your Thought" className=" p-2 mx-2 mb-3"></textarea>
            <Bottun name="Save"/>
        </div>

        </>

    )
}

export default QyuckDraft;