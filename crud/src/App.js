import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Adddata from "./Components/Adddata";
import { createContext, useReducer, useState } from "react";
import EditData from "./Components/EditData";
export const MyContext = createContext(null);

function App() {
  const [data, setData] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDDATA":
        return setData([...data, { ...action.payload }]);
      case "DELETEDATA":
        return setData(data.filter((ele) => ele.phone !== action.payload));
      case "EDITDATA":
        const newData = data.map((value,index)=>{
          if(value.id==action.payload.editdata.id){
            return action.payload.editdata
          }
          else{
            return value
          }
        })
         return  setData(newData)
      default:
        return state;
    }
  };

  const [first, Dispatch] = useReducer(reducer, []);
  function AddeditedData (editdata,olddata){
    Dispatch({type:"EDITDATA",payload:{editdata,olddata}})
  }
  function AddData(newEmp) {
    Dispatch({ type: "ADDDATA", payload: newEmp});
  }
  function deleteData(id) {
    Dispatch({ type: "DELETEDATA", payload: id });
  }
  return (
    <div className="App">
      <MyContext.Provider value={{ data, AddData, deleteData , AddeditedData}}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-new-employee" element={<Adddata />} />
            <Route path="/edit-data" element={<EditData />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
