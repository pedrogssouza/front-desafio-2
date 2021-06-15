import "./style.css";
import logo from "../../assets/images/logo.svg"
import lupa from "../../assets/images/search-icon.svg"

export default function Navbar(){
    return (
        <header>
            <img src={logo} className="logo"></img>
            <form onSubmit="" >
                <div className="barra-pesquisa">
                    <input placeholder="Pesquise filmes..."></input>
                    <button type="submit"><img src={lupa}></img></button>
                </div>
            </form>
            <div className="usuario">
                <span>Bem vindo Pedro</span>
                <img></img>
            </div>
        </header>
    )
}