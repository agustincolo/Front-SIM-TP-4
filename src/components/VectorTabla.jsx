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

        if (datos && datos.length > 0) {
          const pacientesData = datos.map(dato => dato.estado_Espera_Paciente);
          setPacientes(pacientesData);
        }
      
    }
  }
    Datos();
  }, [location.state]);

  const ordenar = () => {
    
    for (let index = 0; index < pacientes.length; index++) {
      pacientes[index].sort((a, b) => a.id - b.id)
    }
    
  }
  ordenar();

  if (datosFila == null) {
    return <p>Cargando...</p>;
    
    
  } else{ 
    console.log(datosFila)

    return (
      <div className="table-container">
        <table className="table table-bordered table-dark transparent-table">
          <thead>
            <tr>
              <th scope="col" className="text-center"></th>
              <th scope="col" className="text-center"></th>
              <th scope="col" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center">Llegada general</th>
              <th scope="col" colSpan="1" className="text-center">Llegada Emergencia</th>
              <th scope="col" colSpan="1" className="text-center">Llegada Especialista</th>
              <th scope="col" colSpan="1" className="text-center">Llegada Terapia Física</th>
              <th scope="col" colSpan="3" className="text-center">Fin Atención General (i)</th>
              <th scope="col" colSpan="2" className="text-center">Fin Atención Emergencia (i)</th>
              <th scope="col" colSpan="4" className="text-center">Fin Atención Especialista (i)</th>
              <th scope="col" colSpan="2" className="text-center">Fin Atención Física (i)</th>
              <th scope="col" colSpan="1" className="text-center">Fin Atencion Recepcion</th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="6" className="text-center">Médico General (i)</th>
              <th scope="col" colSpan="4" className="text-center">Médico Emergencia (i)</th>
              <th scope="col" colSpan="8" className="text-center">Médico Especialista (i)</th>
              <th scope="col" colSpan="4" className="text-center">Médico Fisico (i)</th>
              <th scope="col" colSpan="2" className="text-center">Recepcion</th>
              {/* Estadistica */}
              <th scope="col" colSpan="3" className="text-center">Tiempo Espera Promedio</th>
              
              <th scope="col" colSpan="3" className="text-center">Tiempo Espera Prom Emergencia</th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>
              <th scope="col" colSpan="1" className="text-center"></th>


              <th scope="col" className="text-center" colSpan="20">Pacientes</th>             
            </tr>
            <tr>
              <th scope="col">Iteración</th>
              <th scope="col" className='text-center'>Evento</th>
              <th scope="col" className='text-center'>Reloj</th>
              <th scope="col">Próxima llegada</th>
              <th scope="col">Próxima llegada</th>
              <th scope="col">Próxima llegada</th>
              <th scope="col">Próxima llegada</th>
              {/* General */}
              <th scope="col text-center">1</th>
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
              <th scope="col"></th>
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
              {/* Estadistica */}
              <th scope="col">AC tiempo Espera</th>
              <th scope="col">Cantidad Pacientes</th>
              <th scope="col">Resultado</th>
                
              <th scope="col">AC tiempo Esp. Emer</th>
              <th scope="col">Cantidad Pacientes</th>
              <th scope="col">Resultado</th>

              <th scope="col" colSpan="1" className="text-center">Porcentaje Ocupacion Recep.</th>
              <th scope="col" colSpan="1" className="text-center">Porcentaje Ocupacion General</th>
              <th scope="col" colSpan="1" className="text-center">Porcentaje Ocupacion Emergencia</th>
              <th scope="col" colSpan="1" className="text-center">Porcentaje Ocupacion Especialidad</th>
              <th scope="col" colSpan="1" className="text-center">Porcentaje Ocupacion Terapia</th>
              <th scope="col" colSpan="1" className="text-center">Cantidad Pacientes Atendidos</th>
              <th scope="col" colSpan="1" className="text-center">Promedio Edades Pacientes</th>
              <th scope="col" colSpan="1" className="text-center">Prob. Llegada Con Servicio Lleno</th>

              <th scope="col" className='text-center' colSpan="1">Estado</th>
              <th scope="col" colSpan="1">Especialidad</th>
              <th scope="col" colSpan="1">Tiempo Espera</th>
             </tr>
          </thead>
          <tbody>
            {datosFila.map((fila, index) => (

              <tr key={`fila-${index}`}>
                <td className="text-center">{fila.nroIteracion}</td>
                <td className="text-center">{fila.evento}</td>
                <td className="text-center">{parseFloat(fila.reloj).toFixed(2)}</td>
                <td className="text-center">{fila.llegadaGeneral_ProximaLLegada == null ? null : parseFloat(fila.llegadaGeneral_ProximaLLegada).toFixed(2)}</td>
                <td className="text-center">{fila.llegadaEmergencia_ProximaLlegada == null ? null : parseFloat(fila.llegadaEmergencia_ProximaLlegada).toFixed(2)}</td>
                <td className="text-center">{fila.llegadaEspecialista_ProximaLlegada == null ? null :parseFloat(fila.llegadaEspecialista_ProximaLlegada).toFixed(2)}</td>
                <td className="text-center">{fila.llegadaTerapia_ProximaLlegada == null ? null : parseFloat(fila.llegadaTerapia_ProximaLlegada).toFixed(2) }</td>
                {/* General */}
                <td className="text-center">{fila.fin_Atencion_General_1_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_General_1_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_General_2_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_General_2_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_General_3_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_General_3_TiempoFin).toFixed(2)}</td>
                {/* Emergencia */}
                <td className="text-center">{fila.fin_Atencion_Emergencia_1_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Emergencia_1_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_Emergencia_2_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Emergencia_2_TiempoFin).toFixed(2)}</td>
                {/* Especialista */}
                <td className="text-center">{fila.fin_Atencion_Especialista_1_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Especialista_1_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_Especialista_2_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Especialista_2_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_Especialista_3_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Especialista_3_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_Especialista_4_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Especialista_4_TiempoFin).toFixed(2)}</td>
                {/* Fisica */}
                
                <td className="text-center">{fila.fin_Atencion_Terapia_Fisica_1_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Terapia_Fisica_1_TiempoFin).toFixed(2)}</td>
                <td className="text-center">{fila.fin_Atencion_Terapia_Fisica_2_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Terapia_Fisica_2_TiempoFin).toFixed(2)}</td>
                {/* Recepcion */}
                <td className='text-center'>{fila.fin_Atencion_Recepcion_1_TiempoFin == null ? null : parseFloat(fila.fin_Atencion_Recepcion_1_TiempoFin).toFixed(2)}</td>
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
                <td className="text-center">{fila.cola_Medico_Fisico_2 == -1 ? 0 : fila.cola_Medico_Fisico_2}</td>
                {/* Medico recepcion */}
                <td className="text-center">{fila.estado_Recepcion}</td>
                <td className="text-center">{fila.cola_Recepcion == -1 ? 0 : fila.cola_Recepcion}</td>
                {/* Estadistica */}
                <td className="text-center">{fila.acumuladorTiempoEspera == null ? null : parseFloat(fila.acumuladorTiempoEspera).toFixed(2)}</td>
                <td className="text-center">{fila.cantidadPacientesAtendidos}</td>
                <td className="text-center">{fila.tiempoEsperaPromedio == null ? null : parseFloat(fila.tiempoEsperaPromedio).toFixed(2)}</td>

                <td className="text-center">{fila.acumuladorTiempoEsperaPacientesEmergencia == null ? null : parseFloat(fila.acumuladorTiempoEsperaPacientesEmergencia).toFixed(2)}</td>
                <td className="text-center">{fila.cantidadPacientesAtendidos}</td>
                <td className="text-center">
                {fila.tiempoEsperaPacientesEmergenciaPromedio == null || isNaN(parseFloat(fila.tiempoEsperaPacientesEmergenciaPromedio))? parseFloat(0).toFixed(2): parseFloat(fila.tiempoEsperaPacientesEmergenciaPromedio).toFixed(2)}</td>


                <td className="text-center">{fila.tiempoOcupacionRecepcion == null ? null : parseFloat(fila.tiempoOcupacionRecepcion).toFixed(2)}</td>

                <td className="text-center">{fila.tiempoOcupacionGeneral == null ? null : parseFloat(fila.tiempoOcupacionGeneral).toFixed(2)}</td>

                <td className="text-center">{fila.tiempoOcupacionEmergencia == null ? null : parseFloat(fila.tiempoOcupacionEmergencia).toFixed(2)}</td>

                <td className="text-center">{fila.tiempoOcupacionEspecialidad == null ? null : parseFloat(fila.tiempoOcupacionEspecialidad).toFixed(2)}</td>

                <td className="text-center">{fila.tiempoOcupacionTerapia == null ? null : parseFloat(fila.tiempoOcupacionTerapia).toFixed(2)}</td>

                <td className="text-center">{fila.cantidadPacientesAtendidos}</td>

                <td className='text-center'>{fila.promedioEdadesPacientesAtendidos}</td>
                <td className='text-center'>{parseFloat(fila.probabilidadLlegadaConServicioLleno).toFixed(2)}</td>

                {pacientes[index].map((paciente) => (
                  <React.Fragment key={paciente.id}>
                    <td className="text-center">Paciente: {paciente.id} {paciente.estado}</td>
                    <td className="text-center">{paciente.tipoAtencion}</td>
                    <td className="text-center">{paciente.tiempoEspera == null ? null : parseFloat(paciente.tiempoEspera).toFixed(2)}</td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }}

export default VectorTabla;