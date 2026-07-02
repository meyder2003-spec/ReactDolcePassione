function Contacto() {

    function enviarFormulario(e) {

        e.preventDefault();

        alert("Mensaje enviado correctamente.");

    }

    return (

        <div className="max-w-5xl mx-auto px-8 py-16">

            <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">

                Contáctanos

            </h1>

            <div className="grid md:grid-cols-2 gap-10">

                <form
                    onSubmit={enviarFormulario}
                    className="bg-white shadow rounded-xl p-8 space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Correo"
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Asunto"
                        className="w-full border rounded-lg p-3"
                    />

                    <textarea
                        rows="6"
                        placeholder="Mensaje"
                        className="w-full border rounded-lg p-3"
                    ></textarea>

                    <button
                        className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-lg"
                    >

                        Enviar

                    </button>

                </form>

                <div className="bg-pink-50 rounded-xl shadow p-8">

                    <h2 className="text-2xl font-bold mb-5">

                        Información

                    </h2>

                    <p className="mb-4">

                        Correo:
                        contacto@dolcepassione.com

                    </p>

                    <p className="mb-4">

                        Teléfono:
                        999 999 999

                    </p>

                    <p>

                        Dirección:
                        Lima, Perú

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Contacto;