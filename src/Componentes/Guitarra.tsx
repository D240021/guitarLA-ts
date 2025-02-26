import type { Guitarra } from "../Tipos/Modelos/Guitarra";

interface GuitarraProps {
    guitarra: Guitarra,
    agregarAlCarrito: (guitarra: Guitarra) => void
};

export default function Guitarra({ guitarra, agregarAlCarrito } : GuitarraProps) {

    const { name, description, price, image } = guitarra;



    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">${price}</p>
                    <button
                        className="btn btn-dark"
                        type="button"
                        onClick={() => agregarAlCarrito(guitarra)} //Se usa callback para que la función no se ejecute inmediatamente
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )

};