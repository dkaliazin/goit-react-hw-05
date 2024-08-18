import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { getImageUrl } from '../../api';
import css from './MovieList.module.css'
export default function MovieList({ movies }) {
    const location = useLocation();
    return (
        <>
        <ul className={css.ul}>
            {/*movies && movies.length > 0 ? (
                    movies.map(movie => (
                    
                    <li key={movie.id} className={css.li}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </Link>
                    </li>
                ))
            ) : (
                <p>No movies available.</p>
            )*/}
            {movies && movies.length > 0 ? (
                 movies.map(movie => (
                     movie.id ? (
            <li key={movie.id} className={css.li}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
                    <h3>{movie.title}</h3>
                </Link>
            </li>
        ) : (
            <li key={movie.title} className={css.li}>
                <p>Invalid movie data</p>
            </li>
        )
    ))
) : (
    <p>No movies available.</p>
)}{/*end*/}
            </ul>
        </>
    );
}