import React, { useState, useEffect } from 'react';
import List from './KanbanList';
import KanbanAddForm from './KanbanAddForm';

function KanbanBoard(props) {
	const [cardItem, setCardItem] = useState(props);
	
	useEffect( () => {
		document.getElementById("add_task_form").addEventListener("submit", function(e){
			e.preventDefault();
			let title = document.getElementById("title").value;
			let desc = document.getElementById("desc").value;
			let statuses = document.getElementById("status");
			let status = statuses.options[statuses.selectedIndex].text;
			console.log('title=>>>', { title }, { desc}, {status}, {props}, {cardItem});
			
			cardItem.cards.push({
					id: Math.round(Math.random() * 50),
					title: title,
					desc: desc,
					status: status,
					tasks: []
			});

			setCardItem(props);
			
			console.log('cardItem', cardItem);
		}, [props]);

	});

	return <> 
	<div className="board columns">
		<List id="todo" title="To do" cards={cardItem.cards.filter((card) => {
			return card.status === 'todo';
		})} />
		<List id="in-progress" title="In progress" cards={cardItem.cards.filter((card) => {
			return card.status === 'in-progress';
		})} />
		<List id="done" title="Done" cards={cardItem.cards.filter((card) => {
			return card.status === 'done';
		})} />
	</div>
	<KanbanAddForm />
	</>
}

export default KanbanBoard;