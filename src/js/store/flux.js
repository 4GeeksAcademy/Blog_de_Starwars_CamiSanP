const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            personajes: [],
            vehiculos: [],
            planetas: [],
            favoritos: [],
        },
        actions: {
            // Este es el fetch de personajes
            //   },
            obtenerInfoPersonajes: () => {
                fetch("https://swapi.dev/api/people/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Este es el fetch de vehiculos
            obtenerInfoVehiculos: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehiculos: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Este es el fetch de los planetas
            obtenerInfoPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            loadSomeData: () => {
                /**
                        	fetch().then().then(data => setStore({ "foo": data.bar }))
                        */
            },
           
            agregarFavorito: (favorito) => {
                console.log("funciona");
                let store = getStore(); //aca declaro una variable store y guardo la llamada del objeto store del flux
                if (favorito !== "" && !store.favoritos.includes(favorito))
                    setStore({
                        favoritos: [...store.favoritos, favorito]
                    }); // aca seteamos, con set store, seteamos el valor de la propiedad favorito del objeto store ...store.favoritos
            },

            eliminarFavorito: (favorito) => {
                console.log("funciona");
                let store = getStore(); //aca declaro una variable store y guardo la llamada del objeto store del flux
                setStore({
                    favoritos: store.favoritos.filter((fav) => fav !== favorito),
                }); // aca seteamos, con set store, seteamos el valor de la propiedad favorito del objeto store ...store.favoritos
            },
        },
    };
};

export default getState;