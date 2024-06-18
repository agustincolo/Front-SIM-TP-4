import React, { useEffect, useState } from 'react'
import { PostSimulacion } from '../service/simulacion.service';

const VectorTabla = () => {
  const [datosFila, setDatosFila] = useState([]);

  const cargarDatosSimulacion = async () => {
    try {
      const datos = await PostSimulacion({
        "lineasSimular": 100,
        "desdeDondeMostrar": 20,
        "mediaLlegadaGeneral": 0.01,
        "mediaLlegadaEmergencia": 7.0,
        "mediaLlegadaEspecialista": 2.0,
        "mediaLlegadaTerapia": 2.0,
        "mediaAtencionGeneral": 6.0,
        "mediaAtencionEmergencia": 7.0,
        "mediaAtencionEspecialidad": 9.0,
        "mediaAtencionTerapia": 4.0,
        "mediaAtencionRecepcion": 5.0
    }); 
    console.log(datos.data);
      setDatosFila(datos.data[0].evento);
    } catch (error) {
      console.error('Error al cargar datos de simulación:', error);
    }
  };

  useEffect(() => {
    cargarDatosSimulacion();
  }, []); 

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
              <td className="text-center">{}</td>
              <td className="text-center">{datosFila.evento}</td>
              {/*<td className="text-center">{0}</td>
              <td className="text-center">{fila.llegadaGeneral.tiempoEntreLlegadas}</td>
              <td className="text-center">{fila.llegadaGeneral.proximaLlegada}</td>
              <td className="text-center">{fila.llegadaEmergencia.tiempoEntreLlegadas}</td>
              <td className="text-center">{fila.llegadaEmergencia.proximaLlegada}</td>
              <td className="text-center">{fila.llegadaEspecialista.tiempoEntreLlegadas}</td>
              <td className="text-center">{fila.llegadaEspecialista.proximaLlegada}</td>
              <td className="text-center">{fila.llegadaTerapiaFisica.tiempoEntreLlegadas}</td>
              <td className="text-center">{fila.llegadaTerapiaFisica.proximaLlegada}</td>
              <td className="text-center">{fila.finAtencionGeneral[0]}</td>
              <td className="text-center">{fila.finAtencionGeneral[1]}</td>
              <td className="text-center">{fila.finAtencionGeneral[2]}</td>
              <td className="text-center">{fila.finAtencionEmergencia[0]}</td>
              <td className="text-center">{fila.finAtencionEmergencia[1]}</td>
              <td className="text-center">{fila.finAtencionEspecialista[0]}</td>
              <td className="text-center">{fila.finAtencionEspecialista[1]}</td>
              <td className="text-center">{fila.finAtencionEspecialista[2]}</td>
             <td className="text-center">{fila.finAtencionEspecialista[3]}</td>
              <td className="text-center">{fila.finAtencionFisica[0]}</td>
              <td className="text-center">{fila.finAtencionFisica[1]}</td>
               <td className="text-center">{fila.recepcion.resultado}</td>
              <td className="text-center">{fila.medicos.general.estado}</td>
             <td className="text-center">{fila.medicos.general.cola}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{}</td>
              <td className="text-center">{fila.recepcion.estado}</td>
              <td className="text-center">{fila.recepcion.cola}</td>
              {datosFila[0].pacientes.map((paciente, idx) => (
                <React.Fragment key={`paciente-${index}-${idx}`}>
                  <td className="text-center">{paciente.estado}</td>
                  <td className="text-center">{paciente.especialidad}</td>
                  <td className="text-center">{paciente.horaIngreso}</td>
                </React.Fragment>
              ))}*/}
            </tr>
          ))}
            </tbody>
        </table>
    </div>
)
}


export default VectorTabla;