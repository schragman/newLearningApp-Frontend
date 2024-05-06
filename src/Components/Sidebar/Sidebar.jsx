import React from 'react';
import {TOPICS_S} from "../../Samples/topics_simple";
import {TOPICS} from "../../Samples/topics";
import SidebarItem from "./SidebarItem";
import {useState} from "react";

function Sidebar() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(navItem) {
    console.log(navItem.name + " is selected!")
    console.log("navItem.open ist vorher " + navItem.open)
    navItem.open = !navItem.open;
    console.log("navItem.open ist jetzt " + navItem.open)
    setSelectedTopic(navItem, navItem.open);
  }

  return (
    <div className="col-md-3">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ height: '100vh' }}>
        <ul className="nav nav-pills flex-column mb-auto">
          {/*<li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">Dashboard</a>
          </li>*/}
          {TOPICS.map((nav_item) =>
            <SidebarItem key={nav_item.name} onSelect={() => handleSelect(nav_item)}{...nav_item}/>)}

          <li>
            <a href="#" className="nav-link text-white">{TOPICS_S[0].name}</a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">{TOPICS_S[1].name}</a>
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
