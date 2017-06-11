import React from 'react';

const ListItem = (item) => {
  return (
      <li className="list-group-item">
        {item.quantity > 1 && item.quantity} {item.name}
      </li>
    )
}

export default ListItem;