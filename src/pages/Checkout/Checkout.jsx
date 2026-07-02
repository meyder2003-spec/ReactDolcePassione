import { useState } from "react";
import { obtenerCarrito } from "../../services/productService";

function Checkout() {

    const carrito = obtenerCarrito();

    const total = carrito.reduce((suma, producto) => {

        return suma + Number(producto.precio);

    }, 0);

    const [datos, setDatos] = useState({

        nombre: "",
        correo: "",
        direccion: "",
        telefono: ""

    });

    function cambiar(e) {

        setDatos({

            ...datos,

            [e.target.name]: e.target.value

        });

    }

    function confirmar(e) {

        e.preventDefault();

        alert("Pedido realizado correctamente.");

        localStorage.removeItem("carrito");

    }

    return (

        <div className="max-w-4xl mx-auto px-8 py-16">

            <h1 className="text-4xl font-bold text-pink-700 mb-10">

                Finalizar Compra

            </h1>

            <form
                onSubmit={confirmar}
                className="bg-white shadow rounded-xl p-8 space-y-5"
            >

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    className="w-full border rounded-lg p-3"
                    onChange={cambiar}
                    required
                />

                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    className="w-full border rounded-lg p-3"
                    onChange={cambiar}
                    required
                />

                <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    className="w-full border rounded-lg p-3"
                    onChange={cambiar}
                    required
                />

                <input
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    className="w-full border rounded-lg p-3"
                    onChange={cambiar}
                    required
                />

                <h2 className="text-3xl font-bold">

                    Total: S/. {total}

                </h2>

                <button
                    className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-lg"
                >

                    Confirmar Pedido

                </button>

            </form>

        </div>

    );

}

export default Checkout;