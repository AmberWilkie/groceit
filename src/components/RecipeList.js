import React from 'react'
import Recipe from '../components/Recipe'

const RecipeList = (props) => {
  const recipeMap = props.recipes.map((item) => {
    // Note the easiest way to group things by category may be a lodash method
    // https://stackoverflow.com/questions/40774697/how-to-group-array-of-objects-by-key
    return <Recipe key={item.id} {...item} editRecipe={props.editRecipe}/>
  })

  return (
    <ul className='list-group'>
      {recipeMap}
    </ul>
  )
}

export default RecipeList;