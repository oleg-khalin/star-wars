import React from 'react';
import Film from './Film';

const FilmList = ({ films }) => {
	return !films.length ?
    <h1 className='tc'>Loading...</h1> :
    (
			<div className="tc">
				{
					films.map((film) => {
						return (
							<Film
								key={film.episode_id}
								title={film.title}
								release_date={film.release_date}
								characters={film.characters}
							/>
						);
					})
				}
			</div>
		);
};

export default FilmList;