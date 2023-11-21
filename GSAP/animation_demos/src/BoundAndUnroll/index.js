import gsap from 'gsap';
import { MotionPathPlugin, DrawSVGPlugin, CustomEase } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';

import './style.css';

function BounceAndUnroll() {
	const gravity = 100;
	const easePoints = [0, 0, 0, 0.5, 1 - 0.5 / gravity, 1, 1];
	const customEase = CustomEase.create('custom', 'M0,0 C0.15,0.366 0.314,0.57 0.5,0.671 0.659,0.757 0.834,0.807 1,1 ');
	const main = useRef();
	// Register gsap plugins to be used
	gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

	// Create main timeline for the component

	// Create a namespace for the svg to allow browsers to handle svg properly
	const svgns = 'http://www.w3.org/2000/svg';

	// Store element in variable
	const demo = document.querySelector('svg');
	const svgRef = useRef();

	// style variables
	const strokeWidth = 4;
	const strokeColor = '#5cceee';

	// Spread path points into an array of points to later manipulate
	let paths = gsap.utils.toArray('path');

	function unrollTarget(target) {
		// Grab the path, an array of arrays of coordinate values, from the target - in this case, the svg line
		// and assign the first array to the 'start' variable
		let start = MotionPathPlugin.getRawPath(target)[0];

		// assign start postition to variables
		let xPos = start[0];
		let yPos = start[1];

		// Save length of target to variable to direct SVG drawing later
		let length = DrawSVGPlugin.getLength(target);

		// Create a namespace element and store as variable
		let targetNS = document.createElementNS(svgns, 'line');

		// Append namespace using variable to svg in DOM
		demo.appendChild(targetNS);

		// Set color and width of line-stroke for target svg and namespace
		gsap.set([targetNS, target], {
			stroke: strokeColor,
			strokeWidth: strokeWidth,
		});

		// Create timeline and define duration and ease pattern
		let tl = gsap.timeline({
			defaults: { duration: 0.5, ease: 'none' },
		});
		// set namespace starting location
		tl.set(targetNS, {
			attr: { x1: xPos, x2: xPos, y1: yPos, y2: yPos },
		});

		//  Add .to tween to end of timeline, targets svg element. Draws svg to length of the array of svg points
		tl.to(target, { drawSVG: 0, x: length }, 0);

		// Add .to tween to end of timeline, targets namespace element.
		tl.to(targetNS, { attr: { x2: '+=' + length } }, 0);

		return tl;
	}

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const mainTimeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

			let tl = gsap.timeline({ ease: customEase });
			console.log(tl);
			tl.set('#svg', { y: -600 });
			tl.to('#svg', {
				y: 100,
				x: 0,
				ease: 'none',
				duration: 0.5,
			});
			tl.to(
				'#svg',

				{
					duration: 0.1,
					scaleY: 0.6,
					scaleX: 1.1,
					transformOrigin: 'center bottom',
					borderBottomLeftRadius: '40%',
					borderBottomRightRadius: '40%',
					ease: 'none',
				},
				'-=.05'
			);
			tl.to('#svg', {
				scaleY: 1,
				duration: 0,
			});
			tl.to('#svg', {
				motionPath: [
					{ x: 0, y: 100 },
					{ x: 200, y: -300 },
					{ x: 350, y: -200 },
				],
				duration: 1.5,
				ease: customEase,
			});
			paths.forEach((obj, i) => {
				tl.add(unrollTarget(obj));
			});

			mainTimeline.add(tl);
		}, main);

		return () => ctx.revert();
	}, []);

	return (
		<div className='svg-container' ref={main}>
			<svg id='svg' ref={svgRef} className='roll' xmlns='http://www.w3.org/2000/svg' width='400' height='120' viewBox='0 0 420 120'>
				<path d='M60,110A50,50,0,1,0,10,60,50,50,0,0,0,60,110Z' fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='4' />
			</svg>
		</div>
	);
}

export default BounceAndUnroll;
