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

        setOfertas(datos.slice(0, 4));

    }

    return (

        <div className="max-w-7xl mx-auto px-8 py-16">

            <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">

                Ofertas Especiales

            </h1>

            <p className="text-center text-gray-600 mb-12">

                Aprovecha nuestras promociones por tiempo limitado.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                {

                    ofertas.map((producto) => (

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

export default Ofertas;