import React from 'react';

import Menu from './components/-Menu';

let items = [
  {"href": "/", "title": "Home"},
  {"href": "/about", "title": "About"},
  {"href": "/contacts", "title": "Contacts"},
];


function App() {
  return (
    <div className="App">
      <Menu items={items} nameMenu="Основное меню" >Lorem ipsum dolor sit.</Menu>
    </div>
  );
}

export default App;
