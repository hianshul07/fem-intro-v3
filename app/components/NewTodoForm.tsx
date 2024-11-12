'use client'

import { useState } from 'react';

const NewToDoForm = () => {
	const [input, setInput] = useState('');

	return (
		<div className='bg-fuchsia-400'>
			<form action=''>
				<input type='text' />
			</form>
		</div>
	);
};
export default NewToDoForm;
