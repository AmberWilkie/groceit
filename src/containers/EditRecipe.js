import React from 'react'
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FullList from '../components/FullList'

class EditRecipe extends React.Component {

  render () {
    const thisRecipe = this.props.recipes.find( (recipe) => {
      return recipe.id === parseInt(this.props.match.params.recipeId)
    })

    return (
      <div>
        <h2>{thisRecipe.name}</h2>
        <FullList items={thisRecipe.items} removeItem={this.props.actions.removeRecipeItem}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)
