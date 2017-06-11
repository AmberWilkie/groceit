import React from 'react';
import ListItem from './ListItem';

const FullList = (props) => {
  console.log(props.items);
  const itemMap = props.items.map( (item) => {
    return <ListItem key={item.id} name={item.name}/>
  })

  return (
    <ul className='list-group'>
      {itemMap}
    </ul>
  )
}

export default FullList;