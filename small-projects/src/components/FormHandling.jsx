import { useState } from "react";

export default function FormHandling(){
//     const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`)
//   }

//   return (
//     <>
//     <p>{name}</p>
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//     </>
//   )

const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = (event) => {
  event.preventDefault();
  alert(inputs);
}

return (
    <>
    <p>name:{inputs.username|| ''} age: {inputs.age || 0}</p>
  <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
    />
    </label>
    <label>Enter your age:
      <input 
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
  </form>
    </>
)
}