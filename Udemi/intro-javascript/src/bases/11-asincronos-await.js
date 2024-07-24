//Resultado asíncrono para recuperar una imagen

const getImagen = async () => {
  try {
    const apiKey = "Api key";

    //con await le pedimos que espere antes de ejecutar la siguiente linea de código
    //hacemos fetch de la url de la api para obtener la respuesta
    const respuesta = await fetch(`URL de la Api_key=${apiKey}`);

    //desestructuro la data de la respuesta de la api
    const { data } = await respuesta.json();

    //Desde data obtengo la url
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //Manejo del error
    console.error(error);
  }
};

getImagen();
