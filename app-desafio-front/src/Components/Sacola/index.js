import "./style.css";
import mochila from "../../assets/images/Bag.svg"
import pessoa from "../../assets/images/person-illustration.svg"
import soma from "../../assets/images/plus-icon.svg"
import subtracao from "../../assets/images/minus-icon.svg"
import lixeira from "../../assets/images/trash-icon.svg"
import {useState} from "react"




function CardSacola({filme, plus, sub}){

    return(
        <div className="card-sacola">
            <img src={filme.capa}/>
            <div className="card-sacola-infos">
                <h3>{filme.titulo}</h3>
                <p>R$ {filme.preco}</p>
            </div>
            <button onClick={()=>plus()}><img src={soma}/></button>
            <p>{filme.quantidade}</p>
            <button onClick={()=>sub()}><img src={filme.quantidade===1? lixeira : subtracao}></img></button>
        </div>
    )
}

function PreencherSacola({carrinho, adicionarAoCarrinho, removerDoCarrinho}){
    
    function somar(filme){
        adicionarAoCarrinho(filme)
    }
    
    function subtrair(filme){
        removerDoCarrinho(filme)
    }
    

    let precoTotal = 0

    for (let filme of carrinho) {
        precoTotal +=filme.preco*filme.quantidade
    }

    if(carrinho.length>0){
        return(
            <div className="filmes-sacola">
                {carrinho.map(filme=>(<CardSacola filme={filme} plus={()=>somar(filme)} sub={()=>subtrair(filme)}/>))}
                <button className="confirmar-compra">Confirme seus dados R${precoTotal}</button>       
            </div>
        )
    }       
    else{
        return(
            <div className="sacola-vazia">
                <h2>Sua sacola está vazia</h2>
                <p>Adicione filmes agora</p>
                <img src={pessoa}></img>
            </div>
        )
        
    }
}


export default function Sacola({carrinho, adicionarAoCarrinho, removerDoCarrinho}){
    
    return(
        <div className="sacola">
            <div className="cabecalho-sacola">
                <img src={mochila}/>
                <p>Sacola</p>
            </div>  
            <PreencherSacola carrinho={carrinho} adicionarAoCarrinho={adicionarAoCarrinho} removerDoCarrinho={removerDoCarrinho}/>
        </div>
    )

}
