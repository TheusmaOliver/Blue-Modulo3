import React, { useEffect, useState } from 'react'
import api from '../../services/api'


export default function MovieComponent({ id }) {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            setMovies(response.data);
            setLoading(false);
        }

        loadMovies();
    },[id])
    return (
        <section>
            {loading
                ? (
                    <h1>Loading...</h1>
                )
                :(
                    <div>
                       
                        <div key={movies.id}>
                            <h2>{movies.nome}</h2>
                            <img src={movies.foto} alt={movies.nome}/>
                            <span>{movies.sinopse}</span>
                        </div>
                    
                    </div>
                )
            }
        </section>
    )
}
