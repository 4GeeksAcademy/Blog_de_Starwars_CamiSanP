import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/cardCharacters.jsx";
import { Vehicle } from "../component/cardVehicle.jsx";
import { Planets } from "../component/cardPlanets.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store } = useContext(Context)

	return (
		// aca se trae a la card de Personajes
		<div className="container" >

			<div className="">
				<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>CHARACTERS</strong></h1>
				<div className="d-flex">
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.personajes.map((cadaPersonaje, index) => (
							<Characters
								key={index}
								id={index + 1}
								nombrePersonaje={cadaPersonaje.name}
								generoPersonaje={cadaPersonaje.gender}
								ColorOjosPersonaje={cadaPersonaje.eye_color}
							/>
						))}
					</div>
				</div>
			</div>
			{/* aca se trae la card de Vehiculos */}
			<div className="">
				<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>VEHICLES</strong></h1>
				<div className="d-flex">
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.vehiculos.map((cadaVehiculo, index) => (
							<Vehicle
								key={index}
								id={index + 1}
								nombreVehiculo={cadaVehiculo.name}
								modeloVehiculo={cadaVehiculo.model}
							/>
						))}
					</div>
				</div>
			</div>
			{/* aca se trae la card de Planetas */}
			<div className="">
				<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>PLANETS</strong></h1>
				<div className="d-flex">
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.planetas.map((cadaPlaneta, index) => (
							<Planets
								key={index}
								id={index + 1}
								nombrePlaneta={cadaPlaneta.name}
								diametroPlaneta={cadaPlaneta.diameter}
								climaPlaneta={cadaPlaneta.climate}
							/>
						))}
					</div>
				</div>
			</div>
		</div>

	);
};
