'use client';

import styles from '@/03 sets/TitleDescriptionSet/TitleDescriptionSet.module.css';
import InputField from '@/04 items/ui/InputField/InputField';
import TextDescription from '@/04 items/ui/TextDescriprtion/TextDescription';
import { useEffect, useState } from 'react';

const TitleDescriptionSet = ({ onBlurCallback }) => {
	console.log('TitleDescription Render');

	const [titleDescription, setTitleDescription] = useState({
		title: '',
		description: '',
	});

	const [titleInput, setTitleInput] = useState('');
	const [descriptionInput, setDescriptionInput] = useState('');

	useEffect(() => {
		setTitleDescription(prev => {
			return { ...prev, title: titleInput, description: descriptionInput };
		});

		onBlurCallback(titleDescription);
	}, [titleInput, descriptionInput]);

	const getTitleHandler = title => {
		setTitleInput(title);
	};
	const getDescriptionHandler = description => {
		setDescriptionInput(description);
	};

	return (
		<form className={`${styles.TitleDescriptionSet} card-content white-text`}>
			<InputField placeholder='Yor Title' onBlurCallback={getTitleHandler} />
			<TextDescription
				placeholder='Your text must be here'
				onBlurCallback={getDescriptionHandler}
			/>
		</form>
	);
};

export default TitleDescriptionSet;
