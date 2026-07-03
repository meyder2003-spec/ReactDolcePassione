import { useEffect, useState } from "react";
import { obtenerProductos } from "../../services/productService";
import ProductCard from "../../components/products/ProductCard/ProductCard";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

    const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

    useEffect(() => {
        cargarProductos();
    }, []);

    async function cargarProductos() {
        const datos = await obtenerProductos();
        setProductos(datos);
    }

    const productosFiltrados = categoriaSeleccionada === "Todos"
        ? productos
        : productos.filter((p) => p.categoria === categoriaSeleccionada);

    return (
        <div className="bg-gradient-to-b from-rose-50/40 via-white to-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">

            <header className="w-full max-w-4xl mx-auto text-center mb-16 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-full px-3 py-1 mb-6">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                        Dulces Momentos
                    </span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight mb-6 text-center">
                    Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Creaciones</span>
                </h1>
                
                <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed text-center">
                    Postres artesanales horneados diariamente con ingredientes premium. Un capricho perfecto para cada celebración.
                </p>
            </header>


            <nav className="w-full max-w-7xl mx-auto mb-48 flex justify-center" aria-label="Filtro de categorías">
                <div className="flex flex-wrap justify-center gap-3 bg-pink-50/50 p-2.5 rounded-2xl border border-pink-100/60 shadow-sm mx-auto backdrop-blur-sm">
                    {categorias.map((cat) => {
                        const esActivo = categoriaSeleccionada === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setCategoriaSeleccionada(cat)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform outline-none select-none ${
                                    esActivo
                                        ? "bg-[#C6676D] text-white shadow-md shadow-rose-200 scale-105 ring-2 ring-[#C6676D]/20"
                                        : "text-[#C6676D] hover:text-white bg-white hover:bg-[#C6676D]/80 border border-pink-100 shadow-sm"
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </nav>


            <main className="w-full max-w-7xl mx-auto flex justify-center">
                {productosFiltrados.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full justify-items-center">
                        {productosFiltrados.map((producto) => (
                            <div 
                                key={producto.id} 
                                className="transition-all duration-500 transform hover:scale-[1.02] w-full flex justify-center"
                            >
                                <ProductCard producto={producto} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full justify-items-center">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="bg-gray-100 animate-pulse rounded-2xl h-80 w-full max-w-[340px]"></div>
                        ))}
                    </div>
                )}
            </main>

        </div>
    );
}

export default Productos;