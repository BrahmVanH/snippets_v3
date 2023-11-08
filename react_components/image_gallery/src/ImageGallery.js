import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import CSS styles
import ImageGallery from 'react-image-gallery';
import FullScreen from 'react-image-gallery';

function Gallery() {
	const isFullscreen = true; // Set to true to enter full-screen mode on render
	  const images = [
			{
				original: 'https://picsum.photos/id/1018/1000/600/',
				thumbnail: 'https://picsum.photos/id/1018/250/150/',
			},
			{
				original: 'https://picsum.photos/id/1015/1000/600/',
				thumbnail: 'https://picsum.photos/id/1015/250/150/',
			},
			{
				original: 'https://picsum.photos/id/1019/1000/600/',
				thumbnail: 'https://picsum.photos/id/1019/250/150/',
			},
		];
	return (
		<div>
			<FullScreen
				isFullscreen={isFullscreen}
				render={({ ref, onClick }) => (
					<div ref={ref} onClick={onClick}>
						<ImageGallery
							items={images}
						/>
					</div>
				)}
			/>
		</div>
	);
}

export default Gallery;
