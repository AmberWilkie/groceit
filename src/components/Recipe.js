import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {

  const handleEditRecipe = () => {
    props.editRecipe(props.id)
  }

  return (
    <li className="list-group-item">
      {props.quantity > 1 && props.quantity} {props.name}
      <Link to={'/editrecipe/' + props.id}>
        <span className='badge'>Edit</span>
      </Link>
    </li>
  )
}

export default Recipe