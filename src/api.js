import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGE1ODk0MDhhNDE3YmM5N2UxMGI3NGM3MTIxYjg2ZSIsIm5iZiI6MTcyMzkxMzk1Ni42MzYyNCwic3ViIjoiNjZjMGQzMzUxMDBhMmZlZjA1NjcyNjU3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0TwL6iesCop3yqrzzjr2RmY_3vYCv3MRsqRb0WGFm9c`;

axios.defaults.params = {
    api_key: "48a589408a417bc97e10b74c7121b86e"
};
const baseURL = 'https://image.tmdb.org/t/p/w500';

export const getMovies = async () => {
    try {
        const response = await axios.get('/trending/movie/day');
        return response.data.results;
    } catch (error) {
        console.error('Ошибка при получении фильмов:', error);
        return [];
    }
};
export const getMovieDetails = async (id) => {
    const response = await axios.get(`/movie/${id}`);
    return response.data;
};
export const getMovieCastCredits = async (id) => {
    const response = await axios.get(`/movie/${id}/credits`);
    return response.data.cast;
};
export const getImageUrl = (imgPath) => {
    return `${baseURL}/${imgPath}`;
};
export const searchMovies = async (query) => {
    const response = await axios.get('/search/movie', { params: { query } });
    return response.data.results;
};
export const getReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews`);
    return response.data.results;
};

