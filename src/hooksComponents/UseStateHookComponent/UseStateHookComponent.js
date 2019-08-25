import React, { useState } from 'react';
import './UseStateHookComponent.css'

//Clase con contador, constructor con this.state contador:0, y una función handlerclick que usa this.setstate y dentro lo cambia con un this.state.contador+1, luego en el return , onclick devuelve el this.handlerclick y vemos el this.state.contador en un h1
//#region 
/* class Contador extends React.Component {
  
  constructor(){
    super()
    this.state = { contador: 0 }
  }
  
  handlerClick = () => this.setState({contador: this.state.contador + 1 })
  
  render() {
    return (
      <React.Fragment > <br/>
      <div class="ushc">
        soy el contador dentro de React.Fragment
      <h1 class="ushc">Contador: {this.state.contador}</h1>
      <button onClick={this.handlerClick} class="ushc">Incrementar</button>
      </div>
      </React.Fragment>)
  }
} */
//#endregion

/* HOOK ESTADO SIMPLE */

/* const Contador = () => {
  const miContador = useState(0)
  console.log(miContador)
  return (
    <React.Fragment>
      <h1>Contador: {miContador[0]}</h1>
      <button onClick={()=>miContador[1](miContador[0]+1)}>Incrementar</button>
    </React.Fragment>)
} */

/* HOOK CON UN OBJETO EN EL ESTADO */

const Contador = () => {
  const [contador, setContador] = useState(0)
  const [micontador, setMicontador] = useState({uno:0,dos:0})

  const ResetAll = () => { setContador(0); setMicontador({uno:0, dos:0}) }
  const SumaTotal = (contador + micontador.uno + micontador.dos);
  //PREGUNTA -> porque no puedo guardar el valor del textvalue en una constante???
  // const metaFijada = document.querySelector('#meta').value;
  const metaFin = () => { SumaTotal >= document.querySelector('#meta').value ? console.log('llegamos a la meta') : console.log('todavia falta') }
  
  return <React.Fragment>
    
    <div> La meta de este año es: <br/> <textarea name="" id="meta" cols="10" rows="1">100</textarea> </div>

    <h4>Contador cero: {contador}</h4>
    <button onClick={()=>setContador(contador+1)}>Incrementar</button>
    <button onClick={()=>setContador(contador-1)}>Decrementar</button>
    
    <div className="ushc">
      <h4>contador uno: {micontador.uno}</h4>
      <button onClick={()=>setMicontador({uno:micontador.uno+10, dos:micontador.dos})}>Incrementar</button>
      <button onClick={()=>setMicontador({uno:micontador.uno-10, dos:micontador.dos})} >Decrementar</button>
      <button onClick={()=>setMicontador({uno:0, dos:micontador.dos})}>Reset contador uno</button>
      <h4>contador dos=cero + uno: {micontador.dos}</h4>
      <button onClick={()=>setMicontador({dos:micontador.dos+micontador.uno+contador, uno:micontador.uno})}>Incrementar</button>
      <button onClick={()=>setMicontador({dos:micontador.dos-micontador.uno-contador, uno:micontador.uno})}>Decrementar</button>
      <button onClick={()=>setMicontador({dos:0, uno:micontador.uno})}>Reset contador dos</button>
      <button onClick={ResetAll}>ResetAll</button>
      <h4>La suma total es: {SumaTotal}</h4>
      <button onClick={metaFin}>metaFin</button>
    </div>

  </React.Fragment>
}

/* Otro ejemplo de hooks */

/* const Contador = () => {
  
  const [estado, setContador] = useState({nClick:0, contador: 0})

  const handlerClickDecrement = () => {
    if(estado.contador === 0) {
      setContador({ nClick: estado.nClick+1 })
      // setContador({ ...estado, nClick: estado.nClick+1 })
    } else {
      setContador({nClick: estado.nClick+1, contador: estado.contador-1})
    }
  }

  return <React.Fragment>
    <h1>Contador: {estado.contador}</h1>
    <h2>nº Clicks Totales: {estado.nClick}</h2>
    <button onClick={()=>setContador({nClick: estado.nClick+1, contador: estado.contador+1})}>Incrementar</button>
    <button onClick={handlerClickDecrement}>Decrementar</button>
  </React.Fragment>
} */

export default Contador
