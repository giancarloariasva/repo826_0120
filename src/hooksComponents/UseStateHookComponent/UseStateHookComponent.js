import React, { useState } from 'react';

class Contador extends React.Component {
  constructor(){
    super()
    this.state = {
      contador: 0
    }
  }
  handlerClick = () => this.setState({contador: this.state.contador + 1 })
  render() {
    return <React.Fragment>
    <h1>Contador: {this.state.contador}</h1>
    <button onClick={this.handlerClick}>Incrementar</button>
  </React.Fragment>
  }
}

/* HOOK ESTADO SIMPLE */

// const Contador = () => {
//   const miContador = useState(0)
//   console.log(miContador)
//   return <React.Fragment>
//     <h1>Contador: {miContador[0]}</h1>
//     <button onClick={()=>miContador[1](miContador[0]+1)}>Incrementar</button>
//   </React.Fragment>
// }

/* HOOK CON UN OBJETO EN EL ESTADO */

// const Contador = () => {
//   const [contador, setContador] = useState(0)
//   return <React.Fragment>
//     <h1>Contador: {contador}</h1>
//     <button onClick={()=>setContador(contador+1)}>Incrementar</button>
//     <button onClick={()=>setContador(contador-1)}>Decrementar</button>
//   </React.Fragment>
// }

// const Contador = () => {
//   const [estado, setContador] = useState({nClick:0, contador: 0})
//   const handlerClickDecrement = () => {
//     if(estado.contador === 0) {
//       setContador({ nClick: estado.nClick+1 })
//       // setContador({ ...estado, nClick: estado.nClick+1 })
//     } else {
//       setContador({nClick: estado.nClick+1, contador: estado.contador-1})
//     }
//   }
//   return <React.Fragment>
//     <h1>Contador: {estado.contador}</h1>
//     <h2>nº Clicks Totales: {estado.nClick}</h2>
//     <button onClick={()=>setContador({nClick: estado.nClick+1, contador: estado.contador+1})}>Incrementar</button>
//     <button onClick={handlerClickDecrement}>Decrementar</button>
//   </React.Fragment>
// }

export default Contador
