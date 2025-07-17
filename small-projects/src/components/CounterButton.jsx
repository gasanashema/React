import { useState } from "react";
import DynamicButton from "./DynamicButton";
export default function CounterButton(props){
    const [count,setCount] = useState(0);
    const increaseCount = () => setCount(x=>x+=1);
    return (
        <>
        <p>You Clicke {count} times</p>
        <DynamicButton onClick={increaseCount} color={props.color} />
        </>
    )

}