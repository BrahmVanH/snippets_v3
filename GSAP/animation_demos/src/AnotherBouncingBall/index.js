//learn more about CustomBounce and CustomWiggle at: https://greensock.com/wiggle-bounce

var duration = 3;
var tl = gsap.timeline({ delay: 0.2, onUpdate: updateUI });

//strength between 0 and 1
CustomBounce.create('myBounce', { strength: 0.7, squash: 3 });
tl.to('#ball', { y: 550, duration: duration, ease: 'myBounce' }).to('#ball', { scaleY: 0.5, duration: duration, scaleX: 1.3, ease: 'myBounce-squash', transformOrigin: 'bottom' }, 0);

//graph the lines...
//bounce ease green
CustomEase.getSVGData('myBounce', { path: '#bounce', width: 700, height: 500 });
//squash ease red
CustomEase.getSVGData('myBounce-squash', { path: '#squash', width: 700, height: 500 });

progressSlider = document.getElementById('progressSlider');

progressSlider.addEventListener('input', updateAnimation);

function updateAnimation() {
	tl.progress(progressSlider.value).pause();
}

function updateUI() {
	progressSlider.value = tl.progress();
}

document.getElementById('play').onclick = function () {
	if (tl.progress() == 1) {
		tl.restart();
	} else {
		tl.play();
	}
};
