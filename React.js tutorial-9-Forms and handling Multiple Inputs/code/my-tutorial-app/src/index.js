import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListItem(props) {
    return <li>{props.value}</li>;
}

class AnimalsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.listItems = props.animals.map(
            (animal, index) => <ListItem key={animal.id} value={index.toString() + "-" +animal.name} />
        );
    }
    render() {
        return (<ul>
                    {this.listItems}
                </ul>
        );
    }
}
const animals = [
                    {
                        id: "xy000",
                        name: "lion",
                        title: "This is a lion"
                    },
                    {
                        id: "xy001",
                        name: "tiger",
                        title: "This is a tiger"
                    },
                    {
                        id: "xy002",
                        name: "dog",
                        title: "This is a dog"
                    },
                    {
                        id: "xy003",
                        name: "dinosaur",
                        title: "This is a dinosaur"
                    }
                ];
ReactDOM.render(
  <AnimalsComponent animals={animals} />,
  document.getElementById('root')
);
