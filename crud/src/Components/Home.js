import React, { useContext } from "react";
import "./Home.css";
import { FaPencil } from "react-icons/fa6";
import { MyContext } from "../App.js";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { data, deleteData } = useContext(MyContext);
  function deldata(ele) {
    deleteData(ele.phone);
  }
  function editdata(ele) {
    navigate("/edit-data", { state: ele });
  }
  return (
    <div>
      <div className="body">
        <table>
          <tr className="tablehead">
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
          {data.map((ele) => {
            return (
              <tr>
                <td style={{ display: "flex" }}>
                  <input type="checkbox" style={{ marginRight: "20px" }} />
                  {ele.id}
                </td>
                <td>{ele.name}</td>
                <td>{ele.mail}</td>
                <td>{ele.add}</td>
                <td>{ele.phone}</td>
                <td style={{ display: "flex" }}>
                  <FaPencil
                    style={{
                      marginRight: "20px",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      editdata(ele);
                    }}
                  />
                  <MdDelete
                    style={{
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      deldata(ele);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
