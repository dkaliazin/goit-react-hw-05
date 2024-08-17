import { useState, useEffect, useRef} from 'react';
import { useParams, useNavigate, useLocation, Link, Outlet, } from 'react-router-dom';
import { getMovieDetails } from '../../api';
const MovieDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const handleBack = () => {
    navigate(backLinkLocationRef.current);
  };

  useEffect(() => {
    getMovieDetails(id)
      .then(setMovie)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);
    if (loading) return <p>Wait, please.</p>;
    if (error) return <p>Error</p>;
  return (
  <>
    <button onClick={handleBack}>Back</button>
    {movie && (
      <>
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
        />
        <p>{movie.overview}</p>
        <nav>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </nav>
        <Outlet />
      </>
    )}
  </>
);
};

export default MovieDetailsPage;