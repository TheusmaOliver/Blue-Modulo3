import './cards.css';
import { Link } from 'react-router-dom';

export default function Cards({ info }) {
    return (
        <div className="cards">
            {info.map((item) =>
                <div className="cards-wrapper" key={item.id} >
                    <strong>{item.nome}</strong> 
                    <img src={item.foto} alt={item.nome}/>
                    <Link className="btn-access" to={`/movie/${item.id}`}> Access </Link>
                </div>
            )}
        </div>
    )
}
