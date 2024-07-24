//Incompleto, necesito acceso a una API, con la URL realiza una promise, por cada archivo que
//reciba (resp), obtiene una data y extrae la URL de cada imagen en una constante, luego crea
//una imagen en el espacio de memoria y le asigna la url obtenida de la API,
//Por ultimo la muestra con document.body.append(img)

const apiKey = "Api key";
const peticion = fetch(`URL de la Api_key=${apiKey}`);
peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.on;
    const img = document.createElement();
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
