import React,{ useEffect, useState} from 'react';
import api from '../../services/api';

import Cards from '../../components/Cards/Cards'
import './home.css';
export default function Home() {
    const [movies,setMovies] = useState([]);

    useEffect(() =>{
        async function loadMovies() {
            const response = await api.get('/r-api/?api=filmes/')
            setMovies(response.data);
        }
        loadMovies();
    },[movies]);

    return (
        <section className="app">
            <h1>Movies</h1>
            <Cards info={movies}/>
        </section>
    )
}
