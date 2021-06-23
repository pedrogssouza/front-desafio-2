import {useState, useEffect} from "react"
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Sacola from "./Components/Sacola"


function App() {

  const [filmes,setFilmes] = useState([])
  const [topFilmes,setTopFilmes] = useState([])
  const [carrinho, setCarrinho] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(()=>{
    obterFilmes()
  },[])

  async function obterFilmes(){
    const response = await fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR");

    const {results} = await response.json();

    setFilmes(results);
    setTopFilmes(results.slice(0,5))
  }


  function adicionarAoCarrinho(filme){
    const carrinhoAtual = [...carrinho]
   
    const filmeEncontrado = carrinho.findIndex((item)=>item.id===filme.id); 

    if(filmeEncontrado>=0){
     
      carrinhoAtual[filmeEncontrado].quantidade++
      setCarrinho(carrinhoAtual)
    }else{
      const filmeFormatado={
        titulo : filme.title,
        capa : filme.poster_path,
        preco : filme.price,
        id : filme.id,
        quantidade : 1
      }
      setCarrinho([...carrinho, filmeFormatado]);
    }
  }

  function removerDoCarrinho(filme){
    const carrinhoAtual = [...carrinho]
   
    const filmeEncontrado = carrinho.findIndex((item)=>item.id===filme.id); 

    if(filmeEncontrado>=0){
      carrinhoAtual[filmeEncontrado].quantidade--
      if(carrinhoAtual[filmeEncontrado].quantidade<=0){
        carrinhoAtual.splice(filmeEncontrado,1);
        setCarrinho(carrinhoAtual)
        return
      }
      setCarrinho(carrinhoAtual)
    }
  }
  
  

  return (
    <div className="App">
      <Navbar setFiltro={setFiltro}></Navbar>
      <div className="main-content">
        <div className="conteudo">        
          <div>
            <h2>Top Filmes</h2>
            <div className="top-filmes">
              {topFilmes.map(filme =>(<Card filme={filme} funcaoOnClick={adicionarAoCarrinho} key={filme.id}></Card>))}   
            </div >
          </div>
          <div>
            <h2>Filmes</h2>
            <div className="filmes">
              {filmes.filter(filme=>filme.title.includes(filtro)).map(filme =>(<Card filme={filme} funcaoOnClick={adicionarAoCarrinho}></Card>))}   
            </div >
          </div>
        </div>
        <Sacola carrinho={carrinho} adicionarAoCarrinho={adicionarAoCarrinho} removerDoCarrinho={removerDoCarrinho}></Sacola> 
      </div>
    </div>
  );
}

export default App;
