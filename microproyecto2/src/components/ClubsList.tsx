import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClubsList.css';

interface Club {
  ID: string;
  nombre: string;
  descripcion: string;
  videojuegos: string[];
}

const clubsData: Club[] = [
  {
    ID: "1",
    nombre: "Club de Aventureros",
    descripcion: "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
    videojuegos: ["1", "3", "11"]
  },
  {
    ID: "2",
    nombre: "Club de Estrategia",
    descripcion: "Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.",
    videojuegos: ["4", "15", "16"]
  },
  {
    ID: "3",
    nombre: "Club de Constructores",
    descripcion: "Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos.",
    videojuegos: ["7", "8", "14"]
  },
  {
    ID: "4",
    nombre: "Club de Fútbol Virtual",
    descripcion: "Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22.",
    videojuegos: ["9", "10", "18"]
  },
  {
    ID: "5",
    nombre: "Club de Cazadores de Zombis",
    descripcion: "Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil.",
    videojuegos: ["2", "13", "17"]
  }
];

const ClubsList = () => {
    const navigate = useNavigate();
    return (
        <div className="clubsContainer">
          {clubsData.map((club) => (
            <div 
              key={club.ID} 
              className="clubCard" 
              onClick={() => navigate(`/clubes/${club.ID}`)}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                width: '300px',
                cursor: 'pointer',
                textAlign: 'center',
                margin: '10px', 
                transition: 'transform 0.2s, box-shadow 0.2s', 
              }} 
            >
              <h2>{club.nombre}</h2>
              <p>{club.descripcion}</p>
            </div>
          ))}
        </div>
      );
    };

export default ClubsList;
