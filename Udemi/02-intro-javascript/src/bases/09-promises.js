import { getHeroeById } from "../bases/08-exportaciones";

//Se ejecuta el resolve y solo después de ejecutará el .then, sin el resolve()
//no pasará por el then()
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(getHeroeById(2));
    //Esto mostrará en el catch el error en caso de no encontrar el héroe
    reject("No se pudo encontrar el héroe");
  }, 2000);
});

//Debemos hacerlo función, sino no esperará los 2 segundos, el héroe lo recibe del resolve()
//en caso de no cumplir la promesa mostrará un warning con el mensaje heredado del reject
promesa
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((err) => console.warn(err));

// Otra forma de hacerlo:

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe1 = getHeroeById(id);
      if (heroe1) {
        resolve(heroe1);
      } else {
        //Esto mostrará en el catch el error en caso de no encontrar el héroe
        reject("No se pudo encontrar el héroe asíncrono");
      }
    }, 2000);
  });
};

//Directamente recibe el objeto y lo imprime (resolve) o muestra el error (reject)
getHeroeByIdAsync(15).then(console.log).catch(console.warn);
