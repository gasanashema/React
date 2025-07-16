import FunctionClick from "./components/FunctionClick"
import Garage from "./components/ConditionalRendering"
import DynamicButton from "./components/DynamicButton"
import { useState } from "react"
function App() {
 const [arr,setArr] = useState({'1':'red','2':'yellow','3':'Green'})

  return (
    <>
      {/* <FunctionClick /> */}
      {/* <Garage cars={["Ford", "Honda", "Tesla"]} /> */}
      <div>
         {
        Object.entries(arr).map(x=><DynamicButton key={x[0]} id={x[0]} color={x[1]} />)
      }
      </div>
     
      
    </>
  )
}

export default App
