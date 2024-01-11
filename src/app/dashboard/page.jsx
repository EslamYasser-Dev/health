import Stats from '../../components/stats';
import Table from "../../components/table";
import Nav from "../../components/nav";
import Container from "../../components/container";
// import { getServerSideProps } from 'next/dist/build/templates/pages';

import "server-only";

const Dashboard = ({data}) => {

  return (
    <div className="theme-controller p-5">
      <Stats data={data}/> 
      <div className="flex gap-1/5 m-1/3">
        <Container />
      
       
        <Container />
      </div>
     

      <Table />
    </div>
  );
};

export default Dashboard;
