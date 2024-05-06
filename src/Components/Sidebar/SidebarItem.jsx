import "./Sidebar.css"
import {FaCaretDown, FaCaretRight} from "react-icons/fa";

function getCaret(open, content) {
  if (content) {
    if (open) {
      return <FaCaretDown/>;
    } else {
      return <FaCaretRight/>
    }
  } else {
    return ''
  }
}
export default function SidebarItem({onSelect, name, type, open, content}) {

  return (
    <li>
      <button onClick={onSelect}>
        {getCaret(open, content)} {name}
      </button>
      <ul >
      {
        (content && open) ?
          content.map((navSubItem) =>
            <SidebarItem key={navSubItem.name} {...navSubItem} />)
        :
          ''
      }
      </ul>
    </li>
  )
};