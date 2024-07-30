import "./Sidebar.css"
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {useState} from "react";

export default function SidebarItem({name, type, open, content}) {

  const [isOpen , setIsOpen] = useState(open);

  function handleSelect(marked) {
    console.log(name + " is selected!")
    console.log("navItem.open ist vorher " + marked)
    marked = !marked;
    console.log("navItem.open ist jetzt " + marked)
    setIsOpen(marked);
  }

  function getCaret(caretMarked, content) {
    console.log("getCaret wird wirklich durchlaufen")
    if (content) {
      if (caretMarked) {
        return <FaCaretDown/>;
      } else {
        return <FaCaretRight/>
      }
    } else {
      return ''
    }
  }
  return (
    <li>
      <button onClick={() => handleSelect(isOpen)}>
        {console.log("getCaret wird durchlaufen! Name= " + name + ", open = " + isOpen)}
        {getCaret(isOpen, content)} {name}
      </button>
      <ul >
      {
        (content && isOpen) ?
          content.map((navSubItem) =>
            <SidebarItem key={navSubItem.name} {...navSubItem} />)
        :
          ''
      }
      </ul>
    </li>
  )
};