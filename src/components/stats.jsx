import "server-only";
import React from 'react';

export async function getServerSideProps(context) {
  await initAdmin();

  const data = await fetchData('health');

  return { props: { data } };
}

const Stats = ({data}) => {
  return (
    <div className="flex flex-wrap justify-around shadow-xl">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="stat">
          <div className="stat-figure text-primary">
            
            
          </div>
          <div className="stat-title">Heart Rate</div>
          <div className="stat-value text-primary">{data[0].bloodPressure}</div>
          <div className="stat-desc">Under Control</div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Glucose</div>
          <div className="stat-value text-secondary">{data[0].heartRate}</div>
          <div className="stat-desc">Good</div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online"></div>
          </div>
          <div className="stat-value">Temperature</div>
          <div className="stat-title">{data[0].glucoseValue}</div>
          <div className="stat-desc text-secondary">not high</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
