import React from 'react';

function AddForm() {
	let optionList = ["in-progress", "to do", "done"];
	let options = optionList.map((item, index) => <option key={index}>{item}</option>);

	return <>
		<form action="#" id="add_task_form">
			<div className="field">
				<label className="label" htmlFor="">Заголовок</label>
					<input type="text" className="input" id="title" placeholder="title"/>
			</div>
			<div className="field">
				<label className="label" htmlFor="">Описане</label>
					<textarea className="textarea" id="desc"/>
			</div>
			<div className="field">
				<label className="label" htmlFor="">Список</label>
				<select name="status" id="status" className="select">
					{/* <option value="in-progress">in-progress</option>
					<option value="to-do">to do</option>
					<option value="done">done</option> */}
					{options}
				</select>
			</div>
			<button className="button is-primary">Создать</button>
		</form>
	</>;
}

export default AddForm;