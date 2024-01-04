'use client';

import { useEffect, useState } from 'react';
import style from './Toggler.module.css';

const Toggler = ({ getTogglerState }) => {
	//FIXME: Nado Ispravitj useState(false)
	const [isToggled, setIsToggled] = useState(true);

	useEffect(() => {
		getTogglerState(isToggled);
	}, [isToggled]);

	const clickHandler = event => {
		event.preventDefault();
		setIsToggled(prev => !prev);
	};

	return (
		<>
			<button
				className={`${style.toggle_btn} ${isToggled ? style.toggled : ''}`}
				onClick={clickHandler}
			>
				<div className='thumb'></div>
			</button>
		</>
	);
};

export default Toggler;
