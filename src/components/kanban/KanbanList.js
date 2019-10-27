import React from 'react';
import Card from './KanbanCard';

function KanbanList(props) {
	let cards = props.cards.map((card, index) => {
		return <Card
			id={card.id}
			title={card.title}
			desc={card.desc}
			tasks={card.tasks}
			key={index}
		/>;
	})
	return <div className="board-list column">
		<h1 className="title">{props.title}</h1>
		{cards}

	</div>;
}

export default KanbanList;