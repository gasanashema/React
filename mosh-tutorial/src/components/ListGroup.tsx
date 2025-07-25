import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let [selectedIndex,setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index? 'list-group-item active':'list-group-item'} key={item} onClick={()=>setSelectedIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
