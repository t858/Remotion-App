import {AbsoluteFill} from 'remotion';
import {Subtitle} from './Subtitle';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-[url('./streetHouses.jpg')] bg-no-repeat bg-cover w-screen">
			<Subtitle />
		</AbsoluteFill>
	);
};
