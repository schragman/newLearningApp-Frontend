import "./Sidebar.css"
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {useState} from "react";

export default function SidebarItem({name, type, open, content}) {

  const [isOpen , setIsOpen] = useState(open);

  function handleSelect() {
    setIsOpen((opened) => !opened);
  }

  function getCaret(caretMarked, content) {
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
      <button onClick={() => handleSelect()}>
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