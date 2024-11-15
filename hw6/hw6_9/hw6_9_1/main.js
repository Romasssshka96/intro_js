let cards = [];


let cardSuits = [ 'spade', 'diamond','heart', 'clubs'];
let values = ['6', '7', '8', '9' ,'10', 'jack', 'queen', 'king', 'ace'];

for (let suit of cardSuits){
    for (let value of values){
        const card = {cardSuit: suit, value: value };

        if (suit === 'diamond' || suit === 'heart'){
            card.color ='red'
        }
        else{
            card.color = 'black'
        }
        cards.push(card);
    }
}




let findAceSpade = cards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log(findAceSpade)
