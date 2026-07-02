import { Link } from "react-router-dom";
import { obtenerCarrito } from "../../services/productService";

function Carrito() {

    const carrito = obtenerCarrito();

    const total = carrito.reduce((suma, producto) => {

        return suma + Number(producto.precio);

    }, 0);

    return (

        <div className="max-w-6xl mx-auto px-8 py-16">

            <h1 className="text-4xl font-bold text-pink-700 mb-10">

                Carrito de Compras

            </h1>

            {

                carrito.length === 0 ?

                (

                    <p>

                        No hay productos agregados.

                    </p>

                )

                :

                (

                    <>

                        <div className="space-y-4">

                            {

                                carrito.map((producto, index) => (

                                    <div

                                        key={index}

                                        className="bg-white shadow rounded-xl p-6 flex justify-between"

                                    >

                                        <div>

                                            <h2 className="font-bold text-xl">

                                                {producto.nombre}

                                            </h2>

                                            <p>

                                                {producto.descripcion}

                                            </p>

                                        </div>

                                        <span className="font-bold text-pink-700">

                                            S/. {producto.precio}

                                        </span>

                                    </div>

                                ))

                            }

                        </div>

                        <div className="mt-10 text-right">

                            <h2 className="text-3xl font-bold mb-6">

                                Total: S/. {total}

                            </h2>

                            <Link

                                to="/checkout"

                                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-lg"

                            >

                                Finalizar Compra

                            </Link>

                        </div>

                    </>

                )

            }

        </div>

    );

}

export default Carrito;