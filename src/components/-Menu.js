import React from 'react';

// export default class Menu extends React.Component 
// {
// 	render()
// 	{
// 		return <div>
// 			<h2>Menu</h2>
// 		</div>
// 	}
// }

function Menu(props) {
	
	let items = props.items.map((item, index) => {
		return <li key={item.href}><a href={item.href}>{item.title}</a></li>;
	});

	return <>
		<h2>New Menu:</h2>
		<ul>{items}</ul>
	</>
}

export default Menu;