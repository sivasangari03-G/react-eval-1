import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import styles from "./Todo.module.css"
const Todo = () => {
	const [value, setValue] = React.useState("");
	const [btnAdd, setBtnAdd] = React.useState([]);
	const handleBtn = () => {
		if (value !== "") {
			setBtnAdd([...btnAdd, value]);
			setValue("");
		}
	};
	const handleCheckBox = (e) => {
		if (e.currentTarget.checked) {
			const check = e.currentTarget.nextElementSibling;
			check.style.textDecoration = "line-through";
			check.style.color = "green";
		} else {
			const check = e.currentTarget.nextElementSibling;
			check.style.textDecoration = "none";
			check.style.color = "black";
		}
	};

	const handleDelete = (e) => {
		e.currentTarget.parentNode.remove();
	};


	return (
		<div>
			<TodoInput
				type="text"
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<button className={styles.add} onClick={handleBtn}>+</button>
			<TodoList
				btnAdd={btnAdd}
				handleCheckBox={handleCheckBox}
				handleDelete={handleDelete}
			/>
		</div>
	);
};


export { Todo };
