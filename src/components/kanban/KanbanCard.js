import React, { useState } from 'react';
import CheckList from './KanbanCheckList';

function KanbanCard(props) {
	const [details, showDetails] = useState(true);

	let cardDetails;
	if(details) {
		cardDetails = (
			<>
				<div className="card__details has-margin-bottom-1">{props.desc}</div>
				<CheckList cardId={props.id} tasks={props.tasks} />
			</>
		);
	}


	function toggleDetails() {
			showDetails(!details);
			console.log({details});
	}


	return <div className="kanban-card notification">
		{/* <div className="card__title" onClick={() => {
			// details ? showDetails(false) : showDetails(true);
			showDetails(!details);
		}}>{props.title}</div> */}

		<div className="card__title" onClick={toggleDetails}>{props.title}</div>
		{cardDetails}
	</div>;
}

export default KanbanCard;