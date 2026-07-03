import { useEffect, useState } from "react";
import { obtenerProductos } from "../../services/productService";
import ProductCard from "../../components/products/ProductCard/ProductCard";

function Ofertas() {
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        cargarOfertas();
    }, []);

    async function cargarOfertas() {
        const datos = await obtenerProductos();
        
        if (Array.isArray(datos)) {
            const productosConDescuento = datos.slice(0, 4).map((producto) => {
                const precioBase = Number(producto.precio) || 0;
                const precioConDescuento = precioBase * 0.90;

                return {
                    ...producto,
                    precioAnterior: precioBase,
                    precio: precioConDescuento
                };
            });
            setOfertas(productosConDescuento);
        }
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            
            <header className="text-center flex flex-col items-center justify-center mb-10">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#232B32] tracking-tight">
                    Ofertas Especiales
                </h1>
                <div className="w-16 h-[4px] bg-[#F2C12E] rounded-full mt-3 shadow-sm"></div>
                <p className="text-sm sm:text-base text-[#5A6571] mt-3 max-w-md font-medium">
                    Aprovecha nuestras promociones exclusivas con el 10% de descuento por tiempo limitado.
                </p>
            </header>

            {ofertas.length === 0 ? (
                <div className="bg-[#F8F9FA] rounded-xl shadow-md border-t-[6px] border-[#F2C12E] p-8 text-center max-w-xl mx-auto">
                    <p className="text-[#5A6571] text-base font-medium">
                        No hay ofertas disponibles en este momento. ¡Vuelve pronto!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ofertas.map((producto) => (
                        <div key={producto.id} className="relative group">
                            <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-black uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider">
                                -10% Descuento
                            </div>
                            
                            <ProductCard producto={producto} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Ofertas;