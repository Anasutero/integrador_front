import estilos from './Sensor.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const TIPOS_SENSOR_CHOICES = [
    ['Temp_Umidade', 'Temperatura'],
    ['Contador', 'Contador'],
    ['Luminosidade', 'Luminosidade'],
    ['Umidade', 'Umidade']
];

const schemaSensor = z.object({
    tipo: z.string().min(1, 'Selecione um tipo de sensor'),
    mac_address: z.string().max(20, 'Máximo de 20 caracteres'),
    latitude: z.number().min(-90, 'Latitude inválida').max(90, 'Latitude inválida'),
    longitude: z.number().min(-180, 'Longitude inválida').max(180, 'Longitude inválida'),
    localizacao: z.string().max(100, 'Máximo de 100 caracteres'),
    responsavel: z.string().max(100, 'Máximo de 100 caracteres'),
    unidade_medida: z.string().max(20, 'Máximo de 20 caracteres'),
    status_operacional: z.boolean(),
    observacao: z.string().max(500, 'Máximo de 500 caracteres')
});

export function Sensor() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schemaSensor)
    });

    function obterDadosFormulario(data) {
        console.log('Dados dos sensores:', data);
    }

    return (
        <div className={estilos.conteiner}>
            <p className={estilos.titulo}>Dados dos Sensores</p>
            <form
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                <select
                    {...register('tipo')}
                    className={estilos.campo}
                >
                    <option value="">Selecione um tipo de sensor</option>
                    {TIPOS_SENSOR_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                {errors.tipo && (
                    <p className={estilos.mensagem}>{errors.tipo.message}</p>
                )}

                <input
                    {...register('mac_address')}
                    className={estilos.campo}
                    placeholder="Endereço MAC"
                />
                {errors.mac_address && (
                    <p className={estilos.mensagem}>{errors.mac_address.message}</p>
                )}

                <input
                    {...register('latitude')}
                    type="number"
                    step="any"
                    className={estilos.campo}
                    placeholder="Latitude"
                />
                {errors.latitude && (
                    <p className={estilos.mensagem}>{errors.latitude.message}</p>
                )}

                <input
                    {...register('longitude')}
                    type="number"
                    step="any"
                    className={estilos.campo}
                    placeholder="Longitude"
                />
                {errors.longitude && (
                    <p className={estilos.mensagem}>{errors.longitude.message}</p>
                )}

                <input
                    {...register('localizacao')}
                    className={estilos.campo}
                    placeholder="Localização"
                />
                {errors.localizacao && (
                    <p className={estilos.mensagem}>{errors.localizacao.message}</p>
                )}

                <input
                    {...register('responsavel')}
                    className={estilos.campo}
                    placeholder="Responsável"
                />
                {errors.responsavel && (
                    <p className={estilos.mensagem}>{errors.responsavel.message}</p>
                )}

                <input
                    {...register('unidade_medida')}
                    className={estilos.campo}
                    placeholder="Unidade de Medida"
                />
                {errors.unidade_medida && (
                    <p className={estilos.mensagem}>{errors.unidade_medida.message}</p>
                )}

                <input
                    {...register('status_operacional')}
                    type="checkbox"
                    className={estilos.campo}
                />
                {errors.status_operacional && (
                    <p className={estilos.mensagem}>{errors.status_operacional.message}</p>
                )}

                <textarea
                    {...register('observacao')}
                    className={estilos.campo}
                    placeholder="Observação"
                />
                {errors.observacao && (
                    <p className={estilos.mensagem}>{errors.observacao.message}</p>
                )}

                <button className={estilos.botao}>Enviar</button>
            </form>
        </div>
    );
}
