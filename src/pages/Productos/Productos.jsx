import { useEffect, useState } from "react";
import { obtenerProductos } from "../../services/productService";
import ProductCard from "../../components/products/ProductCard/ProductCard";

function Productos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        cargarProductos();

    }, []);

    async function cargarProductos() {

        const datos = await obtenerProductos();

        setProductos(datos);

    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Nuestros Productos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    productos.map((producto) => (
                    
                        <ProductCard
                    
                            key={producto.id}
                    
                            producto={producto}
                    
                        />
                    
                    ))
                }
            </div>

        </div>
    );

}

export default Productos;