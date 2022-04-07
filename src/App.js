import { useRef } from "react";
import { useCustomContext } from "./context/MyContext";

function App() {
  const inpt = useRef();
  const inpt2 = useRef();
  const inpt3 = useRef();

  const { name, setName,name_1,setName_1,name_2, setName_2 } = useCustomContext();


  const inputHandler = () => {
    setName(inpt.current.value)
    setName_1(inpt2.current.value)
    setName_2(inpt3.current.value)
    console.log(inpt,setName)
  };
  // const inputHandler2 = () => {
  //   setUsername(inpt.current.value);
  //   console.log(btn.current);
  //   btn.current.className = "Username";
  // };
  // const inputHandler3 = () => {
  //   setPassword(inpt.current.value);
  //   console.log(btn.current);
  //   btn.current.className = "Password";
  // };

  return(
    <div className="App">
      <input ref={inpt} type="text" placeholder="Name"/>
      <input ref={inpt2} type="text" placeholder="Username"/>
      <input ref={inpt3} type="password" placeholder="Password"/>
      <button onClick ={inputHandler}>Submit</button>
      <h1>{name}<br/>{name_1}<br/>{name_2}</h1>
    </div>
  ) 
}
// ref={btn} 
// setName(inpt.current.value);
// console.log(btn.current);
// btn.current.className = "Name";

export default App;
