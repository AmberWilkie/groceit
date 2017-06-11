import React from 'react'
import ListItem from './ListItem'

const FullList = (props) => {
  const itemMap = props.items.map((item) => {
    // Note the easiest way to group things by category may be a lodash method
    // https://stackoverflow.com/questions/40774697/how-to-group-array-of-objects-by-key
    return <ListItem key={item.id} {...item} removeItem={props.removeItem}/>
  })

  return (
    <ul className='list-group'>
      {itemMap}
    </ul>
  )
}

export default FullList