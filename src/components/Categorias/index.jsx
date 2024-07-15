import React, { useState, useEffect } from 'react';
import CardVideo from '../Card'; 
import styles from './Categorias.module.css';
import { deleteVideo } from '../Metodo DELETE'; 

function Categorias({ nome, cor, onEditClick }) {
  const [videos, setVideos] = useState([]);

  const handleDelete = async (id) => {
    try {
      const sucesso = await deleteVideo(id);
      if (sucesso) {
        console.log('Video deletado com sucesso');
        setVideos(videos.filter(video => video.id !== id));
      } else {
        console.error('Falha ao deletar o video');
      }
    } catch (error) {
      console.error('Erro ao deletar o video:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();

        const filteredVideos = data.filter(video => video.categoria === nome);
        setVideos(filteredVideos);

      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, [nome]);
//fazer contexto para att
  return (
    <section className={styles.categorias}>
      <h3 style={{ backgroundColor: cor }}>{nome}</h3>
      <div className={styles.cardContainer}>
        {videos.map((video) => (
          <CardVideo
            key={video.id}
            id={video.id}
            imagem={video.imagem}
            titulo={video.titulo}
            link={video.video}
            onDelete={() => handleDelete(video.id)}
            onEdit={() => onEditClick(video)} 
          />
        ))}
      </div>
    </section>
  );
}

export default Categorias;
