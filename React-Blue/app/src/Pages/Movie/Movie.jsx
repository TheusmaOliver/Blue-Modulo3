import React from 'react'
import { useParams } from 'react-router-dom'
import MovieComponent from '../../components/MovieComponent/MovieComponent';

export default function Movie() {
    const { id } = useParams();
    return (
        <div>
            <MovieComponent id={id}/>
        </div>
    )
}
