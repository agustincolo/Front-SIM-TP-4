import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PostSimulacion } from "../service/simulacion.service";

const Parametros = () => {

  const [cantidadSimulaciones, setCantidadSimulaciones] = useState('');
  const [desdeSimulaciones, setDesdeSimulaciones] = useState('');
  const [hastaSimulaciones, setHastaSimulaciones] = useState('');

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
        mediaLlegadaGeneral: 1,
        mediaLlegadaEmergencia: 2.0,
        mediaLlegadaEspecialista: 7.0,
        mediaLlegadaTerapia: 2.0,
        mediaAtencionGeneral: 2.0,
        mediaAtencionEmergencia: 7.0,
        mediaAtencionEspecialidad: 10.0,
        mediaAtencionTerapia: 56.0,
        mediaAtencionRecepcion: 5.0
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
      <div className="form-container">
        <h2 className="tituloSimulacion">Clinica medica</h2>
        <form onSubmit={handleSubmit}>
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
          <label htmlFor="rangoSimulaciones" className="texto py-2">Rango de simulaciones visibles</label>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Desde"
                value={desdeSimulaciones}
                onChange={(e) => setDesdeSimulaciones(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Hasta"
                value={hastaSimulaciones}
                onChange={(e) => setHastaSimulaciones(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-info mt-3 boton">Aceptar</button>
        </form>
      </div>
    </div>
  )

}


export default Parametros;