
 import React from 'react';
import './App.css';  


import Guests from './guests/Guests';

class App extends React.Component {
  render = () => {
    return (
      <main className="box">
        <div className="box__guest">
          <h1>Список гостей</h1>
          <Guests />
        </div>
      </main>
    );
  }
}

export default App;
