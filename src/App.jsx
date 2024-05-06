import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';

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
