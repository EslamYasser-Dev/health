import React from "react";


const Stats = ({data}) => {

  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Heart Rate</div>

          <div className="stat-value text-primary">{data?.heartrates}</div>

          <div className="stat-desc">Under Control </div>
        </div>

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
          <div className="stat-value text-secondary">{data?.Glucose}</div>
          <div className="stat-desc">Good</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online"></div>
          </div>
          <div className="stat-value">Temprature</div>
          <div className="stat-title">{data?.temprature} C</div>
          <div className="stat-desc text-secondary">not high</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
