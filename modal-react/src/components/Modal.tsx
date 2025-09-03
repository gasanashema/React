import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({isOpen}) => {
    if(!isOpen) return null
  return ReactDOM.createPortal(
    <div>Modal</div>,
    document.getElementById('modal')!
    
  )
}

export default Modal