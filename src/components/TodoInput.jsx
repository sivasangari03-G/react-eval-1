import React from "react";
import styles from "./TodoInput.module.css";
const TodoInput = ({ value, onChange }) => {
	return <input className={styles.bc}  type="text" value={value} onChange={onChange} />;
};

export {TodoInput}