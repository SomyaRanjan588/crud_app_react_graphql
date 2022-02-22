import React,{useEffect} from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "../graphql/queries";

function Homepage1() {
  useEffect(() => {
    refetch();
  },);
  const { data, refetch } = useQuery(GET_USER_LIST);
  console.log(data);
  return (
    <div>
      homepage1
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}

export default Homepage1;
