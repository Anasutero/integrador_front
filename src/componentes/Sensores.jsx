import React, { useState, useEffect } from 'react';
import estilos from './Sensores.module.css';
import { Card } from './Card';

export function Sensores({ propsFilme }) {
    const { title, overview, vote_average } = propsFilme;

    // Exemplo de consulta à API Unsplash para obter uma imagem relacionada ao título do filme
    const fetchImage = async () => {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(title)}&client_id=YOUR_UNSPLASH_ACCESS_KEY`);
            if (!response.ok) {
                throw new Error('Erro ao buscar imagem da API Unsplash');
            }
            const data = await response.json();
            console.log('Dados da imagem:', data);
            return data.urls.regular; // URL da imagem regular
        } catch (error) {
            console.error('Erro ao buscar imagem:', error);
            return ''; // Retorna uma string vazia em caso de erro
        }
    };

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchImage()
            .then(url => setImageUrl(url))
            .catch(error => console.error('Erro ao buscar imagem:', error));
    }, [title]); // Atualiza a imagem sempre que o título do filme mudar

    return (
        <Card>
            <figure className={estilos.container}>
                {imageUrl && <img src={imageUrl} alt={title} />}
                <figcaption>{title}</figcaption>
                <p>{overview}</p>
                <p>Rating: {vote_average}</p>
            </figure>
        </Card>
    );
}
