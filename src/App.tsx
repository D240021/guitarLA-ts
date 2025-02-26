import Header from './Componentes/Header';
import Guitarra from './Componentes/Guitarra';
import { useCart } from './Hooks/useCart';

function App() {

    
    const { datos, eliminarDeCarrito, incrementarCantidad,
         decrementarCantidad, vaciarCarrito, carrito,
          agregarAlCarrito, totalCarrito, estaCarritoVacio } = useCart(); //Este costum hook es como una instancia de una clase, cada instancia tiene su propio estado. 
          // Si se llama a useCart en otro componente, se crea una nueva instancia con su propio estado. Por eso se pasa por props algunas funciones en el Header 

        
    

    return (
        <>

            <Header 
                carrito = {carrito}
                eliminarDeCarrito = {eliminarDeCarrito}
                incrementarCantidad = {incrementarCantidad}
                decrementarCantidad = {decrementarCantidad}
                vaciarCarrito = {vaciarCarrito}
                totalCarrito = {totalCarrito}
                estaCarritoVacio = {estaCarritoVacio}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {
                        datos.map((guitarra) => (
                            <Guitarra
                                key = {guitarra.id}
                                guitarra = {guitarra}
                                agregarAlCarrito = {agregarAlCarrito}
                            />
                        ))
                    }
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
