import "./Title.css"
function Title(props){
    return(
        <>
            <h1 className="p-3 selectedTitle">{props.title}</h1>
        </>
    )
}

export default Title;