/**
 * Created by hoangnd on 9/11/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class FoodList extends Component {
    createFoodListItems() {
        let listItems = this.props.foods.map(
            (eachFood) => {
                return (
                    <li key={eachFood.id}>Food's name: {eachFood.name}</li>
                );
            }
        );
        return listItems;
    }
    render() {
        return (
            <ul>
                {this.createFoodListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        foods: state.foods
    };
}

// container components to connect the presentational components to Redux
let FoodContainer = connect(mapStateToProps)(FoodList);
export default FoodContainer;