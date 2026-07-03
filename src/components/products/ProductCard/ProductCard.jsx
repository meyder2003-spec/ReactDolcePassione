import { obtenerCarrito, guardarCarrito } from "../../../services/productService";

function ProductCard({ producto }) {

    function agregarAlCarrito() {
        const carrito = obtenerCarrito();
        carrito.push(producto);
        guardarCarrito(carrito);
        alert(`${producto.nombre} fue agregado al carrito.`);839217
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-[340px] w-full mx-auto flex flex-col justify-between h-full">
            
            <div>
                <div className="relative overflow-hidden h-48 w-full bg-pink-50">
                    <img 
                        src={producto.imagen} 
                        alt={producto.nombre} 
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-pink-700 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        {producto.categoria}
                    </span>
                </div>

                <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                        {producto.nombre}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                        {producto.descripcion}
                    </p>
                </div>
            </div>
            <div className="p-5 pt-0 border-t border-gray-50 flex justify-between items-center bg-gray-50/50">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Precio</span>
                    <span className="text-xl font-extrabold text-pink-600">
                        S/. {producto.precio.toFixed(2)}
                    </span>
                </div>

                <button
                    onClick={agregarAlCarrito}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 transition-all active:scale-95"
                >
                    Agregar
                </button>
            </div>

        </div>
    );
}

export default ProductCard;