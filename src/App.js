import { Navbar } from "./components/Navbar";
import { Expenses } from "./pages/Expenses";
import { Routes, Route } from "react-router-dom";
function App() {
  return(
    <div className="App flex">
      <Navbar/>
        <Routes>
            <Route path={'/expenses'} element={<Expenses/>}/>
        </Routes>
    </div>
  ) 
}

export default App;
