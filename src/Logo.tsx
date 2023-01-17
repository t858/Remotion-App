import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import Birds from './bird-silhouette-gif-7.gif'

export const Logo: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
	const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

	return (
		<div className='relative top-10'>
			
		</div>
	);
};
