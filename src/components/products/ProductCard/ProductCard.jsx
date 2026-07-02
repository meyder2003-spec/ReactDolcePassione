import { obtenerCarrito, guardarCarrito } from "../../../services/productService";

function ProductCard({ producto }) {

    function agregarAlCarrito() {

        const carrito = obtenerCarrito();

        carrito.push(producto);

        guardarCarrito(carrito);

        alert(`${producto.nombre} fue agregado al carrito.`);

    }

    return (

        <div className="bg-white rounded-xl shadow-md border border-pink-200 overflow-hidden hover:shadow-xl transition duration-300 max-w-[320px] mx-auto">

            <div className="h-40 bg-pink-100 flex items-center justify-center">

                Imagen del producto

            </div>

            <div className="p-4">

                <p className="text-sm text-pink-700 font-semibold mb-2">

                    {producto.categoria}

                </p>

                <h2 className="text-lg font-bold text-gray-800 mb-2">

                    {producto.nombre}

                </h2>

                <p className="text-gray-600 text-sm mb-5">

                    {producto.descripcion}

                </p>

                <div className="flex justify-between items-center">

                    <span className="text-xl font-bold text-pink-700">

                        S/. {producto.precio}

                    </span>

                    <button
                        onClick={agregarAlCarrito}
                        className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-lg"
                    >

                        Agregar

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;