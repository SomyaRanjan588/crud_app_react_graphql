import React, { useState } from "react";
import "../style/update.css";
import { useMutation } from "@apollo/client";
import { USER_CREATE } from "../graphql/mutation";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Addpost() {
  let navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [options, setOptions] = useState();
  const SelectOptions = (e) => {
    setOptions(e.target.value);
  };

  const handleInput = (e) => {
    e.persist();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const [createUser, { error }] = useMutation(USER_CREATE);
  return (
    <div>
      <h1 className="dataupdatetext">Add Your Data</h1>
      <form>
        <div className="updateinnerdiv">
          <p>Name :</p>

          <input
            type="text"
            name="name"
            placeholder="name..."
            className="updateinputs"
            required
            onChange={handleInput}
          />
          <br></br>

          <p>Email :</p>

          <input
            type="text"
            name="email"
            placeholder="email..."
            className="updateinputs"
            required
            onChange={handleInput}
          />
          <br></br>
          <p>Password :</p>

          <input
            type="password"
            name="password"
            placeholder="New Password..."
            className="updateinputs"
            required
            onChange={handleInput}
          />
          <br></br>
          <p>Status :</p>

          <select
            className="updateinputs"
            value={options}
            onChange={SelectOptions}
          >
            <option className="optionclass">1</option>
            <option className="optionclass">0</option>
          </select>
          <br></br>
          <button
            type="button"
            className="submit"
            onClick={() => {
              createUser({
                variables: {
                  name: value.name,
                  email: value.email,
                  password: value.password,
                  status: options,
                },
              });
              swal("Success", "Data Added Sucessfully", "success");
              navigate("/");
            }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addpost;
