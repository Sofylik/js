
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

console.log('First exircise')

for (let i = 0; i < friends.length; i++) {
    if (i > 0) {
        string += ', ';
    }
    string += friends[i];
}
console.log(string);


console.log('Second exircise')
string = friends.join(', ')
console.log(string)


console.log('Third exircise')

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
]


console.log('Fourth exircise')

const cardToRemove = cards.splice(2, 1)
console.log(cards)


console.log('Fifth exircise')

const cardToInsert = cards.push('Карточка-6')
console.log(cards)


console.log('Sixth exircise')

const cardToUpdate = 'Карточка-4';
const updatedCard = 'New Карточка-4';

const indexForUpdate = cards.indexOf(cardToUpdate);
if (indexForUpdate !== -1) {
    cards[indexForUpdate] = updatedCard;
}