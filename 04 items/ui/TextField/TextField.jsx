'use client';

import { useEffect, useState } from 'react';
import styles from './TextField.module.css';

const TextField = ({ placeholder, classNames, onBlurCallback, value }) => {
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
			className={`${styles.TextField} ${classNames} `}
			onChange={titleChangeHandler}
			value={inputTitle}
			onBlur={inputBlurHandler}
		/>
	);
};

export default TextField;
