import { gsap, CustomEase } from 'gsap/all';

// Acceleration due to gravity (in pixels per second squared)
const gravity = 100; // You can adjust this value to match the desired animation effect

// Custom ease points
const easePoints = [
	0, // Start at (0,0)
	0,
	0, // Control point 1 (no movement initially)
	0.5,
	1 - 0.5 / gravity, // Control point 2 (peaking out at zero velocity)
	1,
	1, // End at (1,1)
];

// Create a custom ease using CustomEase.create()
const customEase = CustomEase.create('throwEase', 'M0,0 C' + easePoints.join(','));

// Use the custom ease in your GSAP animations
gsap.to('.element', {
	duration: 2, // Adjust the duration as needed
	y: -200, // The distance the object moves vertically (upwards)
	ease: 'throwEase', // Use the custom ease here
});
