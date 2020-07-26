import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        let angle=Math.floor(Math.random()*90-45);
        let x=Math.random()*40-20;
        let y=Math.random()*40-20;
        this._transform =`translate(${x}px,${y}px) rotate(${angle}deg)`;

    }
    render() {
        //transfor:translate(10px.30px) rotate(56deg)


        return (
            <div>
                <img style={{transform:this._transform}} className="Card" src={this.props.image} alt ={this.props.name} />
            </div>
        );
    }
}

export default Card;