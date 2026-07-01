import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Nosotros from "../pages/Nosotros/Nosotros";
import Productos from "../pages/Productos/Productos";
import Ofertas from "../pages/Ofertas/Ofertas";
import Carrito from "../pages/Carrito/Carrito";
import Checkout from "../pages/Checkout/Checkout";
import Contacto from "../pages/Contacto/Contacto";
import NotFound from "../pages/NotFound/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
            
                <Route path="/nosotros" element={<Nosotros />} />
            
                <Route path="/productos" element={<Productos />} />
            
                <Route path="/ofertas" element={<Ofertas />} />
            
                <Route path="/carrito" element={<Carrito />} />
            
                <Route path="/checkout" element={<Checkout />} />
            
                <Route path="/contacto" element={<Contacto />} />
            
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;