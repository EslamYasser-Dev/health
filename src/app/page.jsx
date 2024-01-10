// pages/Home.js
import React from 'react';
import Dashboard from './pages/dashboard/page';
import Footer from './components/footer';
import { fetchData } from '../db/firebaseAdmin';


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
