let cards = [];


let cardSuits = [ 'spade', 'diamond', 'heart', 'clubs'];
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

console.log(cards)


let sortValues = cards.reduce((previousValue, currentValue) =>{
    if (currentValue.cardSuit === 'spade'){
        previousValue.spade.push(currentValue)
    }else if (currentValue.cardSuit === 'diamond'){
        previousValue.diamond.push(currentValue)
    }
    else if (currentValue.cardSuit === 'heart'){
        previousValue.heart.push(currentValue)
    }
    else {
        previousValue.clubs.push(currentValue)
    }

    return previousValue

}, {spade: [] ,diamond: [] ,heart: [] ,clubs: []})

console.log(sortValues)