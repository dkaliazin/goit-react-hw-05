import { useState, useEffect } from 'react';
import { getReviews } from '../../movie-api';
export default function MovieReviews() {
const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviewsData = await getReviews (id);
            setReviews(reviewsData);
        };
        fetchReviews();
    }, [id]);

return (
    <>
        <p>Reviews</p>
        <ul>
            {reviews.map(review => (
            <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
            </li>
                ))}
        </ul>
    </>
    );
}