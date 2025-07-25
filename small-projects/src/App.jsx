import FunctionClick from "./components/FunctionClick"
import Garage from "./components/ConditionalRendering"
import DynamicButton from "./components/DynamicButton"
import CounterButton from "./components/CounterButton"
import { useState } from "react"
import FormHandling from "./components/FormHandling"
import Car from "./components/Car"
import Timer from "./components/Timer"
import CounterTitle from "./components/CounterTitle"
import UseRefCount from "./components/UseRefCount"
import UseRefDOM from "./components/UseRefDOM"
import ContextData from "./components/ContextData"

function App() {
  //  const [arr,setArr] = useState({'1':'red','2':'yellow','3':'Green'})
  //  const handleClick = (id)=>{

  //   alert(`Clicked Button ${id}`);
  // }

  return (
    <>
      {/* <FunctionClick /> */}
      {/* <Garage cars={["Ford", "Honda", "Tesla"]} /> */}
      {/* <div>
         {
        Object.entries(arr).map(x=><DynamicButton onClick={()=>handleClick(x[0])} key={x[0]} id={x[0]} color={x[1]} />)
      }
      </div> */}


      {/* <CounterButton color={'brown'}/> */}

      {/* <FormHandling /> */}
      {/* <Car /> */}
      {/* <Timer /> */}
        {/* <CounterTitle /> */}
        {/* <UseRefCount /> */}
        {/* <UseRefDOM /> */}
        <ContextProvider>

        <ContextData />
        </ContextProvider>
    </>
  )
}

export default App
