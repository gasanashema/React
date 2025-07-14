 import Header from "./components/Header";
 function App(){
  return (
    <>
     <Header />
      <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        {console.log(<h1>Hello world!</h1>)}
    </>
  )
 }

 export default App;
 