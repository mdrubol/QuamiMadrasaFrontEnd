import React from "react";
import Banner from "../../../components/banner/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container py-3">
        <h1 className="page-title">Home</h1>
        <p className="lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
      </div>
    </>
  );
}
