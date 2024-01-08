'use client';

import { useEffect, useState } from 'react';
import styles from './InfoBlock.module.css';

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import IncidentTracker from '../IncidentTracker/IncidentTracker';
import ProjectTracker from '../ProjectTracker/ProjectTracker';

const InfoBlock = ({ value, onBlurCallback }) => {
	// console.log("infoBlock render");
	const initialState = {
		customer: '',
		project: '',
		inc: '',
		incTitle: '',
		incDescription: '',
		businessName: '',
		businessSurename: '',
		businessEmail: '',
		supportName: '',
		supportSurename: '',
		supportEmail: '',
		rfc: '',
		crq: '',
		charm: '',
		tags: [],
	};
	const [isHiden, setIsHiden] = useState(false);
	const [infoBlockData, setInfoBlockData] = useState(initialState);

	useEffect(() => {
		setInfoBlockData({
			client: value.customer,
			project: value.project,
			sub_project: value.sub_project,
			inc: value.inc,
			tags: value.tags,
			incTitle: value.incTitle,
			incDescription: value.incDescription,
			businessName: value.businessName,
			businessSurename: value.businessSurename,
			businessEmail: value.businessEmail,
			supportName: value.supportName,
			supportSurename: value.supportSurename,
			supportEmail: value.supportEmail,
			rfc: value.rfc,
			crq: value.crq,
			charm: value.charm,
		});
	}, [value]);

	const showStateHandler = event => {
		event.preventDefault();
		setIsHiden(!isHiden);
	};
	//FIXME: nado perepisatj chtobi pravelno podhvativalisj tagi
	const inputChangeHander = value => {
		setInfoBlockData(prev => ({ ...prev, ...value }));
	};

	const formBlurHandler = () => {
		onBlurCallback(infoBlockData);
	};

	return (
		<div className={`${styles.InfoBlock} row`}>
			<a onClick={showStateHandler}>
				<h6>Additional Info</h6>
				<SettingsApplicationsIcon />
			</a>

			{!isHiden && (
				<div
					onBlur={formBlurHandler}
					className={`${styles.formCont} col s12 m6`}
				>
					<ProjectTracker
						onBlurCallback={inputChangeHander}
						value={infoBlockData}
					/>
					<IncidentTracker
						onBlurCallback={inputChangeHander}
						value={infoBlockData}
					/>
					<div>
						<Autocomplete
							onChange={(e, allTags) => inputChangeHander('tags', allTags)}
							value={infoBlockData.tags}
							multiple
							id='tags-filled'
							options={top100Films.map(option => option.title)}
							defaultValue={[top100Films[0].title]}
							freeSolo
							renderTags={(value, getTagProps) =>
								value.map((option, index) => (
									<Chip
										key={index}
										variant='outlined'
										label={option}
										{...getTagProps({ index })}
									/>
								))
							}
							renderInput={params => (
								<TextField
									{...params}
									variant='filled'
									label='Your Tags'
									placeholder=''
								/>
							)}
						/>
						{/* <Autocomplete
              onChange={(e, allTags) => inputChangeHander("tags", allTags)}
              value={infoBlockData.tags}
              multiple
              id="tags-outlined"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              defaultValue={[top100Films[0]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Your Tags" placeholder="" />
              )}
            /> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default InfoBlock;

const top100Films = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
];
