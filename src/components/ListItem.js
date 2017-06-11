import React from 'react';

const ListItem = (item) => {
  console.log(item);
  return (
      <li className="list-group-item">{item.name}</li>
    )
}

export default ListItem;