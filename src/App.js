import React from 'react';

import KanbanBoard from './components/kanban/KanbanBoard'; 


function App() {
  let cardList = [
    {
      id: 1,
      title: 'Изучить документацию по React',
      desc: 'Изучить документацию по React v16',
      status: 'in-progress',
      tasks: []
    },
    {
      id: 2,
      title: 'Написать приложение на React',
      desc: 'Написать приложение Kanban Board',
      status: 'todo',
      tasks: [
        {
          id: 1,
          name: 'Изучить базовый синтаксис',
          done: true
        },
        {
          id: 2,
          name: 'Написать каркас приложения',
          done: false
        },
        {
          id: 3,
          name: 'Доработать приложение',
          done: false
        },
      ]
    },
    {
      id: 3,
      title: 'Создать проект',
      desc: 'Создать проект по видеоуроку',
      status: 'done',
      tasks: []
    },
  ];

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <KanbanBoard cards={cardList} />
        </div>
      </section>
    </div>
  );
}

export default App;
