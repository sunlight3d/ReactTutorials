/**
 * Created by hoangnd on 9/12/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

class FoodDetail extends Component {
    render() {
        if (!this.props.activeFood) {
            return (<h2>Select a food</h2>);
        }
        return(<div>
                <img src={this.props.activeFood.imageUrl ? 'http://' + this.props.activeFood.imageUrl : ""}
                     height={this.props.activeFood.imageUrl ? 200 : 0}
                     width={this.props.activeFood.imageUrl ? 200 : 0}/>
                <p>Name: {this.props.activeFood.name}</p>
                <p>Description: {this.props.activeFood.description}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeFood: state.activeFood
    };
}

// container components to connect the presentational components to Redux
let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);

export default FoodDetailContainer;