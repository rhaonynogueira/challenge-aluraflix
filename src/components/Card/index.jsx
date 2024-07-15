import React, { useState } from 'react';
import styles from './Card.module.css';
import Modal from '../Modal';
import { deleteVideo } from '../Metodo DELETE'; 

function CardVideo({ id, imagem, titulo, link, onDelete, onEdit }) { 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const sucesso = await deleteVideo(id);
        if (sucesso) {
            console.log('Video deletado com sucesso');
            onDelete(id); 
        } else {
            console.error('Falha ao deletar o video');
        }
    };

    return (
        <>
            <figure className={styles.card}>
                <a href={link}><img src={imagem} alt={titulo} /></a>
                
                <figcaption className={styles.caption}>
                    <div className={styles.titulo}>{titulo}</div>
                    <div className={styles.icons}>
                        <div className={styles.delete} onClick={handleDelete}>
                            <img src="/imagens/Vector.png" alt="Deletar"/>
                            <p>Deletar</p>
                        </div>
                        <div className={styles.edit} onClick={onEdit}>
                            <img src="/imagens/editar.png" alt="Editar" onClick={openModal} />
                            <p>Editar</p>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default CardVideo;
