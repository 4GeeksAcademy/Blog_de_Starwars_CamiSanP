
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import "../../styles/home.css";
import { useParams } from "react-router-dom";

export const ViewCharacters = () => {

  const [detallePersonaje, setDetallePersonaje] = useState([]);
  const params = useParams()
  function obtenerInfoDeUnPersonaje() {
    fetch("https://swapi.dev/api/people/" + params.theid)
      .then((res) => res.json())
      .then((data) => setDetallePersonaje(data))
      .catch((err) => console.error(err));
  }
  console.log(detallePersonaje);
  console.log(params.theid);

  useEffect(() => {
    obtenerInfoDeUnPersonaje()
  }, [])

  return (
    <div>
      <div className="card mb-3 border-0" >
        <div className="row g-0">
          <div className="col-md container">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.theid) + ".jpg"} style={{ width: "500px", height: "600px" }} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text-center">{detallePersonaje.name}</h1>
              <p className="card-text"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur egestas nisi quis efficitur. Ut et enim ac lectus suscipit placerat non quis nisi. Duis auctor neque nec mi euismod consectetur. Phasellus tristique leo eget elit gravida, sit amet fringilla odio tempus. Nam accumsan nisl ac purus hendrerit, ac tempus ipsum efficitur. Maecenas eget pretium metus. Duis nec erat sed odio tempor gravida. Pellentesque vestibulum posuere purus, vel vestibulum libero ullamcorper eget. Suspendisse potenti. Vestibulum dignissim fringilla malesuada. Pellentesque varius molestie metus, et bibendum lacus laoreet vel. Donec eu nibh in lectus luctus venenatis nec eget lacus. Nullam sit amet nibh dapibus, congue ligula eu, egestas turpis. Aliquam tortor lorem, sodales ut maximus vel, malesuada sed neque.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ height: "5px", color: "red" }} />
      </div>

      <div className='container mt-5 text-danger text-center'>
        <div className='row g-0'>
          <div className='col-md-2'>
            <strong>Name</strong>
            <p>{detallePersonaje.name}</p>
          </div>
          <div className='col-md-2'>
            <strong>Birth Year</strong>
            <p>{detallePersonaje.birth_year}</p>
          </div>
          <div className='col-md-2'>
            <strong>Eye Color</strong>
            <p>{detallePersonaje.eye_color}</p>
          </div>
          <div className='col-md-2'>
            <strong>Skin Color</strong>
            <p>{detallePersonaje.skin_color}</p>
          </div>
          <div className='col-md-2'>
            <strong>Height</strong>
            <p>{detallePersonaje.height}</p>
          </div>
        </div>
      </div>

    </div>

  );
}