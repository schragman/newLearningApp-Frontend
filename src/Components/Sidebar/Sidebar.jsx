import React from 'react';
import {TOPICS} from "../../Samples/topics";
import SidebarItem from "./SidebarItem";

function Sidebar() {



  return (
    <div className="col-md-3">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ height: '100vh' }}>
        <ul className="nav nav-pills flex-column mb-auto">
          {/*<li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">Dashboard</a>
          </li>*/}
          {TOPICS.map((nav_item) =>
            <SidebarItem key={nav_item.name} {...nav_item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
