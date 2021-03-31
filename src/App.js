import './App.css';
import { useState } from 'react';


function App() {

  const [ count, setCount ] = useState(0);
  const [ blockUnoEstado, setBlockUnoEstado ] = useState(false);
  const [ blockDosEstado, setBlockDosEstado ] = useState(false);
  const [ blockTresEstado, setBlockTresEstado ] = useState(false);
  const [ blockCuatroEstado, setBlockCuatroEstado ] = useState(false);
  const [ blockCincoEstado, setBlockCincoEstado ] = useState(false);
  const [ blockSeisEstado, setBlockSeisEstado ] = useState(false);
  const [ blockLastEstado, setBlockLastEstado ] = useState(false);

function contador() {
  setCount(count+1)
  console.log(count)
}

function blockUno(){
  setBlockUnoEstado(true);
}

function blockDos(){
  setBlockDosEstado(true);
}

function blockTres(){
  setBlockTresEstado(true);
}

function blockCuatro(){
  setBlockCuatroEstado(true);
}

function blockCinco(){
  setBlockCincoEstado(true);
}

function blockSeis(){
  setBlockSeisEstado(true);
}

function blockLast(){
  setBlockLastEstado(true);
}


  return (
    <div className="App">
      <div className="titulo-container">
        <h1>Descubrí los regalitos</h1>
      </div>
      <div className="first-container">
        <div onClick={function(){ contador(); blockUno()}} className={`block uno ${ blockUnoEstado ? "active" : "inactive"}`}><p>: ) </p></div>
        <div onClick={function(){ contador(); blockDos()}} className={`block uno ${ blockDosEstado ? "active" : "inactive"}`}><p>: o </p></div>
        <div onClick={function(){ contador(); blockTres()}} className={`block uno ${ blockTresEstado ? "active" : "inactive"}`}><p> :* <br></br> Muchos besitos</p></div>
        <div onClick={function(){ contador(); blockCuatro()}} className={`block uno ${ blockCuatroEstado ? "active" : "inactive"}`}><p style={{lineHeight: "2.5rem"}}>Masajes <br></br> ˘▽˘</p></div>
        <div onClick={function(){ contador(); blockCinco()}} className={`block uno ${ blockCincoEstado ? "active" : "inactive"}`}><p>චᆽච</p></div>
        <div onClick={function(){ contador(); blockSeis()}} className={`block uno ${ blockSeisEstado ? "active" : "inactive"}`}><p>Una página web</p></div>
      </div>
      <div className="second-container">
         <div onClick={function(){ contador(); blockLast()}} className={`block last ${ count > 5 ? "display" : ""} ${ blockLastEstado ? "active" : "inactive"}`}><p style={{fontSize: "1.2rem"}}> Voucher de 120€ en Discogs <br></br>;) </p></div>
      </div>

    </div>
  );
}

export default App;