import React from 'react';
import Dashboard from './dashboard/page';
import Footer from '../components/footer';
import { fetchData } from '../db/firebaseAdmin';



const app = async () => {

  const data = await fetchData('health'); 

  return (
      <main>
        <Dashboard data ={data}/>
        <Footer/>
      </main>
  );
}

export default app;
