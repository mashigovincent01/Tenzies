
export default function(props){
    return(<button style={props.isHeld ? {backgroundColor: "#59E391"}: null} onClick={()=> props.hold(props.id)}>{props.value}</button>)
}