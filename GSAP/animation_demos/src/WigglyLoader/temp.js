


import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin } from 'gsap/all';
import { ReactComponent as BlackLine } from './black-line.svg';
import './style.css';

const WigglyLoader = () => {
	const [lineSvg, setLineSvg] = useState();
	const [paths, setPaths] = useState();
	const [pathsReady, setPathsReady] = useState();

	gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

	const main = useRef();
	const svgRef = useRef();

	const mainTimeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 });

	const svgns = 'http://www.w3.org/2000/svg';

	// lineSvg = document.querySelector('svg');

	const strokeWidth = 4;
	const strokeColor = '#000000';

	useEffect(() => {
		const line = document.querySelector('svg');
		setLineSvg(line);
		const linePaths = MorphSVGPlugin.convertToPath('line');
		setPaths(linePaths);
		console.log(linePaths);
		setPathsReady(true);
	}, []);

	// paths = MorphSVGPlugin.convertToPath('line');

	const wiggleTarget = (target) => {
		console.log(target);
		const start = MotionPathPlugin.getRawPath(target)[0];

		const xPos = start[0];
		const yPos = start[1];

		const length = DrawSVGPlugin.getLength(target);

		const targetNS = document.createElementNS(svgns, 'line');

		lineSvg.appendChild(targetNS);

		gsap.set([targetNS, target], {
			stroke: strokeColor,
			strokeWidth: strokeWidth,
		});

		const tl = gsap.timeline({
			defaults: { duration: 1 },
		});

		tl.set(targetNS, {
			attr: { x1: xPos, x2: xPos, y1: yPos, y2: yPos },
		});

		tl.to(target, { y: 10 }, 0);

		tl.to(targetNS, { y2: '+=' + 10 }, 0);

		return tl;
	};

	useLayoutEffect(() => {
		if (pathsReady) {
			console.log('useLayoutEffect');
			let ctx = gsap.context(() => {
				console.log(paths);
				paths?.forEach((obj, i) => {
					mainTimeline.add(wiggleTarget(obj));
				});
			}, main);

			return () => ctx.revert();
		}
	}, [paths]);

	return (
		<div ref={main} className='wiggly'>
			<svg ref={svgRef} className='line' id='svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 275.75 4'>
				<line id='line' x1='0' y1='2' x2='275.75' y2='2' />
			</svg>
		</div>
	);
};

export default WigglyLoader;
