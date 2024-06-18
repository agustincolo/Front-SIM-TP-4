import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';

const VectorTabla = () => {
  const location = useLocation();
  console.log(location)
  const [datosFila, setDatosFila] = useState([]);

  useEffect(() => {  
    const Datos = async () =>{
      if (location.state) {
        setDatosFila(location.state.datosSimulacion);

      }
    }
    Datos();
  }, []);


  console.log(datosFila)
  if (datosFila.length === 0) {
    return <p>Cargando...</p>;
  }
  
  return(
    <div className="table-container">
        <table className="table table-bordered table-dark transparent-table">
            <thead>
                <tr>
                    <th scope="col" className="text-center"></th>
                    <th scope="col" className="text-center"></th>
                    <th scope="col" className="text-center"></th>
                    <th scope="col" colSpan="2" className="text-center">Llegada general</th>
                    <th scope="col" colSpan="2" className="text-center">Llegada Emergencia</th>
                    <th scope="col" colSpan="2" className="text-center">Llegada Especialista</th>
                    <th scope="col" colSpan="2" className="text-center">Llegada Terapia Física</th>
                    <th scope="col" colSpan="3" className="text-center">Fin Atención General (i)</th>
                    <th scope="col" colSpan="2" className="text-center">Fin Atención Emergencia (i)</th>
                    <th scope="col" colSpan="4" className="text-center">Fin Atención Especialista (i)</th>
                    <th scope="col" colSpan="2" className="text-center">Fin Atención Física (i)</th>
                    <th scope="col" colSpan="1" className="text-center"></th>
                    <th scope="col" colSpan="6" className="text-center">Médico General (i)</th>
                    <th scope="col" colSpan="4" className="text-center">Médico Emergencia (i)</th>
                    <th scope="col" colSpan="8" className="text-center">Médico Especialista (i)</th>
                    <th scope="col" colSpan="4" className="text-center">Médico Fisico (i)</th>
                    <th scope="col" colSpan="2" className="text-center">Recepcion</th>
                   {/*} {datosFila.estado_Espera_Paciente.map((_, index) => (
                    <th key={index} scope="col" colSpan="3" className="text-center">Paciente {index + 1}</th>
                    ))}*/}
                </tr>
                <tr>
                    <th scope="col">Iteración</th>
                    <th scope="col" className='text-center'>Evento</th>
                    <th scope="col" className='text-center'>Reloj</th>
                    <th scope="col">Tiempo entre llegadas</th>
                    <th scope="col">Próxima llegada</th>
                    <th scope="col">Tiempo entre llegadas</th>
                    <th scope="col">Próxima llegada</th>
                    <th scope="col">Tiempo entre llegadas</th>
                    <th scope="col">Próxima llegada</th>
                    <th scope="col">Tiempo entre llegadas</th>
                    <th scope="col">Próxima llegada</th>
                    {/* General */}
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                    {/* Emergencia */}
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    {/* Especialista */}
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                    <th scope="col">4</th>
                    {/* Física */}
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    {/* Recepción */}
                    <th scope="col" className="text-center">Resultado Recepción</th>
                    {/* Médico General*/}
                    <th scope="col">Estado 1</th>
                    <th scope="col">Cola 1</th>
                    <th scope="col">Estado 2</th>
                    <th scope="col">Cola 2</th>
                    <th scope="col">Estado 3</th>
                    <th scope="col">Cola 3</th>
                    {/*Medico Emergencia */}
                    <th scope="col">Estado 1</th>
                    <th scope="col">Cola 1</th>
                    <th scope="col">Estado 2</th>
                    <th scope="col">Cola 2</th>
                    {/*Medico Especialista */}
                    <th scope="col">Estado 1</th>
                    <th scope="col">Cola 1</th>
                    <th scope="col">Estado 2</th>
                    <th scope="col">Cola 2</th>
                    <th scope="col">Estado 3</th>
                    <th scope="col">Cola 3</th>
                    <th scope="col">Estado 4</th>
                    <th scope="col">Cola 4</th>
                    {/*Medico Fisico */}
                    <th scope="col">Estado 1</th>
                    <th scope="col">Cola 1</th>
                    <th scope="col">Estado 2</th>
                    <th scope="col">Cola 2</th>
                    {/*Recepcion */}
                    <th scope="col">Estado</th>
                    <th scope="col">Cola</th>
                    {/*{datosFila[0].pacientes.map((_, index) => (
                      <>
                      <th key={`estado-${index}`} scope="col">Estado</th>
                      <th key={`especialidad-${index}`} scope="col">Especialidad</th>
                      <th key={`hora-ingreso-${index}`} scope="col">Hora Ingreso</th>
                      </>
                    ))}*/}
                </tr>
            </thead>
            <tbody>
        {datosFila.map((fila, index) => (
          <tr key={`fila-${index}`}>
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{fila.evento}</td>
            <td className="text-center">{fila.reloj}</td>
            <td className="text-center">{fila.llegadaGeneral_TiempoEntreLlegadas}</td>
            <td className="text-center">{fila.llegadaGeneral_ProximaLLegada}</td>
            <td className="text-center">{fila.llegadaEmergencia_TiempoEntreLlegadas}</td>
            <td className="text-center">{fila.llegadaEmergencia_ProximaLlegada}</td>
            <td className="text-center">{fila.llegadaEspecialista_TiempoEntreLlegadas}</td>
            <td className="text-center">{fila.llegadaEspecialista_ProximaLlegada}</td>
            <td className="text-center">{fila.llegadaTerapiaFisica_TiempoEntreLlegadas}</td>
            <td className="text-center">{fila.llegadaTerapiaFisica_ProximaLlegada}</td>
            {/* General */}
            <td className="text-center">{fila.fin_Atencion_General_1_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_General_2_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_General_3_TiempoFin}</td>
            {/* Emergencia */}
            <td className="text-center">{fila.fin_Atencion_Emergencia_1_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_Emergencia_2_TiempoFin}</td>
            {/* Especialista */}
            <td className="text-center">{fila.fin_Atencion_Especialista_1_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_Especialista_2_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_Especialista_3_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_Especialista_4_TiempoFin}</td>
            {/* Física */}
            <td className="text-center">{fila.fin_Atencion_Terapia_Fisica_1_TiempoFin}</td>
            <td className="text-center">{fila.fin_Atencion_Terapia_Fisica_2_TiempoFin}</td>
            {/* Recepción */}
            <td className="text-center">{fila.resultado_Recepcion}</td>
            {/* Médico General */}
            <td className="text-center">{fila.estado_Medico_General_1}</td>
            <td className="text-center">{fila.cola_Medico_General_1}</td>
            <td className="text-center">{fila.estado_Medico_General_2}</td>
            <td className="text-center">{fila.cola_Medico_General_2}</td>
            <td className="text-center">{fila.estado_Medico_General_3}</td>
            <td className="text-center">{fila.cola_Medico_General_3}</td>
            {/* Médico Emergencia */}
            <td className="text-center">{fila.estado_Medico_Emergencia_1}</td>
            <td className="text-center">{fila.cola_Medico_Emergencia_1}</td>
            <td className="text-center">{fila.estado_Medico_Emergencia_2}</td>
            <td className="text-center">{fila.cola_Medico_Emergencia_2}</td>
            {/* Médico Especialista */}
            <td className="text-center">{fila.estado_Medico_Especialista_1}</td>
            <td className="text-center">{fila.cola_Medico_Especialista_1}</td>
            <td className="text-center">{fila.estado_Medico_Especialista_2}</td>
            <td className="text-center">{fila.cola_Medico_Especialista_2}</td>
            <td className="text-center">{fila.estado_Medico_Especialista_3}</td>
            <td className="text-center">{fila.cola_Medico_Especialista_3}</td>
            <td className="text-center">{fila.estado_Medico_Especialista_4}</td>
            <td className="text-center">{fila.cola_Medico_Especialista_4}</td>
            {/* Médico Fisico */}
            <td className="text-center">{fila.estado_Medico_Fisico_1}</td>
            <td className="text-center">{fila.cola_Medico_Fisico_1}</td>
            <td className="text-center">{fila.estado_Medico_Fisico_2}</td>
            <td className="text-center">{fila.cola_Medico_Fisico_2}</td>
            {/* Recepción */}
            <td className="text-center">{fila.estado_Recepcion}</td>
            <td className="text-center">{fila.cola_Recepcion}</td>
            {/* Pacientes */}
            {fila.estado_Espera_Paciente.map((paciente, index) => (
              <React.Fragment key={`paciente-${index}`}>
                <td className="text-center">{paciente.estado}</td>
                <td className="text-center">{paciente.especialidad}</td>
                <td className="text-center">{paciente.horaIngreso}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
        </table>
    </div>
)
}


export default VectorTabla;