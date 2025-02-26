import { useState, useEffect, useMemo } from 'react';
import { db } from '../Datos/db';
import { MAX_ELEMENTOS_CARRITO, MIN_ELEMENTOS_CARRITO } from '../Util/constantes';
import type { Guitarra, GuitarraCarrito } from '../Tipos/Modelos/Guitarra';

export const useCart = () => {

    const carritoInicial = () : GuitarraCarrito[] => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    };

    //useState es asíncrono
    const [datos] = useState(db);
    const [carrito, setCarrito] = useState(carritoInicial);


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    function agregarAlCarrito(elemento : Guitarra) {

        const existeElemento = carrito.findIndex(item => item.id === elemento.id);

        if (existeElemento >= 0) {

            if (carrito[existeElemento].quantity >= MAX_ELEMENTOS_CARRITO) return;
            const carritoActualizado = [...carrito];
            carritoActualizado[existeElemento].quantity += 1;
            setCarrito(carritoActualizado); //Esto se hace porque si hacemos el cambio directamente en el carrito, se rompe la inmutabilidad del useState
        } else {
            const nuevoElemento : GuitarraCarrito= { ...elemento, quantity : 1 };
            setCarrito([...carrito, nuevoElemento]);
        }
    };

    function eliminarDeCarrito(id: Guitarra['id']) {
        setCarrito(prevCarrito => prevCarrito.filter(guitarra => guitarra.id !== id));
    };

    function incrementarCantidad(id: Guitarra['id']) {
        const carritoActualizado = carrito.map(guitarra => {
            if (guitarra.id === id && guitarra.quantity < MAX_ELEMENTOS_CARRITO) {
                return {
                    ...guitarra,
                    quantity: guitarra.quantity + 1
                };
            }
            return guitarra;
        });
        setCarrito(carritoActualizado);
    };

    function decrementarCantidad(id: Guitarra['id']) {
        const carritoActualizado = carrito.map(guitarra => {
            if (id === guitarra.id && guitarra.quantity > MIN_ELEMENTOS_CARRITO)
                return { ...guitarra, quantity: guitarra.quantity - 1 }

            return guitarra;
        });
        setCarrito(carritoActualizado);
    }

    function vaciarCarrito() {
        setCarrito([]);
    }

    //state derivado porque es un derivado del useState de carrito
    const estaCarritoVacio =  useMemo (() => carrito.length === 0, [carrito]); // El useMemo quiere decir que la función se va a ejecutar solo si cambia el carrito
    const totalCarrito =  useMemo( () => carrito.reduce ( (total, elemento ) => total + (elemento.price * elemento.quantity), 0), [carrito]); // El useMemo quiere decir que la función se va a ejecutar solo si cambia el carrito

    return {
        datos,
        carrito,
        agregarAlCarrito,
        eliminarDeCarrito,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
        estaCarritoVacio,
        totalCarrito
    }
};