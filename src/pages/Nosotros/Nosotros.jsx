function Nosotros() {
    return (
        <div className="bg-gradient-to-b from-rose-50/30 via-white to-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
            
            <div className="max-w-5xl w-full mx-auto">
                
                <header className="text-center mb-20 flex flex-col items-center">
                    <span className="text-sm font-bold text-rose-500 uppercase tracking-widest block mb-2">
                        Conoce más de Dolce Passione
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight">
                        Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Esencia</span>
                    </h1>
                    <div className="w-16 h-1 bg-[#C6676D] rounded-full mt-6"></div>
                </header>

                <section className="bg-white rounded-2xl shadow-xl shadow-pink-100/40 border border-pink-100/50 p-8 sm:p-12 mb-16 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#C6676D]"></div>
                    
                    <div className="max-w-3xl">
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-6 flex items-center gap-2">
                            Nuestra Historia
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed antialiased">
                            Dolce Passione nació con el tierno objetivo de ofrecer postres elaborados artesanalmente utilizando ingredientes de la más alta calidad. Cada preparación busca brindar una experiencia dulce, única y memorable para nuestros clientes en cualquier ocasión especial, combinando técnica, amor y precisión en cada horneado.
                        </p>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Misión */}
                    <div className="bg-white rounded-2xl shadow-md shadow-gray-100/80 border border-gray-100 p-8 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Elaborar postres frescos y deliciosos que superen expectativas, ofreciendo un excelente servicio personalizado y productos de calidad impecable en cada detalle.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md shadow-gray-100/80 border border-gray-100 p-8 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Visión
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Ser una repostería líder y altamente reconocida por la innovación de nuestras creaciones, la calidad de los productos y la felicidad absoluta de nuestros clientes.
                        </p>
                    </div>
                </section>

                <div className="text-center mb-10">
                    <h4 className="text-xs font-bold text-[#C6676D] uppercase tracking-widest">Los pilares que nos guían</h4>
                    <h3 className="text-2xl font-extrabold text-gray-800 mt-1">Nuestros Valores</h3>
                </div>

                <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-sm hover:shadow-xl border border-pink-50/60 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 group">
                        <h5 className="font-bold text-gray-800 text-lg mb-2">Calidad</h5>
                        <p className="text-gray-500 text-sm">
                            Ingredientes seleccionados cuidadosamente para asegurar un sabor inigualable.
                        </p>
                    </div>

                    <div className="bg-white shadow-sm hover:shadow-xl border border-pink-50/60 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 group">
                        <h5 className="font-bold text-gray-800 text-lg mb-2">Tradición</h5>
                        <p className="text-gray-500 text-sm">
                            Recetas preparadas con dedicación, manteniendo vivo el secreto del buen sabor.
                        </p>
                    </div>

                    <div className="bg-white shadow-sm hover:shadow-xl border border-pink-50/60 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 group sm:col-span-2 md:col-span-1">
                        <h5 className="font-bold text-gray-800 text-lg mb-2">Compromiso</h5>
                        <p className="text-gray-500 text-sm">
                            Atención personalizada e impecable para transformar cada pedido en una fiesta.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Nosotros;