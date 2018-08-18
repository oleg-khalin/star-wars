import React from 'react';
import './Film.css';

const Film = ({ title, release_date, characters }) => {
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow film tl'>
			<h2 className='tc'>{title}</h2>
			<p><strong>Release date:</strong> {release_date}.</p>
			<p><strong>Characters:</strong> {
				characters.map((character, i) => {
					if(i<=4)
						return i === 4 ? (
								characters.length-1 > 4 ? `${character}...` : `${character}.`
							) : 
							`${character}, `;
				})
			}</p>
		</div>
	);
};

export default Film;