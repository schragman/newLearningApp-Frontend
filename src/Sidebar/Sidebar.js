import React from 'react';

function Sidebar() {
  return (
    <div className="col-md-3">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ height: '100vh' }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">Dashboard</a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">Orders</a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">Products</a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">Customers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
