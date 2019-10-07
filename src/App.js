import React from 'react';
import './app.css';
import STORE from './store';
import List from './list';

function App(props) {
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {STORE.lists.map(list => 
        <List
        key={list.id}
        header={list.header}
        card={list.cardIds.map(id =>
          STORE.allCards[id]
          )}/>
      )}
    </div>
      
    </main>
  );
}

export default App;
