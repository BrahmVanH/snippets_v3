import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

import './style.css';

function TranslateUpwards() {
	const [move, setMove] = useState(false);
	const [boxDisplay, setBoxDisplay] = useState("none");
	const [moveSecond, setMoveSecond] = useState(false);

	const app = useRef();

	const triggerAnimation = () => {
		let ctx = gsap.context(() => {
      gsap.fromTo('#box', { y: 500, x: 0, scaleX: 0.4, scaleY: 1.4, opacity: 0 }, { y: 0, scaleX: 1, scaleY: 1, x: 0, opacity: 1, ease: 'expoScale(0.1, 1, power2.inOut)', duration: 10 });
		}, app);

		return () => ctx.revert();
	};


	useEffect(() => {
		if (move) {
			setBoxDisplay("")
			triggerAnimation();
			setMove(false);
			
		}
	}, [move]);

	
	return (
		<div className='container' ref={app} style={{ width: '100%', height: '100%' }}>
			<div id='box' style={{ display: boxDisplay, border: '2px solid white', color: 'white', backgroundColor: 'blue' }}>
				<svg width='200' height='50' xmlns='http://www.w3.org/2000/svg'>
					<path d='M10 40 L40 40 L30 10 L60 10' stroke='black' stroke-width='2' fill='transparent' />
					<path d='M60 40 L80 40 L70 10 L90 10' stroke='black' stroke-width='2' fill='transparent' />
					<path d='M100 40 Q120 10 140 40' stroke='black' stroke-width='2' fill='transparent' />
					<path d='M150 40 L170 10 L190 40' stroke='black' stroke-width='2' fill='transparent' />
				</svg>
			</div>
			<button
				// style={{zIndex: 1000}}
				onClick={() => setMove(true)}>
				move
			</button>
		</div>
	);
}

export default TranslateUpwards;
