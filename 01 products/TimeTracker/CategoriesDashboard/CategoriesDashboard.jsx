'use client';

import FilterComponent from '@/04 items/ui/FilterCompanent/FilterCompanent';
import InputField from '@/04 items/ui/InputField/InputField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import {
	addNewCategory,
	deleteCurrentCategory,
	getAllCategories,
	updateCreatedCategory,
} from './data/CategoriesDashboard.data';

const CategoriesDashboard = () => {
	const [searchInput, setSearchInput] = useState('');

	const [filter, setFilter] = useState('taskCategories');
	const [categories, setCategories] = useState([]);

	const [isShownForm, setIsShownForm] = useState(false);
	const [newCategory, setNewCategory] = useState({
		filterCategory: 'taskCategories',
		inputCategory: '',
	});

	const [isEditing, setIsEditing] = useState(null);
	const [editValue, setEditValue] = useState('');

	const searchInputHandler = value => {
		setSearchInput(value.title);
	};

	const filterChangeHandler = filterValue => {
		setFilter(filterValue);
	};

	const fetchCategories = async () => {
		try {
			const response = await getAllCategories();
			setCategories(response[filter] || []);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchCategories();
	}, [filter]);

	const showFormHandler = () => {
		setIsShownForm(prev => !prev);
	};

	const newCategoryHandler = (value, type) => {
		switch (type) {
			case 'filterCategory':
				setNewCategory(prev => ({
					filterCategory: value,
					inputCategory: prev.inputCategory,
				}));
				break;
			case 'inputCategory':
				setNewCategory(prev => ({
					filterCategory: prev.filterCategory,
					inputCategory: value.title,
				}));
				break;
		}
	};

	const sendNewCategoryHandler = async () => {
		try {
			const categoryData = {
				value: newCategory.inputCategory, // FIXME:Izmenil category na value
				type: newCategory.filterCategory,
			};
			await addNewCategory(JSON.stringify(categoryData));
		} catch (error) {
			console.log(
				`Problem with sending new Categorie in CategoriesDashboard.jsx`
			);
		}
		fetchCategories();
		setIsShownForm(prev => !prev);
		setNewCategory(prev => ({
			filterCategory: prev.filterCategory,
			inputCategory: '',
		}));
	};

	const editValueHandler = index => {
		setIsEditing(index);
		setEditValue(categories[index]);
	};

	const saveHandler = async () => {
		// const updatedCategories = [...categories];
		// updatedCategories[isEditing] = editValue;
		// setCategories(updatedCategories);
		// setIsEditing(null);
		const updatedCategory = {
			filter,
			index: isEditing,
			value: editValue,
		};
		try {
			await updateCreatedCategory(JSON.stringify(updatedCategory));
			console.log();
			await fetchCategories();
		} catch (error) {
			console.log(`problem in CategoriesDashboard - saveHandler - ${error}`);
		}
		setIsEditing(null);
	};

	const deleteCategoryHandler = async index => {
		// const updatedCategories = [...categories];
		// updatedCategories.slice(index, 1);
		// setCategories(updatedCategories);
		const categoryData = {
			filter,
			index,
		};
		try {
			await deleteCurrentCategory(JSON.stringify(categoryData));
			await fetchCategories();
		} catch (error) {
			console.log(
				`problem in CategoriesDashboard - deleteCategoryHandler - ${error}`
			);
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
									onChangeParametr={val =>
										newCategoryHandler(val, 'filterCategory')
									}
									selectValue={newCategory.filterCategory}
									label='Category'
									options={{
										Task: 'taskCategories',
										Project: 'projectCategories',
									}}
								/>

								<InputField
									placeholder={'Categorie'}
									value={newCategory.inputCategory}
									onBlurCallback={val =>
										newCategoryHandler(val, 'inputCategory')
									}
								/>
								<Button onClick={sendNewCategoryHandler} variant='contained'>
									Send
								</Button>
								<Button onClick={showFormHandler} variant='contained'>
									Cancle
								</Button>
							</>
						)}
					</div>

					<div className='col s12'>
						<FilterComponent
							onChangeParametr={filterChangeHandler}
							selectValue={filter}
							label='Categories Type'
							options={{
								Task: 'taskCategories',
								Project: 'projectCategories',
							}}
						/>
						<ul>
							{categories.map((category, index) => {
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
											<span>{category}</span>
										)}
										<IconButton
											onClick={() => editValueHandler(index)}
											aria-label='edit'
											size='small'
										>
											<EditIcon fontSize='inherit' />
										</IconButton>

										<IconButton
											onClick={() => deleteCategoryHandler(index)}
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

export default CategoriesDashboard;
