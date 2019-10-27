import React from 'react';
import List from './KanbanList';

function KanbanBoard(props) {
	return <div className="board columns">
		<List id="todo" title="To do" cards={props.cards.filter((card) => {
			return card.status === 'todo';
		})} />
		<List id="in-progress" title="In progress" cards={props.cards.filter((card) => {
			return card.status === 'in-progress';
		})} />
		<List id="done" title="Done" cards={props.cards.filter((card) => {
			return card.status === 'done';
		})} />
	</div>;
}

export default KanbanBoard;