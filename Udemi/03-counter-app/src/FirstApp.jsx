import PropTypes from "prop-types";

///Para agrupar basta con abrir y cerrar diamantes
///con stringify puedo mostrar el objeto como un string
///Podemos iniciar el estado del titulo directamente desde los paréntesis de la funcion en
///el caso de no asignarle un valor
export const FirstApp = ({ title, subTitle, nombre }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{nombre}</h2>

      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.number,
};

///Props por defecto
FirstApp.defaultProps = {
  name: "No hay nombre",
  subTitle: "No hay subtítulo",
  title: "No hay titulo",
};
