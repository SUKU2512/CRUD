import React, { useContext, useState } from "react";
import "./Adddata.css";
import { MyContext } from "../App.js";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function Adddata() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [add, setAdd] = useState();
  const [phone, setPhone] = useState();
  const [nameerr, setNameerr] = useState();
  const [mailerr, setMailerr] = useState();
  const [adderr, setAdderr] = useState();
  const [phoneerr, setPhoneerr] = useState();

  let count = 0;
  const values = useContext(MyContext);
  function datasubmit() {
    if (name) {
      if (name.length > 3) {
        if (!validator.isAlpha(name)) {
          setNameerr("Please Enter Only alpha");
        } else {
          count++;
        }
      } else {
        setNameerr("Please Enter More than 3 characters");
      }
    } else {
      setNameerr("Field is Required");
    }
    if (mail) {
      if (!validator.isEmail(mail)) {
        setMailerr("Please Enter Correct Format");
      } else {
        count++;
      }
    } else {
      setMailerr("Field is Required");
    }
    if (add) {
      if (!validator.isAlphanumeric(add)) {
        setMailerr("Please Enter Correct Format");
      } else {
        count++;
      }
    } else {
      setAdderr("Field is Required");
    }
    if (phone) {
      if (!validator.isMobilePhone(phone)) {
        setPhoneerr("Please Enter 10 Digit Number");
      } else {
        count++;
      }
    } else {
      setPhoneerr("Field is Required");
    }
    if (count == 4) {
      values.AddData({ id:(values.data.length)+1, name, mail, add, phone });
      navigate("/");
    }
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
        />
        <p className="error">{nameerr}</p>
        <h3>Email</h3>
        <input
          type="text"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <p className="error">{mailerr}</p>
        <h3>Address</h3>
        <input
          type="text"
          onChange={(e) => {
            setAdd(e.target.value);
          }}
        />
        <p className="error">{adderr}</p>
        <h3>Phone Number</h3>
        <input
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <p className="error" style={{ marginBottom: "30px" }}>
          {phoneerr}
        </p>
        <div className="btn">
          <button onClick={datasubmit} style={{ cursor: "pointer" }}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
