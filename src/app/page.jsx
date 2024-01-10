// pages/Home.js
import React from 'react';
import Dashboard from '../app/home/page';
import Footer from '../app/components/footer';
import { fetchData } from '../app/db/firebaseAdmin';


  const data = await fetchData('health'); 

const Home = (data) => {
  return (
      <main>
        <Dashboard/>
        <Footer/>
      </main>
  );
}

export default Home;
