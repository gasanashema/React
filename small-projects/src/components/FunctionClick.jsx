export default function FunctionClick(){
    const clickHandler = (a)=>{
        alert('hello '+a)
    }

    return (
        <button onClick={()=>clickHandler('Mr')}>Click</button>
    )
}