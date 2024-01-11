import React from 'react';
import Dashboard from './dashboard/page';
import Footer from '../components/footer';
import { fetchData, initAdmin } from '../db/firebaseAdmin';
import Nav from '@/components/nav';



const app = async () => {
  await initAdmin();
  const data = await fetchData('health'); 

  return (
      <main>
      
        <Dashboard data ={data}/>
        
      </main>
  );
}

export default app;
