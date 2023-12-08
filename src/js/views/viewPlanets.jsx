
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import "../../styles/home.css";
import { useParams } from "react-router-dom";

export const ViewPlanets = () => {

  const [detallePlaneta, setDetallePlaneta] = useState([]);
  const params = useParams()
  function obtenerInfoDeUnPlaneta() {
    fetch("https://swapi.dev/api/planets/" + params.theid)
      .then((res) => res.json())
      .then((data) => setDetallePlaneta(data))
      .catch((err) => console.error(err));
  }
  console.log(detallePlaneta);
  console.log(params.theid);

  useEffect(() => {
    obtenerInfoDeUnPlaneta()
  }, [])

  return (
    <div>
      <div className="card mb-3 border-0" >
        <div className="row g-0">
          <div className="col-md container">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
              onError={(e) => {
                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
              }}
              style={{ width: '500px', height: '600px' }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text-center">{detallePlaneta.name}</h1>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur egestas nisi quis efficitur. Ut et enim ac lectus suscipit placerat non quis nisi. Duis auctor neque nec mi euismod consectetur. Phasellus tristique leo eget elit gravida, sit amet fringilla odio tempus. Nam accumsan nisl ac purus hendrerit, ac tempus ipsum efficitur. Maecenas eget pretium metus. Duis nec erat sed odio tempor gravida. Pellentesque vestibulum posuere purus, vel vestibulum libero ullamcorper eget. Suspendisse potenti. Vestibulum dignissim fringilla malesuada. Pellentesque varius molestie metus, et bibendum lacus laoreet vel. Donec eu nibh in lectus luctus venenatis nec eget lacus. Nullam sit amet nibh dapibus, congue ligula eu, egestas turpis. Aliquam tortor lorem, sodales ut maximus vel, malesuada sed neque.</p>

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
            <p>{detallePlaneta.name}</p>
          </div>
          <div className='col-md-2'>
            <strong>Climate</strong>
            <p>{detallePlaneta.climate}</p>
          </div>
          <div className='col-md-2'>
            <strong>Population</strong>
            <p>{detallePlaneta.population}</p>
          </div>
          <div className='col-md-2'>
            <strong>Orbital Period</strong>
            <p>{detallePlaneta.orbital_period}</p>
          </div>
          <div className='col-md-2'>
            <strong>Rotation Period</strong>
            <p>{detallePlaneta.rotation_period}</p>
          </div>
          <div className='col-md-2'>
            <strong>Diameter</strong>
            <p>{detallePlaneta.diameter}</p>
          </div>
        </div>
      </div>

    </div>

  );
}