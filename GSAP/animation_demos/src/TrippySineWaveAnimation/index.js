import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './style.css';

const TrippySineWaveAnimation = () => {
	const main = useRef(null);
	const ease = 'Sine.easeInOut';
	const svg = document.querySelector('#svg');
	const wiggly = document.querySelector('#wave');
	const g = document.querySelector('#g');
	const width = 1000;

	const amplitude = 200;
	const frequency = 0.1;
	const segments = 300;
	const interval = width / segments;

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (wiggly) {
				gsap.set('g', { y: window.innerHeight / 2 });
				for (let i = 0; i < segments; i++) {
					let tl = gsap.timeline({ duration: 2 });
					const norm = i / (segments - 1);
					console.log(wiggly);
					const point = wiggly.points.appendItem(svg.createSVGPoint());

					point.x = i * interval;
					point.y = amplitude / 2;
					tl.to(point, { y: -point.y, repeat: -1, yoyo: true, duration: 2 }).progress(norm * frequency);
				}
			}
		}, main);

		return () => ctx.revert();
	}, [main]);

	return (
		<div ref={main} className='main'>
			<svg id='svg'>
				<g id='g'>
					<line id='line' x1='0' x2='150' />
					<polyline id='wave' />
				</g>
			</svg>
		</div>
	);
};

export default TrippySineWaveAnimation;
