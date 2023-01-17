import React from 'react';
import Man from './blue car.png'
import { Audio, Sequence } from 'remotion'
import audio from './audio1.wav'
import {interpolate, useCurrentFrame} from 'remotion';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();

	const movement = interpolate(frame, [0, 210], [-800, 800])

	return (
			<div style={{top: '34rem', width: '800px', position:'absolute', right: movement}}>
			  <img src={Man} alt='Image' style={{height: '10rem',}}/>
				<Audio src={audio}/>
		  </div>
		);
};
