import React from 'react';

import { useForm, FieldValues } from 'react-hook-form';

import KeypadSvg from './assets/svg/metallic_keypad_v2.svg';

import './App.css';

function App() {
	const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const {
	register,
	handleSubmit,
	formState: { errors },
} = useForm();
	return (
		<div className='calculator'>
			<div className='content'>
				<form className='input-form' onSubmit={handleSubmit((data) => console.log(data))}>
					<input type='number' {...register('voltage', { required: true, pattern: /\d+/ })} />
					{errors.voltage && <p>Voltage is required for this calculation</p>}
					<input type='number' {...register('resistance', { required: true, pattern: /\d+/ })} />
					{errors.resistance && <p>Resistance is required for this calculation.</p>}
					<button type='submit'>Calculate</button>
				</form>
				<div className='keypad'>
					<img src={KeypadSvg} className='keypad-svg' height={'400px'} width={'400px'} />
					<div className='keypad-overlay'>
						{digits.map((digit) => (
							<div key={digit} className={`keypad-digit keypad-${digit}`}>{digit}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
