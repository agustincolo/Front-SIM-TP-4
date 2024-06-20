import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PostSimulacion } from "../service/simulacion.service";

const Parametros = () => {

  const [cantidadSimulaciones, setCantidadSimulaciones] = useState('');
  const [desdeSimulaciones, setDesdeSimulaciones] = useState('');
  const [hastaSimulaciones, setHastaSimulaciones] = useState('');
  const [mediaLlegadaGeneral, setMediaLlegadaGeneral] = useState('');
  const [mediaLlegadaEmergencia, setMediaLlegadaEmergencia] = useState('');
  const [mediaLlegadaEspecialista, setMediaLlegadaEspecialista] = useState('');
  const [mediaLlegadaTerapia, setMediaLlegadaTerapia] = useState('');
  const [mediaAtencionGeneral, setMediaAtencionGeneral] = useState('');
  const [mediaAtencionEmergencia, setMediaAtencionEmergencia] = useState('');
  const [mediaAtencionEspecialidad, setMediaAtencionEspecialidad] = useState('');
  const [mediaAtencionTerapia, setMediaAtencionTerapia] = useState('');
  const [mediaAtencionRecepcion, setMediaAtencionRecepcion] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Cantidad de Simulaciones:", cantidadSimulaciones);
    console.log("Desde:", desdeSimulaciones);
    console.log("Hasta:", hastaSimulaciones);

    try {
      const response = await PostSimulacion({
        lineasSimular: cantidadSimulaciones,
        desdeDondeMostrar: desdeSimulaciones,
        mediaLlegadaGeneral: parseFloat(mediaLlegadaGeneral),
        mediaLlegadaEmergencia: parseFloat(mediaLlegadaEmergencia),
        mediaLlegadaEspecialista: parseFloat(mediaLlegadaEspecialista),
        mediaLlegadaTerapia: parseFloat(mediaLlegadaTerapia),
        mediaAtencionGeneral: parseFloat(mediaAtencionGeneral),
        mediaAtencionEmergencia: parseFloat(mediaAtencionEmergencia),
        mediaAtencionEspecialidad: parseFloat(mediaAtencionEspecialidad),
        mediaAtencionTerapia: parseFloat(mediaAtencionTerapia),
        mediaAtencionRecepcion: parseFloat(mediaAtencionRecepcion)
      });

      console.log(response)

      return (
        navigate('/Vector', { state: { datosSimulacion: response.data } })

      );
    } catch (error) {
      console.error('Error al cargar datos de simulación:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container ">
        <h2 className="tituloSimulacion">Clinica medica</h2>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="cantidadSimulaciones" className="texto pb-2">Cantidad Simulaciones</label>
                <input
                  type="text"
                  className="form-control"
                  id="cantidadSimulaciones"
                  value={cantidadSimulaciones}
                  onChange={(e) => setCantidadSimulaciones(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="desdeSimulaciones" className="texto pb-2">Desde</label>
                <input
                  type="text"
                  className="form-control"
                  id="desdeSimulaciones"
                  value={desdeSimulaciones}
                  onChange={(e) => setDesdeSimulaciones(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="hastaSimulaciones" className="texto pb-2">Hasta</label>
                <input
                  type="text"
                  className="form-control"
                  id="hastaSimulaciones"
                  value={hastaSimulaciones}
                  onChange={(e) => setHastaSimulaciones(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaLlegadaGeneral" className="texto pb-2">Media Llegada General</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaLlegadaGeneral"
                  value={mediaLlegadaGeneral}
                  onChange={(e) => setMediaLlegadaGeneral(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaLlegadaEmergencia" className="texto pb-2">Media Llegada Emergencia</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaLlegadaEmergencia"
                  value={mediaLlegadaEmergencia}
                  onChange={(e) => setMediaLlegadaEmergencia(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaLlegadaEspecialista" className="texto pb-2">Media Llegada Especialista</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaLlegadaEspecialista"
                  value={mediaLlegadaEspecialista}
                  onChange={(e) => setMediaLlegadaEspecialista(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaLlegadaTerapia" className="texto pb-2">Media Llegada Terapia</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaLlegadaTerapia"
                  value={mediaLlegadaTerapia}
                  onChange={(e) => setMediaLlegadaTerapia(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaAtencionGeneral" className="texto pb-2">Media Atención General</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaAtencionGeneral"
                  value={mediaAtencionGeneral}
                  onChange={(e) => setMediaAtencionGeneral(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaAtencionEmergencia" className="texto pb-2">Media Atención Emergencia</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaAtencionEmergencia"
                  value={mediaAtencionEmergencia}
                  onChange={(e) => setMediaAtencionEmergencia(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaAtencionEspecialidad" className="texto pb-2">Media Atención Especialidad</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaAtencionEspecialidad"
                  value={mediaAtencionEspecialidad}
                  onChange={(e) => setMediaAtencionEspecialidad(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="mediaAtencionTerapia" className="texto pb-2">Media Atención Terapia</label>
                <input
                  type="text"
                  className="form-control"
                  id="mediaAtencionTerapia"
                  value={mediaAtencionTerapia}
                  onChange={(e) => setMediaAtencionTerapia(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="mediaAtencionRecepcion" className="texto pb-2">Media Atención Recepcion</label>
            <input
              type="text"
              className="form-control"
              id="mediaAtencionRecepcion"
              value={mediaAtencionRecepcion}
              onChange={(e) => setMediaAtencionRecepcion(e.target.value)}
            />

          </div>
          <button type="submit" className="btn btn-info mt-3 boton">Aceptar</button>
        </form>
      </div>
    </div>
  )

}


export default Parametros;