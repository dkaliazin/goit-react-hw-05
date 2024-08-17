import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getMovieCastCredits} from '../../api'
export default function MovieCast() {
const [cast, setCast] = useState([]);
const { id } = useParams();
useEffect(() => {
    const getCast = async () => {
    const castData = await getMovieCastCredits(id);
        setCast(castData);
    };
        getCast();
    }, [id]);
    return (
        <>
        <p>Cast</p>
            <ul>
                {cast.map(member => (
                    <li key={member.cast_id}>
                        {member.name} in role {member.character}
                    </li>
                ))}
            </ul>
        </>
    );
}