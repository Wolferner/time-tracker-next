'use client';

import { useEffect, useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({ placeholder, classNames, onBlurCallback, value, id }) => {
	const generateId = () => {
		return 'input-' + Math.random().toString(36).slice(2, 11);
	};

	const [inputTitle, setInputTitle] = useState('');
	const [inputId, setInputId] = useState(id);

	useEffect(() => {
		setInputTitle(value);
	}, [value]);

	useEffect(() => {
		if (!id) {
			setInputId(generateId());
		} else {
			setInputId(id);
		}
	}, [id]);

	return (
		<input
			placeholder={placeholder}
			className={`${styles.InputField} ${classNames} `}
			onChange={event => setInputTitle(event.target.value)}
			value={inputTitle}
			onBlur={() =>
				onBlurCallback({
					title: inputTitle,
				})
			}
			name={inputId}
			id={inputId}
		/>
	);
};

export default InputField;
