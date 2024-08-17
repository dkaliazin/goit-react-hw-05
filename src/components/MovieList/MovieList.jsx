import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { getImageUrl } from '../../api';
import css from './MovieList.module.css'
export default function MovieList({ movies }) {
    const location = useLocation();
    return (
        <>
        <ul className={css.ul}>
            {movies && movies.length > 0 ? (
                movies.map(movie => (
                    <li key={movie.id} className={css.li}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
                            <p>{movie.title}</p>
                        </Link>
                    </li>
                ))
            ) : (
                <p>No movies available.</p>
            )}
            </ul>
        </>
    );
}