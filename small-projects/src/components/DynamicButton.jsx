export default function DynamicButton(props){
    let color = props.color;
    let id = props.id;
    
    return (
        <button onClick={props.onClick} style={{ backgroundColor: color }} id={id}>Button {id}</button>
    )
}