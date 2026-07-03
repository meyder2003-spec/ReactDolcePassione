import { useState } from "react";
import { Link } from "react-router-dom";
import * as productService from "../../services/productService";

function Carrito() {
    const [productos, setProductos] = useState(() => {
        if (productService && typeof productService.obtenerCarrito === "function") {
            const datos = productService.obtenerCarrito();
            return Array.isArray(datos) ? datos : [];
        }
        return [];
    });

    const total = productos.reduce((suma, producto) => {
        const precio = producto && producto.precio ? Number(producto.precio) : 0;
        return suma + (isNaN(precio) ? 0 : precio);
    }, 0);

    const handleEliminar = (index) => {
        if (productService && typeof productService.eliminarDelCarrito === "function") {
            productService.eliminarDelCarrito(index);
        }
        
        const nuevoCarrito = productos.filter((_, i) => i !== index);
        setProductos(nuevoCarrito);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            
            <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 pb-4 mb-8 gap-4">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#232B32] tracking-tight">
                    Carrito de Compras
                </h1>
                
                <Link
                    to="/productos"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#232B32] hover:text-[#5A6571] bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm transition-all duration-200 hover:bg-gray-50"
                >
                    Seguir Comprando
                </Link>
            </div>

            {
                productos.length === 0 ? 
                (
                    <div className="bg-[#F8F9FA] rounded-xl shadow-md border-t-[6px] border-[#F2C12E] p-8 text-center">
                        <p className="text-[#5A6571] text-base mb-6 font-medium">
                            No hay productos agregados en tu canasta.
                        </p>
                        <Link 
                            to="/productos" 
                            className="inline-block bg-[#232B32] hover:bg-[#2d373f] text-[#F2C12E] border border-[#F2C12E] px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-200"
                        >
                            Ver Catálogo
                        </Link>
                    </div>
                ) 
                : 
                (
                    <>
                        <div className="space-y-4">
                            {
                                productos.map((producto, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#F8F9FA] shadow-md rounded-xl border-l-[5px] border-[#F2C12E] p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-200 hover:scale-[1.01]"
                                    >
                                        <div className="flex-grow pr-2">
                                            <h2 className="font-bold text-lg sm:text-xl text-[#232B32]">
                                                {producto?.nombre || "Producto sin nombre"}
                                            </h2>
                                            <p className="text-sm text-[#5A6571] mt-1">
                                                {producto?.descripcion || "Sin descripción"}
                                            </p>
                                        </div>

                                        <div className="w-full sm:w-auto flex justify-between sm:justify-end items-center gap-6 border-t sm:border-0 pt-3 sm:pt-0 border-gray-200">
                                            <span className="font-extrabold text-[#232B32] text-base sm:text-lg whitespace-nowrap">
                                                S/. {Number(producto?.precio || 0).toFixed(2)}
                                            </span>
                                            
                                            <button
                                                type="button"
                                                onClick={() => handleEliminar(index)}
                                                className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2.5 rounded-lg transition-colors duration-200 flex items-center gap-1 text-sm font-semibold shadow-sm"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="mt-10 bg-[#FFF8E1] border border-[#FFE082] rounded-xl p-6 shadow-md flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-black text-[#232B32]">
                                    Total: S/. {total.toFixed(2)}
                                </h2>
                                <p className="text-xs text-[#625338] mt-0.5">
                                    Precios expresados en moneda nacional (S/.)
                                </p>
                            </div>
                            
                            <Link
                                to="/checkout"
                                className="w-full sm:w-auto bg-[#232B32] hover:bg-[#2d373f] text-[#F2C12E] border border-[#F2C12E] text-center px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors duration-200 shadow-md"
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