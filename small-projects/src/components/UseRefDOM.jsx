import { useEffect, useRef, useState, useSyncExternalStore } from "react"

export default function UseRefDOM(){
    
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
      inputElement.current.style.background = 'transparent'
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}