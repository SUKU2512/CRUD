import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="left">
        <h1
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Manage Employees
        </h1>
      </div>
      <div className="right">
        <button
          className="add"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/add-new-employee");
          }}
        >
          Add New Employees
        </button>
      </div>
    </div>
  );
};

export default Nav;
