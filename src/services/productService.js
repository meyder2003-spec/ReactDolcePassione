const API_URL = "http://localhost:3000/productos";

export async function obtenerProductos() {
    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener los productos.");
        }

        const datos = await respuesta.json();

        return datos;

    } catch (error) {
        console.error(error);
        return [];
    }

    
}

export function obtenerCarrito() {

    const carrito = localStorage.getItem("carrito");

    return carrito ? JSON.parse(carrito) : [];

}

export function guardarCarrito(carrito) {

    localStorage.setItem("carrito", JSON.stringify(carrito));

}