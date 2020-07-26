import React, {Component} from 'react';
import axios from 'axios';
import Card from "./Card";
import './deck.css'
const BASE_API=`https://deckofcardsapi.com/api/deck`;
class Deck extends Component {
    constructor(props) {
        super(props);
        this.state={
            deck:null,
            drawn:[]
        }
        this.handleClick=this.handleClick.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${BASE_API}/new/shuffle/?deck_count=1`);
        this.setState({deck:deck.data});

    }
    async handleClick(){
        try
        {
            let url=`${BASE_API}/${this.state.deck.deck_id}/draw/?count=1`
            let DrawCard=(await axios.get(url));
            if(!DrawCard.data.success)
                throw new Error('NO CARD REMAINING ');
            console.log(DrawCard.data)
            let Card=DrawCard.data.cards[0];
            // this.setState((st)=>{
            //     let drawn:[...st.drawn,];
            //     return drawn;
            //
            //     )});
            this.setState(st=>({drawn:[...st.drawn,{id:Card.code,image:Card.image,name:`${Card.suit} of ${Card.value}`}]}))
        }
        catch (e) {
            alert(e);

        }


    }
    render() {
        const MyCards=this.state.drawn.map(c=>(<Card name={c.name} image={c.image} key={c.id}/>))
        return (
            <div>
                <div className="Controller">
                    <h1>Card Dealer</h1>
                    <button ClassName="CardBtn" onClick={this.handleClick}> Get Card</button>
                </div>

                <div className="Card-Area">{MyCards}</div>
            </div>
        );
    }
}

export default Deck;