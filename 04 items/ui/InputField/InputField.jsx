'use client';

import { useEffect, useState } from 'react'
import styles from './InputField.module.css'

const InputField = ({ placeholder, classNames, onBlurCallback, value }) => {
	const [inputTitle, setInputTitle] = useState('');

	useEffect(() => {
		setInputTitle(value);
	}, [value]);

	const titleChangeHandler = event => {
		setInputTitle(event.target.value);
	};
	const inputBlurHandler = () => {
		onBlurCallback({
			title: inputTitle,
		});
	};

	return (
		<input
			placeholder={placeholder}
			className={`${styles.InputField} ${classNames} `}
			onChange={titleChangeHandler}
			value={inputTitle}
			onBlur={inputBlurHandler}
		/>
	);
};

export default InputField;
