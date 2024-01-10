import React from "react";
import Stats from "../components/stats";
import Table from "../components/table";
import Nav from "../components/nav";
import Container from "../components/container";

const Dashboard = () => {
  return (
    <div className="theme-controller p-5">
      <Nav />
      <Stats />
      <div className="flex gap-5 m-5">
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
      <Container />

      <Table />
    </div>
  );
};

export default Dashboard;
