import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner({ categorias }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/videos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados da API');
                }
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        appendDots: dots => (
            <div>
                <ul style={{ margin: '0px', padding: '0px', display: 'flex', justifyContent: 'center' }}>
                    {dots}
                </ul>
            </div>
        ),
    };

    return (
        <div className={styles.capa}>
            <Slider {...settings}>
                {videos.map((video) => {
                    const categoria = categorias.find(categoria => categoria.nome === video.categoria);
                    return (
                        <div key={video.id} className={styles.slide}>
                            <div
                                className={styles.overlay}
                                style={{ backgroundImage: `url(${video.imagem})` }}
                            >
                                <div className={styles.sobreposicao}>
                                </div>
                                <div className={styles.elementosSobrepostos}>
                                    <div>
                                        <h3 style={{ backgroundColor: categoria ? categoria.cor : '#000000' }}>
                                            {categoria ? categoria.nome : 'Categoria Desconhecida'}
                                        </h3>
                                        <h1>{video.titulo}</h1>
                                        <p>{video.descricao}</p>
                                    </div>
                                    <div className={styles.videoslink}>
                                        <a href={video.link}>
                                            <img 
                                                src={video.imagem} 
                                                alt="" 
                                                style={{ border: `5px solid ${categoria ? categoria.cor : '#000000'}`, borderRadius: `20px` }} 
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Banner;
