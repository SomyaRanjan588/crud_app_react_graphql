import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_LIST } from "../graphql/queries";
import { GET_USER_DELETE } from "../graphql/mutation";
import "../style/homepage.css";

import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Homepage() {
  // This function will called only once
  useEffect(() => {
    refetch();
  }, []);

  const { data, refetch } = useQuery(GET_USER_LIST);
  const [DeleteUser] = useMutation(GET_USER_DELETE);

  return (
    <div>
      <div className="postdiv">
        <Link to={"/addpost"} className="addyourpost">
          <p>Add your post</p>
        </Link>
      </div>
      <div className="maindiv">
        <div className="headertrclass">
          <div className="id">id</div>
          <div className="name">Name</div>
          <div className="email">Email</div>
          <div className="password">Password</div>
          <div className="status">Status</div>
          <div className="action">Action</div>
        </div>
        <div>
          {data ? (
            data.userList.map((item) => (
              <div key={item.id} className="headerdataclass">
                <h1 className="id">{item.id}</h1>
                <h1 className="name">{item.name}</h1>
                <h1 className="email">{item.email}</h1>
                <h2 className="passwordh2">{item.password}</h2>
                <h2 className="statush2">{item.status}</h2>
                <span>
                  <p
                    onClick={() => {
                      DeleteUser({ variables: { id: item.id } });
                      swal("Success", "Data Deleted Sucessfully", "success");
                      refetch();
                    }}
                  >
                    Delete
                  </p>
                  <Link to={"/update/" + item.id} className="updatelink">
                    <p className="update">Update</p>
                  </Link>
                </span>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
