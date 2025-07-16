export default function FunctionClick(){
    const clickHandler = (a)=>{
        alert(a.type)
    }

    return (
        <button onMouseMove={clickHandler}>Click</button>
    )
}