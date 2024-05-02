import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function App() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar />
      <div className="row">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
