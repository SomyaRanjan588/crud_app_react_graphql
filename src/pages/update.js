import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { USER_UPDATE } from "../graphql/mutation";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../style/update.css";

function Update() {
  let navigate = useNavigate();
  const params = useParams();
  let x = params.id;
  let y = parseInt(x);

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    nameerror: "",
  });
  const [options, setOptions] = useState();
  const SelectOptions = (e) => {
    setOptions(e.target.value);
  };
  console.log(options);

  console.log(value);
  const handleInput = (e) => {
    e.persist();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const [updateProduct, { error }] = useMutation(USER_UPDATE);
  return (
    <div>
      <h1 className="dataupdatetext">Update Your Data</h1>
      <div className="updateinnerdiv">
        <p>Name :</p>

        <input
          type="text"
          name="name"
          placeholder="name..."
          onChange={handleInput}
          className="updateinputs"
          required
        />
        <br></br>
        <p>{value.nameerror}</p>
        <p>Email :</p>

        <input
          type="text"
          name="email"
          placeholder="email..."
          onChange={handleInput}
          className="updateinputs"
          required
        />
        <br></br>
        <p>Password :</p>

        <input
          type="password"
          name="password"
          placeholder="New Password..."
          onChange={handleInput}
          className="updateinputs"
          required
        />
        <br></br>
        <p>Status :</p>

        <select
          value={options}
          onChange={SelectOptions}
          className="updateinputs"
        >
          <option className="optionclass">1</option>
          <option className="optionclass">0</option>
        </select>
        <br></br>
        <button
          type="submit"
          onClick={() => {
            updateProduct({
              variables: {
                id: y,
                name: value.name,
                email: value.email,
                password: value.password,
                status: options,
              },
            });
            swal("Success", "Data Updated Sucessfully", "success");
            navigate("/");
          }}
          className="submit"
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Update;
