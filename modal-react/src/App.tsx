import { useState } from "react"
import Modal from "./components/Modal"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <button onClick={() => setIsOpen(prev=>!prev)} className='bg-blue-500 text-white px-4 py-2'>Open</button>
    <Modal isOpen={isOpen}/>
    </>

  )
}

export default App