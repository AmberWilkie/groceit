import React from 'react'
import * as Actions from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import RecipeList from '../components/RecipeList';

class Recipes extends React.Component {
  // componentDidMount() {
  //   if (this.props.items === []) {
  //     this.props.actions.requestRecipes();
  //   }
  // }

  render () {
    console.log('Recipes: ', this.props.recipes);
    return (
      <RecipeList recipes={this.props.recipes} editRecipe={this.props.actions.editRecipe}/>
    )
  }
}
function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
