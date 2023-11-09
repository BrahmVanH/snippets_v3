import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import './style.css';

function BouncingSvg() {
	var ball = document.querySelectorAll('.ball');
	console.log(ball);
	const main = useRef();
  const svgRef = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			var tl = gsap.timeline({ repeat: -1, yoyo: true });
			console.log(tl);
			tl.to('#svg', {
				y: 90,
				ease: 'sine.inOut',
				duration: 0.5,
			});
			tl.to(
				'#svg',

				{
					duration: 0.1,
					scaleY: 0.6,
					transformOrigin: 'center bottom',
					borderBottomLeftRadius: '40%',
					borderBottomRightRadius: '40%',
					ease: 'sine.inOut',
				},
				'-=.05'
			);
		}, main);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={main}>
			<svg id='svg' ref={svgRef} className='roll' xmlns='http://www.w3.org/2000/svg' width='400' height='120' viewBox='0 0 420 120'>
				<path d='M60,110A50,50,0,1,0,10,60,50,50,0,0,0,60,110Z' fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='4' />
			</svg>
		</div>
	);
}

export default BouncingSvg;
