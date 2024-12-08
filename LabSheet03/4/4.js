import React from 'react';
import CardList from './CardList';

const cardData = [
  {title: 'Card 1', content: 'This is the content of card 1'},
  {title: 'Card 2', content: 'This is the content of card 2'},
  {title: 'Card 3', content: 'This is the content of card 3'}
];

function App() {
    return (
      <div>
        <CardList cards = {cardData}/>
      </div>
    );
}

export default App;