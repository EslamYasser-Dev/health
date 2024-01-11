import React from "react";

const Container = ({props}) => {
  return (
 
      <div className="card w-1/2 glass m-5">
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">refresh</button>
          </div>
        </div>
      </div>

  );
};

export default Container;
