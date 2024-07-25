/* eslint-disable react-hooks/rules-of-hooks */

//ASIGNACIÓN DESESTRUCTURANTE
const persona = {
  nombre: `Tony`,
  edad: 30,
  clave: `IronMan`,
};

const useContext = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anyos: edad,
    latlng: {
      lat: 13456,
      lng: -56789,
    },
  };
};

//Para extraer un objeto dentro de otro lo introduzco entre llaves
const {
  nombreClave,
  anyos,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anyos);
console.log(lat, lng);
