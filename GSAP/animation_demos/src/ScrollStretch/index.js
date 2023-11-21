import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './style.css';

const ScrollStretch = () => {
	gsap.registerPlugin(ScrollTrigger);
	const main = useRef();
	const scrollStretchBox = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline({
				
			});
			tl.set('#scrollstretch-box', { transformOrigin: 'top' });
			tl.to('#scrollstretch-box', {
				scrollTrigger: {
					trigger: '#scrollstretch-box',
					start: 'bottom bottom',
					// end: 'bottom bottom+=10px',
					scrub: true,
				},
				scaleY: 1.6,
				duration: 1,
				ease: 'power3.out',
			});
			tl.to('#scrollstretch-box', {
				scrollTrigger: {
					trigger: '#scrollstretch-box',
					// start: 'bottom bottom',
					start: 'bottom bottom+=10px',
					scrub: true,
				},
				scaleY: 1,
				duration: 1,
				ease: 'power3.out',
			});
		}, main);
		return () => ctx.revert();
	}, []);

	// const handleScroll = () => {
	// 	const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
	// 	const stretchAmount = 54; // Calculate the amount of stretch based on scrollPos
	// 	gsap.to(box, {
	// 		scaleY: stretchAmount, // Adjust this property to stretch the element
	// 		duration: 0.5, // Adjust animation duration as needed
	// 		ease: 'power3.out', // Apply easing
	// 	});

	// 	// Set a timeout to revert to the original size after scrolling stops
	// 	const scrollTimer = setTimeout(() => {
	// 		gsap.to(box, {
	// 			scaleY: 1, // Revert to the original size
	// 			duration: 0.5,
	// 			ease: 'power3.out',
	// 		});
	// 	}, 150);
	// 	clearTimeout(scrollTimer);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	return (
		<div className='main' ref={main}>
			<div className='filler'>black</div>
			<div id='scrollstretch-box' ref={scrollStretchBox} className='scrollstretch-box'>
				box
			</div>

		</div>
	);
};

export default ScrollStretch;
