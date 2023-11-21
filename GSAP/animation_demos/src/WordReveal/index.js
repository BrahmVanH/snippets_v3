import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

import './style.css';
const WordReveal = () => {
	gsap.registerPlugin(SplitText);
	const main = useRef();
	const welcome = useRef();

	const split = new SplitText(welcome.current, { type: 'chars' });
  const chars = split.chars

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline();
			tl.from(chars, { duration: 1, opacity: 0, stagger: 0.05, ease: 'power2.in' });
		
		}, main);

		return () => ctx.revert();
	}, []);

	return (
		<div
			className='word-reveal-container'
			ref={main}
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: 'black',
				width: '100%',
				height: '100%',
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr 1fr',
				gridTemplateRows: '1fr 1fr 1fr',
			}}>
			<h1 id='welcome' ref={welcome} style={{ gridArea: 'welcome', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				Welcome
			</h1>
		</div>
	);
};

export default WordReveal;
