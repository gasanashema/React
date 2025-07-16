export default function FunctionClick(){
    const clickHandler = (a)=>{
        alert(a.type)
    }

    return (
        <button onMouseLeave={clickHandler}>Click</button>
    )
}