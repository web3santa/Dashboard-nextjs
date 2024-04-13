import React from "react";

const index = () => {
  return (
    <div className="container">
      <p>Health</p>
      <div className="m-4 grid gap-2 sm:grid-cols-2">
        <div className="min-h-[120px] rounded-lg bg-orange-500 shadow">
          <p>WETH/USDB</p>
        </div>
        <div className="min-h-[120px] rounded-lg bg-teal-500 shadow">
          <p>WETH/ETH</p>
        </div>
      </div>

      <p>Blast Points</p>
      <div className="m-2 grid gap-2 sm:grid-cols-3">
        <div className="min-h-[70px] rounded-lg bg-orange-500 shadow">
          <p>Total Blast Points</p>
        </div>
        <div className="min-h-[70px] rounded-lg bg-teal-500 shadow">
          <p>Blast Poitns Received</p>
        </div>
        <div className="min-h-[70px] rounded-lg bg-teal-500 shadow">
          <p>Blast Points Pending</p>
        </div>
      </div>

      <p>My dashboard</p>
      <div className="m-4 grid gap-2 sm:grid-cols-2">
        <div className="min-h-[200px] rounded-lg bg-orange-500 shadow">
          <p>Supply Overview</p>
          <div className="m-2 grid gap-2 sm:grid-cols-2">
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
          </div>
        </div>
        <div className="min-h-[200px] rounded-lg bg-teal-500 shadow">
          <p>Borrow Overview</p>
          <div className="m-2 grid gap-2 sm:grid-cols-2">
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
            <div className="min-h-[50px] rounded-sm bg-gray-300 shadow"></div>
          </div>
        </div>
      </div>

      <p>Vault Positions</p>
      <div className="m-2 grid gap-2 sm:grid-cols-1">
        <div className="min-h-[70px] rounded-lg bg-orange-500 shadow">
          <p>Total Blast Points</p>
        </div>
      </div>
    </div>
  );
};

export default index;
