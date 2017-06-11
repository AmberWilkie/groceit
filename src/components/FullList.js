import React from 'react';
import ListItem from './ListItem';

const FullList = (props) => {
  const itemMap = props.items.map( (item) => {
    return <ListItem key={item.id} {...item}/>
  })

  return (
    <ul className='list-group'>
      {itemMap}
    </ul>
  )
}

export default FullList;