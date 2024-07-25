const activo = true;

const mensaje1 = !activo ? "Activo" : "Inactivo";
const mensaje2 = activo ? "Activo" : null;

//La condicion && sirve para que si se cumple la condición, se ejecute
const mensaje3 = !activo && "Activo";

console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);
