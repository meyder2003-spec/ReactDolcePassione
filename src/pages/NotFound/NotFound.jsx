import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 sm:py-20 px-4">

            <div className="max-w-md w-full bg-[#F8F9FA] rounded-2xl shadow-md border-t-[6px] border-[#F2C12E] p-8 sm:p-10 text-center flex flex-col items-center transition-all duration-300">

                <h1 className="text-6xl sm:text-7xl font-black text-[#232B32] tracking-tight mb-2">
                    404
                </h1>

                <h2 className="text-xl sm:text-2xl font-bold text-[#6C8294] uppercase tracking-wide mb-4">
                    ¡Ups! Postre Extraviado
                </h2>

                <div className="w-16 h-[2px] bg-amber-200 rounded-full mb-8"></div>

                <Link
                    to="/"
                    className="inline-block w-full sm:w-auto bg-[#232B32] hover:bg-[#2d373f] text-[#F2C12E] border border-[#F2C12E] font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors duration-200 shadow-sm"
                >
                    Volver al Inicio
                </Link>

            </div>
        </div>
    );
}

export default NotFound;