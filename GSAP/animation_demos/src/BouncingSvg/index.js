import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';

import './style.css';

function BouncingSvg() {
	gsap.registerPlugin(MotionPathPlugin);
	var ball = document.querySelectorAll('.ball');
	console.log(ball);
	const main = useRef();
	const svgRef = useRef();

	const getSemicircleCoordinate = (theta) => {
		const radius = 200;
		const x = 200 + radius * Math.cos(theta);
		const y = -200 + radius * Math.sin(theta);
		return [x, y];
	};

	// Create a function to convert a point on a semicircle to a coordinate pair.
	const createMotionPath = (theta) => {
		const semicircleCoordinate = getSemicircleCoordinate(theta);
		// Sample the semicircle at 100 points.
		const samples = gsap.utils.toArray(Array(100).fill(0));
		const coordinates = samples.map(semicircleCoordinate);

		// Return a MotionPath plugin instance.
		return new MotionPathPlugin({
			path: coordinates,
		});
	};

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			var tl = gsap.timeline({ repeat: -1, yoyo: false });
			console.log(tl);
			// tl.set('#svg', { y: 600});
			tl.to('#svg', {
				y: 100,
				x: 0,
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
			tl.to('#svg', {
				scaleY: 1,
				duration: 0
			});
			tl.to('#svg', {
				motionPath: [
					{ x: 0, y: 100 },
					{ x: 200, y: -400 },
					{ x: 350, y: -200 },
				],
				duration: 3,
			});
		}, main);

		return () => ctx.revert();
	}, []);

	return (
		<div className='svg-container' ref={main}>
			<svg id='svg' ref={svgRef} className='roll' xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 420 120'>
				<path d='M60,110A50,50,0,1,0,10,60,50,50,0,0,0,60,110Z' fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='4' />
			</svg>
		</div>
	);
}

export default BouncingSvg;
