const lista_productos = [
    {
        "id": 1,
        "title": "Gorra LA",
        "price": 49.99,
        "description": "Gorra LA plana color azul",
        "category": "gorras",
        "image": "/assets/103922829_1.webp",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 2,
        "title": "Gorra NY ",
        "price": 30,
        "description": "Gorra rosa de NY",
        "category": "gorras",
        "image": "/assets/344314241_1449582865852140_6292884540591991901_n.jpg",
        "stock": 40,
        "rating": {
            "rate": 4.1

        }
    },
    {
        "id": 3,
        "title": "Sombrero de Playa para Mujer",
        "price": 55.99,
        "description": "Sombrero de paja, playero para mujer",
        "category": "sombreros",
        "image": "/assets/421922.jpg",
        "stock": 25,
        "rating": {
            "rate": 4.7

        }
    },
    {
        "id": 4,
        "title": "Gorra Lakers",
        "price": 49.99,
        "description": "Gorra plana legra con logo de los Lakers",
        "category": "gorras",
        "image": "/assets/New-Era---Los-Angeles-Lakers-9FIFTY-Snapback-_70556867_-01_1080x_e716b769-2ed8-4197-86eb-ce08f3376e81_512x512.webp",
        "stock": 45,
        "rating": {
            "rate": 4.1

        }
    },
    {
        "id": 5,
        "title": "Gorro The North Face",
        "price": 25,
        "description": "Gorro gris marca The North Face",
        "category": "gorros",
        "image": "/assets/NF0A3FJW_DYY-0_grande.jpg",
        "stock": 15,
        "rating": {
            "rate": 4.6

        }
    },
    {
        "id": 6,
        "title": "Gorra RedBull Racing",
        "price": 99.99,
        "description": "Gorra de RedBull Racing de formula 1",
        "category": "gorras",
        "image": "/assets/redbull.webp",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 7,
        "title": "Gorra Ferrari",
        "price": 99.99,
        "description": "Gorra del equipo Ferrari de Formula 1",
        "category": "gorras",
        "image": "/assets/ferrari.jpg",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 8,
        "title": "Sombrero de Paja",
        "price": 49.99,
        "description": "Sombrero de paja con cinta negra",
        "category": "sombreros",
        "image": "/assets/sombreropaja.webp",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 9,
        "title": "Sombrero Mexicano",
        "price": 59.99,
        "description": "Sombrero con decoracion mexicana",
        "category": "sombreros",
        "image": "/assets/sombreromexicano.jpg",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 10,
        "title": "Sombrero Indiana",
        "price": 49.99,
        "description": "Sombrero indiana de gamuza",
        "category": "sombreros",
        "image": "/assets/sombreroINDIANAGAMUZA.jpg",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 11,
        "title": "Sombrero de Copa",
        "price": 49.99,
        "description": "Sombrero Negro de Copa",
        "category": "sombreros",
        "image": "/assets/sombrerocopa.jpg",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 12,
        "title": "Gorro Nike",
        "price": 49.99,
        "description": "Gorro Nike color gris",
        "category": "gorros",
        "image": "/assets/gorronike.jpg",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 13,
        "title": "Gorro Beanie",
        "price": 49.99,
        "description": "Gorro Beanie color gris",
        "category": "gorros",
        "image": "/assets/gorrobeanie.webp",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 14,
        "title": "Gorro Tommy",
        "price": 49.99,
        "description": "Gorro Tommy color negro",
        "category": "gorros",
        "image": "/assets/gorrotommy.avif",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    },
    {
        "id": 15,
        "title": "Gorro Raidres",
        "price": 49.99,
        "description": "Gorro de los Raiders color blanco y negro",
        "category": "gorros",
        "image": "/assets/gorroraiders.jpg",
        "stock": 50,
        "rating": {
            "rate": 4.9
        }
    }
]


export const getProductos = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(lista_productos);

        }, 500)
    })
}

export const getProductById = (idProduct) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find(prod => prod.id === Number(idProduct)))
        }, 500);

    })

}

export const getProductsByCategory = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter(prod => prod.category === category))
        }, 500);
    })

}