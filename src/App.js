import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './features/header/Header';
import SearchFrame from './features/searchFrame/SearchFrame';

function App() {
  return (
    <div className="App">
        {/* <Counter /> */}
        {/* <h1>Welcome To HubLocker!!!</h1> */}
        <Header/>
        <SearchFrame />
    </div>
  );
}

export default App;
