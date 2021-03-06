import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'; 

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';
export default function Profile(){
  const [incidents, setIncidents ] = useState([]);

  const history = useHistory();

  const nameOng = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('profile',{
      headers:{
         Authorization: ongId,
      }
    }).then(response =>{
      setIncidents(response.data);
    })

  }, [ongId]);

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers:{
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incidents => incidents.id !== id));
    }catch(err){
      alert("Erro ao deletar o caso!");
    }
  }

  function handleLougout(){
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="profile-container">
       <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem, vida {nameOng}</span>

        <Link className="button" to="/incidentes/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLougout}>
          <FiPower size={18} color="#E02041"/>
        </button>
       </header>

       <h1>Casos cadastrados</h1>
       <ul >
        {incidents.map(incident =>(
          <li key={incident.id}>
          <strong>CASO:</strong>
          <p>{incident.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{incident.description}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency:'BRL'}).format(incident.value)}</p>

          <button type="button">
          <FiTrash2 size={14} color="#a8a8b3"
          onClick={() => handleDeleteIncident(incident.id)}/>
          </button>
        </li> 
        ))}
       </ul>
    </div>
  );
}

