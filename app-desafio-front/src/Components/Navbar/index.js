import "./style.css";
import logo from "../../assets/images/logo.svg"
import lupa from "../../assets/images/search-icon.svg"
import { useRef, useState } from "react";


export default function Navbar({setFiltro}){
    const inputRef = useRef()
    
    function handleTextoPesquisa(e){
        e.preventDefault();
        setFiltro(inputRef.current.value);
    }


    return (
        <header>
            <img src={logo} className="logo"></img>
            <form onSubmit={handleTextoPesquisa} >
                <div className="barra-pesquisa" >
                    <input placeholder="Pesquise filmes..." ref={inputRef}></input>
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