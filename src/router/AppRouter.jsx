import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Nosotros from "../pages/Nosotros/Nosotros";
import Productos from "../pages/Productos/Productos";
import Ofertas from "../pages/Ofertas/Ofertas";
import Carrito from "../pages/Carrito/Carrito";
import Checkout from "../pages/Checkout/Checkout";
import Contacto from "../pages/Contacto/Contacto";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/layout/Layout/Layout";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
            
                <Route
                    path="/nosotros"
                    element={
                        <Layout>
                            <Nosotros />
                        </Layout>
                    }
                />
            
                <Route
                    path="/productos"
                    element={
                        <Layout>
                            <Productos />
                        </Layout>
                    }
                />
            
                <Route
                    path="/ofertas"
                    element={
                        <Layout>
                            <Ofertas />
                        </Layout>
                    }
                />
            
                <Route
                    path="/carrito"
                    element={
                        <Layout>
                            <Carrito />
                        </Layout>
                    }
                />
            
                <Route
                    path="/checkout"
                    element={
                        <Layout>
                            <Checkout />
                        </Layout>
                    }
                />
            
                <Route
                    path="/contacto"
                    element={
                        <Layout>
                            <Contacto />
                        </Layout>
                    }
                />
            
                <Route path="*" element={<NotFound />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;