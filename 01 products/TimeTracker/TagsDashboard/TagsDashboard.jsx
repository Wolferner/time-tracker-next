'use client';

import FilterComponent from '@/04 items/ui/FilterCompanent/FilterCompanent';
import InputField from '@/04 items/ui/InputField/InputField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import {
	addNewTag,
	deleteCurrentTag,
	getAllTags,
	updateCreatedTag,
} from './data/TagsDashboard.data';

const TagsDashboard = () => {
	const [searchInput, setSearchInput] = useState('');

	const [filter, setFilter] = useState('taskTags');
	const [tags, setTags] = useState([]);

	const [isShownForm, setIsShownForm] = useState(false);
	const [newTag, setNewTag] = useState({
		filterTag: 'taskTags',
		inputTag: '',
	});

	const [isEditing, setIsEditing] = useState(null);
	const [editValue, setEditValue] = useState('');

	const searchInputHandler = value => {
		setSearchInput(value.title);
	};

	const filterChangeHandler = filterValue => {
		setFilter(filterValue);
	};

	const fetchTags = async () => {
		try {
			const response = await getAllTags();
			setTags(response[filter] || []);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchTags();
	}, [filter]);

	const showFormHandler = () => {
		setIsShownForm(prev => !prev);
	};

	const newTagHandler = (value, type) => {
		switch (type) {
			case 'filterTag':
				setNewTag(prev => ({
					filterTag: value,
					inputTag: prev.inputTag,
				}));
				break;
			case 'inputTag':
				setNewTag(prev => ({
					filterTag: prev.filterTag,
					inputTag: value.title,
				}));
				break;
		}
	};

	const sendNewTagHandler = async () => {
		try {
			const tagData = {
				value: newTag.inputTag,
				type: newTag.filterTag,
			};
			await addNewTag(JSON.stringify(tagData));
		} catch (error) {
			console.log(`Problem with sending new Tag in TagsDashboard.jsx`);
		}
		fetchTags();
		setIsShownForm(prev => !prev);
		setNewTag(prev => ({
			filterTag: prev.filterTag,
			inputTag: '',
		}));
	};

	const editValueHandler = index => {
		setIsEditing(index);
		setEditValue(tags[index]);
	};

	const saveHandler = async () => {
		// const updatedTags = [...tags];
		// updatedTags[isEditing] = editValue;
		// setTags(updatedTags);
		// setIsEditing(null);
		const updatedTag = {
			filter,
			index: isEditing,
			value: editValue,
		};
		try {
			await updateCreatedTag(JSON.stringify(updatedTag));
			console.log();
			await fetchTags();
		} catch (error) {
			console.log(`problem in TagsDashboard - saveHandler - ${error}`);
		}
		setIsEditing(null);
	};

	const deleteTagHandler = async index => {
		// const updatedTags = [...tags];
		// updatedTags.slice(index, 1);
		// setTags(updatedTags);
		const tagData = {
			filter,
			index,
		};
		try {
			await deleteCurrentTag(JSON.stringify(tagData));
			await fetchTags();
		} catch (error) {
			console.log(`problem in TagsDashboard - deleteTagHandler - ${error}`);
		}
		setIsEditing(null);
	};

	return (
		<>
			<div className='row'>
				<div className='container'>
					<div className='col s12'>
						<InputField
							placeholder={'Search'}
							value={searchInput}
							onBlurCallback={searchInputHandler}
						/>
						{!isShownForm && (
							<Button onClick={showFormHandler} variant='contained'>
								Create New
							</Button>
						)}

						{isShownForm && (
							<>
								<FilterComponent
									onChangeParametr={val => newTagHandler(val, 'filterTag')}
									selectValue={newTag.filterTag}
									label='Tag'
									options={{
										Task: 'taskTags',
										Project: 'projectTags',
									}}
								/>

								<InputField
									placeholder={'Tag'}
									value={newTag.inputTag}
									onBlurCallback={val => newTagHandler(val, 'inputTag')}
								/>
								<Button onClick={sendNewTagHandler} variant='contained'>
									Send
								</Button>
								<Button onClick={showFormHandler} variant='contained'>
									Cancel
								</Button>
							</>
						)}
					</div>

					<div className='col s12'>
						<FilterComponent
							onChangeParametr={filterChangeHandler}
							selectValue={filter}
							label='Tags Type'
							options={{
								Task: 'taskTags',
								Project: 'projectTags',
							}}
						/>
						<ul>
							{tags.map((tag, index) => {
								return (
									<li key={index}>
										{isEditing === index ? (
											<>
												<input
													type='text'
													value={editValue}
													onChange={e => setEditValue(e.target.value)}
													onBlur={saveHandler}
												/>
											</>
										) : (
											<span>{tag}</span>
										)}
										<IconButton
											onClick={() => editValueHandler(index)}
											aria-label='edit'
											size='small'
										>
											<EditIcon fontSize='inherit' />
										</IconButton>

										<IconButton
											onClick={() => deleteTagHandler(index)}
											aria-label='delete'
											size='small'
										>
											<DeleteIcon fontSize='inherit' />
										</IconButton>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default TagsDashboard;
