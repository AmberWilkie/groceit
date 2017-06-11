import React from 'react';

const ListItem = (props) => {

  const handleRemoveItem = () => {
    props.removeItem(props.id);
  }

  return (
      <li className="list-group-item">
        {props.quantity > 1 && props.quantity} {props.name}
        <span className='badge' onClick={() => handleRemoveItem()}>Remove</span>
      </li>
    )
}

export default ListItem;