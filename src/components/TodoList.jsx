import React from "react";


const TodoList = ({ btnAdd, handleCheckBox, handleDelete }) => {
	return (
		<ul>
			{btnAdd.map(function (elem,index) {
				return (
					<li key={index}>
						<input onClick={handleCheckBox} type="checkbox" />
						<span>{elem}</span>
						<button onClick={handleDelete}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export {TodoList}