import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const enlaces = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/nosotros" },
        { name: "Productos", path: "/productos" },
        { name: "Ofertas", path: "/ofertas" },
        { name: "Contacto", path: "/contacto" },
    ];

    return (
        <header className="bg-[#C6676D]/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 py-4">
                
                <Link to="/" className="group flex items-center gap-2">
                    <span className="text-2xl font-black text-white tracking-wide font-serif group-hover:text-pink-100 transition-colors">
                        Dolce <span className="text-pink-200 group-hover:text-white">Passione</span>
                    </span>
                </Link>

                <nav className="flex items-center gap-8">
                    <ul className="hidden md:flex gap-8 text-white font-semibold text-sm tracking-wide">
                        {enlaces.map((enlace) => {
                            const isActive = location.pathname === enlace.path;
                            return (
                                <li key={enlace.path} className="relative py-1 group">
                                    <Link 
                                        to={enlace.path}
                                        className={`transition-colors duration-300 ${
                                            isActive ? "text-pink-200" : "text-white hover:text-pink-100"
                                        }`}
                                    >
                                        {enlace.name}
                                    </Link>
                                    <span className={`absolute bottom-0 left-0 h-[2px] bg-pink-200 transition-all duration-300 ${
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`}></span>
                                </li>
                            );
                        })}
                    </ul>
                    <Link 
                        to="/carrito" 
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-xl border border-white/20 transition-all active:scale-95 shadow-sm"
                    >
                        <span>Carrito</span>
                    </Link>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;