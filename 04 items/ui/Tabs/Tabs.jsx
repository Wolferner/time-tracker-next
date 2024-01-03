import { useState } from 'react';

const Tabs = ({ config }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className='tab'>
			<div className='tab_head'>
				{config.map((tab, index) => (
					<div
						className={`tab_header ${activeTab === index && 'active'}`}
						onClick={() => setActiveTab(index)}
						key={index}
					>
						{tab.header}
					</div>
				))}
			</div>
			<div className='tab_body'>{config[activeTab].component}</div>
		</div>
	);
};

export default Tabs;

//<tabs config = {[
//								{header:'tab1', companent: <Tab1/>},
//								{header:'tab2', companent: <Tab2/>}
//											]}
