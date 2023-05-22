const productos = [
    {
        categoria: "helados",
        nombre: "chocolate",
        descripcion: "Es de chocolate",
        precio: "35",
        url: "../image/imgs-helado/helado_choco.jpg",
    },
    {
        categoria: "helados",
        nombre: "chocolate",
        descripcion: "Es de chocolate",
        precio: "35",
        url: "../image/imgs-paletas/chocolate.png",
    },
    {
        categoria: "helados",
        nombre: "oreo",
        descripcion: "Es de galleta oreo",
        precio: "35",
        url: "../image/imgs-helado/helado_oreo.jpg",
    },
    {
        categoria: "helados",
        nombre: "vainilla",
        descripcion: "Es de vainilla",
        precio: "35",
        url: "../image/imgs-helado/helado_vainilla.jpg",
    },

    {
        categoria: "helados",
        nombre: "Baileys",
        descripcion: "Es de Premium Baileys",
        precio: "45",
        url: "../image/imgs-helado/helado_baileys.jpg",
    },
    {
        categoria: "paletas",
        nombre: "maracuya",
        descripcion: "Es paleta de maracuya",
        precio: "35",
        url: "../image/imgs-paletas/maracuya.png",
    },
    {
        categoria: "paletas",
        nombre: "oreo",
        descripcion: "Es paleta de galleta oreo",
        precio: "35",
        url: "../image/imgs-paletas/paleta-oreo.png",
    },
    {
        categoria: "paletas",
        nombre: "fresa",
        descripcion: "Es paleta de fresa",
        precio: "35",
        url: "../image/imgs-paletas/paleta-fresa.png",
    },

    {
        categoria: "paletas",
        nombre: "nuez",
        descripcion: "Es paleta de nuez",
        precio: "45",
        url: "../image/imgs-paletas/paleta-nuez.png",
    }
]

const productosImprimir = () => {
    const divProducto = document.getElementById("productosImpresion");
    productos.map((recept) => {
        let producto = document.createElement("div")
        producto.className = "mt-2";
        let imagen = document.createElement("img");
        imagen.src = recept.url;
        imagen.width = 200;
        imagen.alt = recept.descripcion;
        console.log(imagen);
        let nombre = document.createElement("div");
        nombre.className = "nombre-producto";
        nombre.innerHTML = recept.nombre;
        let precio = document.createElement("div");
        precio.className = "precio-producto";
        precio.innerHTML = `$ ${recept.precio}`;
        let boton = document.createElement("button");
        boton.className = "boton-agregar";
        boton.innerHTML = "Agregar al <br>carrito";
        //boton.innerHTML = '<button class="boton-agregar">Agregar al <br>carrito</button>';
        producto.appendChild(imagen);
        producto.appendChild(nombre);
        producto.appendChild(precio);
        producto.appendChild(boton);
        divProducto.appendChild(producto);
    })
}          
productosImprimir();
