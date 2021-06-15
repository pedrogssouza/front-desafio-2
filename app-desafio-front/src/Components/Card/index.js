import "./style.css"
import estrela from "../../assets/images/golden-star.svg"
// import dados from "../../assets/dados/data.js"

export default function Card({filmes}){
    return (
        <> 
            {filmes.map(filme => (
                <div className="card" style={{backgroundImage: `url(${filme.poster_path})`}}>
                    <div className="camada">
                        <div className="card-infos">
                            <span className="titulo">{filme.title}</span>
                            <div className="estrela">
                                <img src={estrela} ></img>
                                <span className="avaliacao">{filme.vote_average}</span>
                            </div>
                            <button>
                                <p>Sacola</p>
                                <p>R${filme.price}</p>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}