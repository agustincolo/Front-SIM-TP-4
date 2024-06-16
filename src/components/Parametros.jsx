import { useState } from "react";
import { Link } from "react-router-dom";

const Parametros = () => {

  const [cantidadSimulaciones, setCantidadSimulaciones] = useState('');
  const [desdeSimulaciones, setDesdeSimulaciones] = useState('');
  const [hastaSimulaciones, setHastaSimulaciones] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Cantidad de Simulaciones:", cantidadSimulaciones);
    console.log("Desde:", desdeSimulaciones);
    console.log("Hasta:", hastaSimulaciones);
    
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
          <Link to={"/Vector"}><button type="submit" className="btn btn-info mt-3 boton">Aceptar</button></Link>
        </form>
      </div>
    </div>
  )

}


export default Parametros;