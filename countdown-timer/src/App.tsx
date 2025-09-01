import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [min,setMin] = useState(0);
  const [sec,setSec] = useState(0);

  useEffect(()=>{
     const timer = setInterval(()=>{
        setSec(prev=>{
          if(prev==59){
            setMin(pr=>pr+1);
            return 0;
          }
          return prev+1;
        })
    },1000)

    return ()=> clearInterval(timer);
  },[])
  return (
    <>
    <div className="">
      <h1>{String(min).padStart(2,'0')}</h1>:
      <h1>{String(sec).padStart(2,'0')}</h1>
    </div>
    </>

  )
}

export default App
