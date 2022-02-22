import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import Homepage from "./pages/homepage";
import Homepage1 from "./pages/homepage1";
import { Routes, Route, Router } from "react-router-dom";
import Update from "./pages/update";
import Addpost from "./pages/addpost";

function App() {
  // const client = new ApolloClient({
  //   uri: "http://localhost:5000/graphql",
  //   cache: new InMemoryCache(),
  // });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage1 />} />
          
        <Route path="/update/:id" element={<Update />} />
        <Route path="/addpost" element={<Addpost />} />
      </Routes>
    </div>
  );
}

export default App;
