import estilos from './Lista.module.css';
import {useEffect, useState} from 'react';
import {Sensores} from '../componentes/Sensores';

export function Lista() {
  const [sensores, setSensores] = useState([]);

  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
  const cities = ["London", "New York", "Tokyo", "São Paulo", "Sydney"];

  useEffect(() => {
    Promise.all(cities.map(city =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
    ))
    .then(data => setSensores(data))
    .catch(error => console.error("Error fetching weather data: ", error));
  }, []);

  return (
    <main className={estilos.conteiner}>
      {sensores.map(sensor => (
        <Sensores key={sensor.id} propsFilme={sensor} />
      ))}
    </main>
  );
}
