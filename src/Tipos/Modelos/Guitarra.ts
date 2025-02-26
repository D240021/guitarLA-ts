//Utilizando el interface

// export interface Guitarra  {
//     id: number,
//     name: string,
//     image: string,
//     price: number,
//     description: string,

// };

// export interface GuitarraCarrito extends Guitarra { //Esto es una herencia del type Guitarra
//     quantity: number
// };

//Utilizando el type

export type Guitarra = {
    id: number,
    name: string,
    image: string,
    price: number,
    description: string,

};

export type GuitarraCarrito = Guitarra &{ //Esto es una herencia del type Guitarra
    quantity: number
};

// export type GuitarraId = Pick<Guitarra, 'id'>; //Esto es por si el ID cambia de tipo en el futuro, no tener que cambiarlo en todos los sitios donde se utilice

// export type GuitarraId = Guitarra['id']; //Esta es otra forma de hacerlo

//Utilizando Utility Types. Pick es un utility type que nos permite seleccionar las propiedades que queremos de un type
// export type GuitarraCarrito = Pick<Guitarra,'id'| 'name'> & { //Esto es una herencia del type Guitarra
//Entre llaves se pueden poner las propiedades que queremos añadir al type

// export type GuitarraCarrito = Pick<Guitarra,'id',| 'name'> & { //Esto es una herencia del type Guitarra
//     quantity: number
// };

//Existen distintos utility types que nos permiten trabajar con los types de una forma más sencilla. Por ejemplo, Partial nos permite hacer todas las propiedades de un type opcionales