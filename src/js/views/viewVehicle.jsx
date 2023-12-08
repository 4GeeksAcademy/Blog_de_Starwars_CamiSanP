
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import "../../styles/home.css";
import { useParams } from "react-router-dom";

export const ViewVehicle = () => {

    const [detalleVehiculo, setdetalleVehiculo] = useState([]);
    const params = useParams()
    function obtenerInfoDeUnVehiculo() {
        fetch("https://swapi.dev/api/vehicles/" + params.theid)
            .then((res) => res.json())
            .then((data) => setdetalleVehiculo(data))
            .catch((err) => console.error(err));
    }
    console.log(detalleVehiculo);
    console.log(params.theid);

    useEffect(() => {
        obtenerInfoDeUnVehiculo()
    }, [])

    return (
        <div>
            <div className="card mb-3 border-0" >
                <div className="row g-0">
                    <div className="col-md container">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                            }}
                            style={{ width: '500px', height: '600px' }}
                            className="img-fluid rounded-start"
                            alt="..."
                        />                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-center">{detalleVehiculo.name}</h1>
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
                        <p>{detalleVehiculo.name}</p>
                    </div>
                    <div className='col-md-2'>
                        <strong>Model</strong>
                        <p>{detalleVehiculo.model}</p>
                    </div>
                    <div className='col-md-2'>
                        <strong>Vehicle Class</strong>
                        <p>{detalleVehiculo.vehicle_class}</p>
                    </div>
                    <div className='col-md-2'>
                        <strong>Passengers</strong>
                        <p>{detalleVehiculo.passengers}</p>
                    </div>
                    <div className='col-md-2'>
                        <strong>Crew</strong>
                        <p>{detalleVehiculo.crew}</p>
                    </div>
                </div>
            </div>

        </div>

    );
}