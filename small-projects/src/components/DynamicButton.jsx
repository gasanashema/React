export default function DynamicButton(props){
    let color = props.color;
    let id = props.id;
    const handleClick = ()=>{
        
        alert(`Clicked Button ${id}`);
    }
    return (
        <button style={{ backgroundColor: color }} id={id} onClick={handleClick}>Button {id}</button>
    )
}