/* eslint-disable react-hooks/rules-of-hooks */
//Desestructuración de arrays
const personajes = [`Goku`, `Vegeta`, `Trunks`];

const [p1, p2, p3] = personajes;

//Extraigo los objetos de cada posición y ya puedo utilizarlos como y donde quiera
console.log(p2, p3, p1);

//Aquí es más de lo mismo, me devuelve un array con dos posiciones
const retornaArreglo = () => {
  return ["ABC", 123];
};
//Guardo los valores en dos objetos por la posición
const [letras, numeros] = retornaArreglo();

//Ya puedo llamarlos donde quiera en cualquier posición
console.log(letras, numeros, letras);

//TAREA
//Mostrar el nombre y la función del useState desde una constante Array

//Esta funcion nos devuelve en la constante useState() un valor y una función declarada
//dentro de un Array[]
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log(`Hola Mundo`);
    },
  ];
};

//Desde aquí desestructuramos ambos objetos en otra constante por su posición
const [nombre, setNombre] = useState(`Goku`);

console.log(nombre);
setNombre();
