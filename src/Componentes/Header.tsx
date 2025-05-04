import { MAX_ELEMENTOS_CARRITO, MIN_ELEMENTOS_CARRITO } from "../Util/constantes";
import type { GuitarraCarrito } from "../Tipos/Modelos/Guitarra";
import type { Guitarra } from "../Tipos/Modelos/Guitarra";

interface HeaderProps {
    carrito: GuitarraCarrito[],
    eliminarDeCarrito: (id: Guitarra['id']) => void,
    incrementarCantidad: (id: Guitarra['id']) => void,
    decrementarCantidad: (id: Guitarra['id']) => void,
    vaciarCarrito: () => void,
    totalCarrito: number,
    estaCarritoVacio: boolean
}

export default function Header({ carrito, eliminarDeCarrito, incrementarCantidad, decrementarCantidad, vaciarCarrito, totalCarrito, estaCarritoVacio } : HeaderProps) {

    
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img
                                className="img-fluid"
                                src="./img/carrito.png"
                                alt="imagen carrito"
                            />

                            <div id="carrito" className="bg-white p-3">
                                {estaCarritoVacio ? ( //Al usar useMemo, estaCarritoVacio se convierte en una variable que se puede usar en el ternario, no es una función
                                    <p className="text-center">El carrito está vacío</p>

                                ) : (

                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {carrito.map((guitarra) => (
                                                    <tr key={guitarra.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`./img/${guitarra.image}.jpg`} alt="imagen guitarra" />
                                                        </td>
                                                        <td>{guitarra.name}</td>
                                                        <td className="fw-bold">${guitarra.price}</td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button 
                                                            type="button" 
                                                            className="btn btn-dark"
                                                            onClick = {() => decrementarCantidad(guitarra.id)}
                                                            disabled = {guitarra.quantity === MIN_ELEMENTOS_CARRITO}>-</button>
                                                            {guitarra.quantity}
                                                            <button 
                                                            type="button" 
                                                            className="btn btn-dark"
                                                            onClick={() => incrementarCantidad(guitarra.id)}
                                                            disabled = {guitarra.quantity === MAX_ELEMENTOS_CARRITO}
                                                            >+</button>
                                                        </td>
                                                        <td>
                                                            <button 
                                                            className="btn btn-danger" 
                                                            type="button"
                                                            onClick={() => eliminarDeCarrito(guitarra.id)}
                                                            >X</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>


                                        <p className="text-end">Total pagar: <span className="fw-bold">${totalCarrito}</span></p>
                                        <button 
                                        className="btn btn-dark w-100 mt-3 p-2"
                                        onClick = {vaciarCarrito}
                                        >Vaciar Carrito</button>
                                    </>
                                )}

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
