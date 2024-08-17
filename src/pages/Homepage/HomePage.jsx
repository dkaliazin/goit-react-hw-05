import { useState, useEffect } from 'react';
import {getMovies} from '../../api';
import MovieList from '../../components/MovieList/MovieList';
import React from 'react';
export default function HomePage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getTrends = async () => {
            const movies = await getMovies();
            setMovies(movies);
        };
        getTrends();
    }, []);
    return <MovieList movies={movies} />;
}