import React from 'react';

function KanbanCheckList(props) {
	let tasks = props.tasks.map((task, index) => {
		return (
			<li className="checklist__task" key={index}>
				<label>
					<input type="checkbox" defaultChecked={task.done} /> &nbsp;
					{task.name}
				</label>
			</li>
		);
	});

	return <div className="checklist">
		<ul>{tasks}</ul>
	</div>;
}

export default KanbanCheckList;