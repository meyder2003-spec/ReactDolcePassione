const DATOS_DB = {
    "categorias": [
        { "id": 1, "nombre": "Tortas" },  
        { "id": 2, "nombre": "Cupcakes" },   
        { "id": 3, "nombre": "Postres" },   
        { "id": 4, "nombre": "Bocaditos" }
    ],
    "productos": [
        {
            "id": 1,
            "nombre": "Torta de Chocolate",
            "categoria": "Tortas",
            "precio": 65,
            "imagen": "/img/torta_chocolate.jpg",
            "descripcion": "Bizcocho de chocolate con fudge."
        },
        {
            "id": 2,
            "nombre": "Red Velvet",
            "categoria": "Tortas",
            "precio": 72,
            "imagen": "/img/red_velvet.jpg",
            "descripcion": "Torta de terciopelo rojo con queso crema."
        },  
        {   
            "id": 3, 
            "nombre": "Cheesecake",
            "categoria": "Postres",
            "precio": 18,
            "imagen": "/img/cheesecake.jpg",
            "descripcion": "Cheesecake de fresa."
        },  
        {   
            "id": 4, 
            "nombre": "Pie de Limón",
            "categoria": "Postres",
            "precio": 16,
            "imagen": "/img/pie_limon.jpg",
            "descripcion": "Pie con crema de limón."
        },  
        {   
            "id": 5, 
            "nombre": "Cupcake de Vainilla",
            "categoria": "Cupcakes",
            "precio": 9,
            "imagen": "/img/cupcake_de_vainilla.jpg",
            "descripcion": "Cupcake con buttercream."
        },  
        {   
            "id": 6, 
            "nombre": "Cupcake de Chocolate",
            "categoria": "Cupcakes",
            "precio": 10,
            "imagen": "/img/cupcake_de_chocolate.jpg",
            "descripcion": "Cupcake relleno de fudge."
        },  
        {   
            "id": 7, 
            "nombre": "Brownie",
            "categoria": "Postres",
            "precio": 8,
            "imagen": "/img/brownie.jpg",
            "descripcion": "Brownie húmedo con nueces."
        },  
        {   
            "id": 8, 
            "nombre": "Alfajor",
            "categoria": "Bocaditos",
            "precio": 5,
            "imagen": "/img/alfajor.jpg",
            "descripcion": "Alfajor relleno de manjar."
        },  
        {   
            "id": 9, 
            "nombre": "Trufa",
            "categoria": "Bocaditos",
            "precio": 4,
            "imagen": "/img/trufa.jpg",
            "descripcion": "Trufa de chocolate."
        }
    ]
};

export async function obtenerProductos() {
    return DATOS_DB.productos;
}

export function obtenerCarrito() {
    const carrito = localStorage.getItem("carrito");
    return carrito ? JSON.parse(carrito) : [];
}

export function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}