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






let findCardsWithBigValue = cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9'));
console.log(findCardsWithBigValue);

/*------------------метод из решения дз не сработал, смог отсортировать только по тупому через slice-----------------*/


let findCardsAfterSix = cards.slice( -5);
console.log(findCardsAfterSix);