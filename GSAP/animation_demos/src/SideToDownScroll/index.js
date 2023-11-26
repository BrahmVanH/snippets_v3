import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './style.css';

const SideToDownScroll = () => {
	gsap.registerPlugin(ScrollTrigger);

	const sections = gsap.utils.toArray('.panel');

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline();
			tl.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: '.container',
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					end: () => '+=' + document.querySelector('.container').offsetWidth,
				},
			});
		});

		return () => ctx.revert();
	});

	return (
		<>
			<div class='firstContainer'>
				<h1>Testing horizontal scrolling w/ three sections</h1>
				<h2>First Container</h2>
			</div>
			<div class='container'>
				<div class='description panel blue'>
					<div>
						SCROLL DOWN
						<div class='scroll-down'>
							<div class='arrow'></div>
						</div>
					</div>
				</div>

				<section class='panel red'>ONE</section>
				<section class='panel orange'>TWO</section>
				<section class='panel purple'>THREE</section>
			</div>
			<div class='lastContainer'>Last Container</div>
		</>
	);
};

export default SideToDownScroll;
