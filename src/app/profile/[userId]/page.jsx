'use client';
import { useState } from 'react';
import Head from 'next/head'

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically update the user data in your database
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>User Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Welcome, Ahmed
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">your Information</h3>
            {isEditing ? (
              <div>
                <label>Name:</label>
                <input type="text" placeholder="Edit your name" className="input input-bordered input-info w-full max-w-xs" value={name} onChange={(e) => setName(e.target.value)}/>

             
                <label>Email:</label>
                <input type="text" placeholder="Edit your email" className="input input-bordered input-info w-full max-w-xs" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                <p className="mt-4 text-xl">
                  Name: {name}
                </p>
                <p className="mt-4 text-xl">
                  Email: {email}
                </p>
                <button onClick={handleEdit}>Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
