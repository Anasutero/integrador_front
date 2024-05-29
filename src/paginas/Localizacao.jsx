import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Mapa from '../componentes/Mapa';

export function Localizacao() {
    const [pontos, setPontos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSensores() {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get('http://127.0.0.1:8000/api/sensores/', {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MDEyMDYzLCJpYXQiOjE3MTcwMTE3NjMsImp0aSI6IjlkYjBhZWEwNzNhNjQ0NzNhMDBmMWYwNTRhNWQ0NjA0IiwidXNlcl9pZCI6NX0.ZVWDctFG1tfzxKRNOjiV91RfG4eh3gN-A9ZkQQkXtGk`
                    }
                });

                const sensores = response.data;
                const pontos = sensores.map(sensor => ({
                    latitude: sensor.latitude,
                    longitude: sensor.longitude,
                    tipo: sensor.tipo,
                    localizacao: sensor.localizacao,
                }));
                setPontos(pontos);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchSensores();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar os dados: {error.message}</div>;
    }

    return (
        <div>
            <h1>Localização dos Sensores</h1>
            <Mapa pontos={pontos} />
        </div>
    );
}
