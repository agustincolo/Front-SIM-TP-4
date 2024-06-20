import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';

const VectorTabla = () => {
  const location = useLocation();
  const [datosFila, setDatosFila] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {
    const Datos = async () => {
      if (location.state) {
        const datos = await location.state.datosSimulacion;
        setDatosFila(datos);
        console.log(datos)
        // if (datos.estado_Espera_Paciente) {
        //   console.log("Entre")
        //   const pacientesArray = [];
        //   for (let i = 0; i < datos.estado_Espera_Paciente.length; i += 3) {
        //     const paciente = [];
        //     for (let j = i; j < i + 3; j++) {
        //       paciente.push(datos.estado_Espera_Paciente[j]);
        //     }
        //     pacientesArray.push(paciente);
        //   }
        //   setPacientes(pacientesArray);
        // }
        let allPacientesArray = [];
        datos.forEach((dato, index) => {
          if (dato.estado_Espera_Paciente) {
            console.log(`Processing estado_Espera_Paciente for index ${index}`);
            const pacientesArray = [];
            for (let i = 0; i < dato.estado_Espera_Paciente.length; i += 3) {
              const paciente = [];
              for (let j = i; j < i + 3; j++) {
                paciente.push(dato.estado_Espera_Paciente[j]);
              }
              pacientesArray.push(paciente);
            }
            allPacientesArray = allPacientesArray.concat(pacientesArray);
          }
        });

        setPacientes(allPacientesArray);
      
      }
      
    };
    Datos();
  }, [location.state]);
  if (datosFila == null) {
    console.log(datosFila)
    return <p>Cargando...</p>;
  } else{
    console.log(pacientes)
    return (
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
              {pacientes.map((_, index) => (
                <th key={index} scope="col" colSpan="3" className="text-center">Paciente {index + 1}</th>
              ))}
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
              {pacientes.map((_, index) => (
                <>
                  <th key={`estado-${index}`} scope="col">Estado</th>
                  <th key={`especialidad-${index}`} scope="col">Especialidad</th>
                  <th key={`hora-ingreso-${index}`} scope="col">Hora Ingreso</th>
                </>
              ))}
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
                {/* Fisica */}
                <td className="text-center">{fila.fin_Atencion_Terapia_Fisica_1_TiempoFin}</td>
                <td className="text-center">{fila.fin_Atencion_Terapia_Fisica_2_TiempoFin}</td>
                {/* Recepcion */}
                <td className="text-center">{fila.resultado_Recepcion}</td>
                {/* Medico general */}
                <td className="text-center">{fila.estado_Medico_General_1}</td>
                <td className="text-center">{fila.cola_Medico_General_1 == -1 ? 0 : fila.cola_Medico_General_1}</td>
                <td className="text-center">{fila.estado_Medico_General_2}</td>
                <td className="text-center">{fila.cola_Medico_General_2 == -1 ? 0 : fila.cola_Medico_General_2}</td>
                <td className="text-center">{fila.estado_Medico_General_3}</td>
                <td className="text-center">{fila.cola_Medico_General_3 == -1 ? 0 : fila.cola_Medico_General_3}</td>
                {/* Medico emergencia */}
                <td className="text-center">{fila.estado_Medico_Emergencia_1}</td>
                <td className="text-center">{fila.cola_Medico_Emergencia_1 == -1 ? 0 : fila.cola_Medico_Emergencia_1}</td>
                <td className="text-center">{fila.estado_Medico_Emergencia_2}</td>
                <td className="text-center">{fila.cola_Medico_Emergencia_2 == -1 ? 0 : fila.cola_Medico_Emergencia_2}</td>
                {/* Medico especialista */}
                <td className="text-center">{fila.estado_Medico_Especialista_1}</td>
                <td className="text-center">{fila.cola_Medico_Especialista_1 == -1 ? 0 : fila.cola_Medico_Especialista_1}</td>
                <td className="text-center">{fila.estado_Medico_Especialista_2}</td>
                <td className="text-center">{fila.cola_Medico_Especialista_2 == -1 ? 0 : fila.cola_Medico_Especialista_2}</td>
                <td className="text-center">{fila.estado_Medico_Especialista_3}</td>
                <td className="text-center">{fila.cola_Medico_Especialista_3 == -1 ? 0 : fila.cola_Medico_Especialista_3}</td>
                <td className="text-center">{fila.estado_Medico_Especialista_4}</td>
                <td className="text-center">{fila.cola_Medico_Especialista_4 == -1 ? 0 : fila.cola_Medico_Especialista_4}</td>
                {/* Medico fisico */}
                <td className="text-center">{fila.estado_Medico_Fisico_1}</td>
                <td className="text-center">{fila.cola_Medico_Fisico_1 == -1 ? 0 : fila.cola_Medico_Fisico_1}</td>
                <td className="text-center">{fila.estado_Medico_Fisico_2}</td>
                <td className="text-center">{fila.cola_Medico_Fisico_2 -1 ? 0 : fila.cola_Medico_Fisico_2}</td>
                {/* Medico recepcion */}
                <td className="text-center">{fila.estado_Recepcion}</td>
                <td className="text-center">{fila.cola_Recepcion -1 ? 0 : fila.cola_Recepcion}</td>
                {/* Pacientes */}
                {pacientes.map((paciente, pacienteIndex) => (
                  <>
                    <td key={`estado-${index}-${pacienteIndex}`} className="text-center">{paciente[0]}</td>
                    <td key={`especialidad-${index}-${pacienteIndex}`} className="text-center">{paciente[1]}</td>
                    <td key={`hora-ingreso-${index}-${pacienteIndex}`} className="text-center">{paciente[2]}</td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }}

export default VectorTabla;