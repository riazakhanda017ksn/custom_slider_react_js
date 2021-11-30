import React from "react";
import userDetails from "../fakedata";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleUserDetails = () => {
  const { id } = useParams();

  const findResult = userDetails.find((userDetails) => userDetails.id === id);

  return (
    <div>
      <h1>{findResult?.name}</h1>
    </div>
  );
};

export default SingleUserDetails;
