import { useState } from "react";

export default function Car(){
    const [car,setCar] = useState({
        brand: "Ferarri",
        model: "Roma",
        year: "2023",
        color: "Red"
    });
    const changeColor = () =>{
        setCar(prvState => {
            return {...prvState,color:prvState.color =='Blue'?'Red':'Blue'}
        })
    }

    return (
        <>
        <h1>My {car.brand}</h1>
        <h2>Is a {car.color} {car.model} from {car.year} </h2>
        <button onClick={changeColor}>{car.color =='Blue'?'Red':'Blue'}</button>
        </>
    )
}