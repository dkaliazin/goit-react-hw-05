import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList'
import React from 'react';
export default function MoviesPage() {
const [movies, setMovies] = useState([]);
const [query, setQuery] = useState('');
const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
    const getMovies = async () => {
        const query = searchParams.get('query') || '';
            if (query) {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGE1ODk0MDhhNDE3YmM5N2UxMGI3NGM3MTIxYjg2ZSIsIm5iZiI6MTcyMzkxMzk1Ni42MzYyNCwic3ViIjoiNjZjMGQzMzUxMDBhMmZlZjA1NjcyNjU3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0TwL6iesCop3yqrzzjr2RmY_3vYCv3MRsqRb0WGFm9c`
                    }
                });
                setMovies(response.data.results);
            }
        };
        getMovies();
    }, [searchParams]);

    const handleSearch = (evt) => {
        evt.preventDefault();
        setSearchParams({ query });
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                    placeholder="Movies"
                />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </>
    );
}