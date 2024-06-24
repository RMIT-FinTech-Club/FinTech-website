import Layout from './components/Layout';
import React from 'react';
import Header from './components/Header';
import FinTechTainment from './components/FinTechTainment';

const projects = [
	{ title: 'Trung thu', description: 'Description for Trung thu', year: 2022 },
	{ title: 'Tết Nguyên Đán', description: 'Description for Tết Nguyên Đán', year: 2023 },
	{ title: 'Giáng sinh Christio', description: 'Description for Giáng sinh Christio', year: 2021 },
	// Add other projects similarly
];

const Home = () => {
	return (
		<>
			<Header />
		</>
	);
};

export default Home;
