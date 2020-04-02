import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
 
import './style.css';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon(){
  return (
    <div className="logon-container">
      <section className="form" >
      <img src={logoImg} alt="Logo img"/>
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="sua ID"/>
        <button className="button" type="submit">Entra</button>
        <Link className="back-link" to="/register">
          <FiLogIn size="16" color="#E02041"/>
          Não tenho cadastro</Link>
      </form>
      </section>
      <img src={herosImg} alt="Heroes"></img>
    </div>
  );
}
