import { Link } from "react-router-dom";

function Navbar() {

    return (

        <header className="bg-[#C6676D] shadow-md">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                <h1 className="text-2xl font-bold text-white">

                    Dolce Passione

                </h1>

                <nav>

                    <ul className="flex gap-8 text-white font-medium">

                        <li>
                            <Link to="/">Inicio</Link>
                        </li>

                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>

                        <li>
                            <Link to="/productos">Productos</Link>
                        </li>

                        <li>
                            <Link to="/ofertas">Ofertas</Link>
                        </li>

                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>

                        <li>
                            <Link to="/carrito">Carrito</Link>
                        </li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;