import React, { useState,useEffect,useRef } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { TweenMax } from "gsap";

const Landing = ({location})=> {

  const [generator, setGenerator] = useState(false); 
  const element = useRef(null);

  const startGenerator = () =>{
  

    console.log(location);
    TweenMax.to(element.current, 0.5, {opacity:0});
    return(<NavLink to='/about'/>)
  }

    return (
      <div className='home'>
       
       <div ref={element }>
        <h1>Conceptos para dibujar. <br/> Al instante. </h1>
        <h4>¿Quieres dibujar pero te has quedado sin ideas? <span >¡prueba el generador!</span>.</h4>
        <p>
        Hola, soy el creador! Me gusta mucho dibujar en tiempos libres pero muchas veces me quedo sin ideas 🤷‍♂️,
        así que decidí crear mi propio generador de conceptos aleatorios para dibujar!
        <br></br>
        ¿Estás comenzando a dibujar recién? Prueba el generador básico; te dará algo simple. ¿Quieres ponerte a prueba? ¡Sube la dificultad! 
        A medida que subes la dificultad, se agregan palabras y se añaden <b>acciones</b> y <b>cualidades </b>. 
        <span className='dialog'></span>
               </p>
        </div>
     
        <button className='button' onClick={startGenerator}>
          Iniciar generador
        </button>
       
      </div>  
    );
  }
  


  export default Landing;