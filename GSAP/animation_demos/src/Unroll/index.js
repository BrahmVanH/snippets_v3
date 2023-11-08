import gsap from 'gsap';
import { MotionPathPlugin, DrawSVGPlugin } from 'gsap/all';

function Unroll() {
  gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);
	const dur = 1.25;
	const mainEase = 'sine.inOut';
	const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
	const svgns = 'http://www.w3.org/2000/svg';
	const demo = document.querySelector('svg');
	const strokeWidth = 4;
	const strokeColor = '#5cceee';
	let paths = gsap.utils.toArray('path');

	function unrollTarget(target) {
		let start = MotionPathPlugin.getRawPath(target)[0];
		let xPos = start[0];
		let yPos = start[1];
		let length = DrawSVGPlugin.getLength(target);
		let lineTarget = document.createElementNS(svgns, 'line');
		demo.appendChild(lineTarget);
		gsap.set([lineTarget, target], {
			stroke: strokeColor,
			strokeWidth: strokeWidth,
		});

		let tl = gsap.timeline({
			defaults: { duration: dur, ease: mainEase },
		});
		tl.set(lineTarget, {
			attr: { x1: xPos, x2: xPos, y1: yPos, y2: yPos },
		});

		tl.to(target, { drawSVG: 0, x: length }, 0);
		tl.to(lineTarget, { attr: { x2: '+=' + length } }, 0);

		return tl;
	}

	paths.forEach((obj, i) => {
		master.add(unrollTarget(obj));
	});

	return (
		<svg className='roll' xmlns='http://www.w3.org/2000/svg' width='400' height='120' viewBox='0 0 420 120'>
			<path d='M60,110A50,50,0,1,0,10,60,50,50,0,0,0,60,110Z' fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='4' />
		</svg>
	);
}

export default Unroll;
