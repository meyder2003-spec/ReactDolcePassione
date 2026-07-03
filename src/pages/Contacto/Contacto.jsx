function Contacto() {
    function enviarFormulario(e) {
        e.preventDefault();
        alert("Mensaje enviado correctamente.");
    }

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            
            <header className="text-center flex flex-col items-center justify-center mb-10">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#232B32] tracking-tight">
                    Contáctanos
                </h1>
                <div className="w-16 h-[4px] bg-[#F2C12E] rounded-full mt-3 shadow-sm"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                
                <form
                    onSubmit={enviarFormulario}
                    className="md:col-span-7 bg-[#F8F9FA] shadow-md rounded-xl p-6 sm:p-8 space-y-4 border border-gray-100"
                >
                    <div>
                        <label className="block text-xs font-bold text-[#5A6571] uppercase mb-1">Nombre</label>
                        <input
                            type="text"
                            placeholder="Tu nombre completo"
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-[#232B32] focus:outline-none focus:ring-2 focus:ring-[#F2C12E] focus:border-transparent text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-[#5A6571] uppercase mb-1">Correo</label>
                        <input
                            type="email"
                            placeholder="correo@ejemplo.com"
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-[#232B32] focus:outline-none focus:ring-2 focus:ring-[#F2C12E] focus:border-transparent text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-[#5A6571] uppercase mb-1">Asunto</label>
                        <input
                            type="text"
                            placeholder="Motivo del mensaje"
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-[#232B32] focus:outline-none focus:ring-2 focus:ring-[#F2C12E] focus:border-transparent text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-[#5A6571] uppercase mb-1">Mensaje</label>
                        <textarea
                            rows="5"
                            placeholder="Escribe tu mensaje aquí..."
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white text-[#232B32] focus:outline-none focus:ring-2 focus:ring-[#F2C12E] focus:border-transparent text-sm resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#232B32] hover:bg-[#2d373f] text-[#F2C12E] border border-[#F2C12E] py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors duration-200 shadow-md"
                    >
                        Enviar Mensaje
                    </button>
                </form>

                <div className="md:col-span-5 bg-[#F8F9FA] shadow-md rounded-xl border-l-[6px] border-[#F2C12E] p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-[#232B32] uppercase tracking-wider mb-6">
                            Información de Contacto
                        </h2>
                        
                        <div className="space-y-5">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-[#6C8294] uppercase tracking-wide">Correo Electrónico</span>
                                <span className="text-[#232B32] font-medium text-sm sm:text-base mt-0.5">contacto@dolcepassione.com</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-[#6C8294] uppercase tracking-wide">Teléfono</span>
                                <span className="text-[#232B32] font-medium text-sm sm:text-base mt-0.5">920093914</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-[#6C8294] uppercase tracking-wide">Dirección</span>
                                <span className="text-[#232B32] font-medium text-sm sm:text-base mt-0.5">Lima, Perú</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-200/60 bg-[#FFF8E1] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-4 rounded-b-xl text-center">
                        <p className="text-xs text-[#625338] font-medium">
                            Atendemos consultas y pedidos especiales de lunes a domingo.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contacto;