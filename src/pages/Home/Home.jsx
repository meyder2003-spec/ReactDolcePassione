import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../../services/productService";
import ProductCard from "../../components/products/ProductCard/ProductCard";

function Home() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        cargarProductos();

    }, []);

    async function cargarProductos() {

        const datos = await obtenerProductos();

        setProductos(datos.slice(0, 6));

    }

    return (

        <>

            <section className="bg-pink-100 py-20 text-center">

                <h1 className="text-5xl font-bold text-pink-700">

                    Dolce Passione

                </h1>

                <p className="mt-6 text-gray-700 text-lg">

                    Deliciosos postres preparados con dedicación para cada ocasión.

                </p>

                <Link
                    to="/productos"
                    className="inline-block mt-8 bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-lg"
                >

                    Ver Productos

                </Link>

            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-3xl font-bold mb-10 text-center">

                    Productos Destacados

                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

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
            </section>

            <section className="bg-pink-50 py-16">

                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold mb-10">

                        ¿Por qué elegirnos?

                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-xl shadow p-6">

                            <h3 className="font-bold mb-3">

                                Ingredientes de calidad

                            </h3>

                            <p>

                                Utilizamos ingredientes seleccionados para ofrecer el mejor sabor.

                            </p>

                        </div>

                        <div className="bg-white rounded-xl shadow p-6">

                            <h3 className="font-bold mb-3">

                                Preparación artesanal

                            </h3>

                            <p>

                                Cada postre es elaborado con dedicación y cuidado.

                            </p>

                        </div>

                        <div className="bg-white rounded-xl shadow p-6">

                            <h3 className="font-bold mb-3">

                                Atención personalizada

                            </h3>

                            <p>

                                Queremos que cada cliente tenga una excelente experiencia.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}

export default Home;