import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className="bg-[#232B32] border-b-2 border-[#F2C12E] w-full text-white relative">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                
                <Link to="/" className="text-[#F2C12E] font-black tracking-wider text-xl">
                    DOLCE PASSIONE
                </Link>

                <button
                    type="button"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F2C12E]"
                >
                    <span className={`block w-6 h-0.5 bg-[#F2C12E] transition-all duration-300 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#F2C12E] transition-all duration-300 ${menuAbierto ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#F2C12E] transition-all duration-300 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                <div className="hidden md:flex items-center space-x-6 font-bold text-sm uppercase tracking-wide">
                    <Link to="/" className="hover:text-[#F2C12E] transition-colors">Inicio</Link>
                    <Link to="/productos" className="hover:text-[#F2C12E] transition-colors">Productos</Link>
                    <Link to="/nosotros" className="hover:text-[#F2C12E] transition-colors">Nosotros</Link>
                    <Link to="/contacto" className="hover:text-[#F2C12E] transition-colors">Contacto</Link>
                    <Link to="/carrito" className="hover:text-[#F2C12E] transition-colors">Carrito</Link>
                </div>
            </div>

            <div className={`md:hidden bg-[#232B32] border-t border-gray-700 transition-all duration-300 ${menuAbierto ? "block" : "hidden"}`}>
                <div className="flex flex-col space-y-4 px-4 py-4 font-bold text-sm uppercase tracking-wide">
                    <Link to="/" onClick={() => setMenuAbierto(false)} className="hover:text-[#F2C12E] transition-colors">Inicio</Link>
                    <Link to="/productos" onClick={() => setMenuAbierto(false)} className="hover:text-[#F2C12E] transition-colors">Productos</Link>
                    <Link to="/nosotros" onClick={() => setMenuAbierto(false)} className="hover:text-[#F2C12E] transition-colors">Nosotros</Link>
                    <Link to="/contacto" onClick={() => setMenuAbierto(false)} className="hover:text-[#F2C12E] transition-colors">Contacto</Link>
                    <Link to="/carrito" onClick={() => setMenuAbierto(false)} className="hover:text-[#F2C12E] transition-colors">Carrito</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;