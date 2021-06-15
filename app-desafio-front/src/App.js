import {useState, useEffect} from "react"
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
// import filmes from "./assets/images/dados/data"

function App() {

  useEffect(()=>{
    obterFilmes()
  },[])

  const [filmes,setFilmes] = useState([])
  const [topFilmes,setTopFilmes] = useState([])
  console.log(filmes)
  

  async function obterFilmes(){
    const response = await fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR");

    const {results} = await response.json();

    setFilmes(results);
    setTopFilmes(results.slice(0,5))
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="conteudo">        
        <div>
          <h2>Top Filmes</h2>
          <div className="top-filmes">
            <Card filmes={topFilmes}></Card>
          </div >
        </div>
        <div>
          <h2>Filmes</h2>
          <div className="filmes">
            <Card filmes={filmes}></Card>
          </div >
        </div>
        
      </div>
      {/* <Sacola></Sacola> */}
    </div>
  );
}

export default App;
