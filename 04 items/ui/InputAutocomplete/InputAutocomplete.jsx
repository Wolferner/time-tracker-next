import { useState } from 'react';
import styles from './InputAutocomplete.module.css';

const InputAutocomplete = ({
	placeholder = 'Your Text',
	classNames,
	onBlurCallback,
	array,
	value,
	type = 'text',
}) => {
	const [inputState, setInputState] = useState('');
	const [matchValues, setMatchValues] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	const sendInputDataHandler = () => {
		onBlurCallback(inputState);
	};

	const searchMatches = text => {
		if (!text) {
			setMatchValues([]);
			setIsVisible(false);
		}
		let match = array.filter(item => {
			return item.toLowerCase().includes(text.toLowerCase());
		});
		setMatchValues(match);
		setIsVisible(true);
	};

	const changeInputValueHandler = field => {
		setInputState(field);
		onBlurCallback(inputState);
		setIsVisible(false);
	};

	return (
		<>
			<form>
				<input
					onChange={e => searchMatches(e.target.value)}
					onBlur={sendInputDataHandler}
					className={` ${classNames}  ${styles.InputAutocomplete}`}
					placeholder={`${placeholder}`}
					value={value}
					type={type}
				/>

				<ul className={isVisible ? styles.visible : styles.invisible}>
					{matchValues &&
						matchValues.map(field => (
							<li key={field} onClick={() => changeInputValueHandler(field)}>
								{field}
							</li>
						))}
				</ul>
			</form>
		</>
	);
};

export default InputAutocomplete;
