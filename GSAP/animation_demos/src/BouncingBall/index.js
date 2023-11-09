import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import './style.css';

function BouncingBall() {
	var ball = document.querySelectorAll('.ball');
	console.log(ball);
	const balls = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			var tl = gsap.timeline({ repeat: -1, yoyo: true });
			console.log(tl);
			tl.to(ball, {
				y: 90,
				ease: 'sine.inOut',
        duration: 0.5
			})
      tl.to(
				ball,

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
		}, balls);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={balls}>
			<div id='ball' className='ball'>
				L
			</div>
		</div>
	);
}

export default BouncingBall;
