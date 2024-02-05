import React, { useContext, useState } from "react";
import "./Adddata.css";
import { MyContext } from "../App.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Adddata() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const values = useContext(MyContext);
  const [name, setName] = useState(data.name);
  const [mail, setMail] = useState(data.mail);
  const [add, setAdd] = useState(data.add);
  const [phone, setPhone] = useState(data.phone);
  function datasubmit() {
    console.log("Edit Check--------------->",{ id:data.id ,name, mail, add, phone },data);
    values.AddeditedData({ id:data.id ,name, mail, add, phone },data);
    navigate("/");
  }
  return (
    <div className="maindiv">
      <div className="subdiv">
        <h3>Name</h3>
        <input
          autoFocus="true"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          contentEditable="true"
          value={name}
        />
        <h3>Email</h3>
        <input
          type="text"
          onChange={(e) => {
            setMail(e.target.value);
          }}
          value={mail}
        />
        <h3>Address</h3>
        <input
          type="text"
          onChange={(e) => {
            setAdd(e.target.value);
          }}
          value={add}
        />
        <h3>Phone Number</h3>
        <input
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          style={{ marginBottom: "30px" }}
        />
        <div className="btn">
          <button onClick={datasubmit} style={{cursor:"pointer"}}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
