import agua from "./img/agua.jpg";
import caminar from "./img/caminar.jpg";
import mascarilla from "./img/mascarilla.jpg";
import articulo from "./img/articulo.jpg";

const extras = () => {
  const styles = { width: "17rem" };

  const recomendacionesData = [
    {
      image: agua,
      title: "Toma 2 litros de agua al día",
      content:
        "Para una hidratación correcta al día son necesarios 2 litros de agua.",
    },
    {
      image: caminar,
      title: "Camina 10 mil pasos al día",
      content:
        "La OMS recomienda caminar un mínimo de 10 mil pasos al día para combatir con el sedenterismo.",
    },
    {
      image: mascarilla,
      title: "Lleva tu mascarilla siempre",
      content:
        "Todavía hay miles de casos de coronavirus al día, ¡no bajes la guardia!",
    },
  ];

  const articulosData = [
    {
      image: articulo,
      title: "Artículo 1",
      content: "Resumen de artículo 1.",
    },
    {
      image: articulo,
      title: "Artículo 2",
      content: "Resumen de artículo 2.",
    },
    {
      image: articulo,
      title: "Artículo 3",
      content: "Resumen de artículo 3.",
    }
  ];

  const recomendaciones = () => {
    return (
      <>
        {recomendacionesData.map((recomendacion) => {
          return (
            <div className="card m-2" style={styles}>
              <img src={recomendacion.image} className="card-img-top mt-3 rounded" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recomendacion.title}</h5>
                <p className="card-text">{recomendacion.content}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const articulos = () => {
    return(
      <>
        {articulosData.map((articulo) => {
          return (
            <div className="card m-2" style={styles}>
              <img
                src={articulo.image}
                className="card-img-top mt-3 rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{articulo.title}</h5>
                <p className="card-text">{articulo.content}</p>
                <a href="#" className="btn btn-primary">
                  Ver artículo
                </a>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  const cardsRecomendaciones = () => {
    return (
      <div className="col-md-6">
        <div className="bg-white rounded p-3 h-100">
          <h2 className="pt-2 pb-2">Recomendaciones:</h2>
          <div className="row">
            {recomendaciones()}
          </div>
        </div>
      </div>
    );
  };

  const cardsArticulos = () => {
    return (
      <div className="col-md-6">
        <div className="bg-white rounded p-3 h-100">
          <h2 className="pt-2 pb-2">Artículos personalizados:</h2>
          <div className="row">
            {articulos()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ps-5 pe-5 mt-4 mb-4">
      <div className="row">
        {cardsRecomendaciones()}
        {cardsArticulos()}
      </div>
    </div>
  );
};

export default extras;
