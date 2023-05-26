const heladosContenedorP = document.getElementById('contenedor-helados-premium');
const heladosContenedor = document.getElementById('contenedor-helados');
const paletasContenedor = document.getElementById('contenedor-paletas');
const aguasContenedor = document.getElementById('contenedor-aguas');

const imprimirProductos = () => {
  productos.forEach((producto) => {
    let categoria = producto.categoria;
    let nombreI = producto.nombre;
    let precioI = producto.precio;
    let imagenI = producto.url;

    let productoEnArray = document.createElement('div');
    productoEnArray.setAttribute("class","mt-2 col-sm-6 col-lg-4");
    productoEnArray.innerHTML = `
        <img src="${imagenI}" width="200" alt="Foto helado chocolate">
        <div class="nombre-producto"> ${nombreI}</div>
        <div class="precio-producto">$ ${precioI}</div>
        <button class="boton-agregar">Agregar al <br>carrito</button>
    `;
    if (categoria==="helados") {
        heladosContenedor.appendChild(productoEnArray);
    } 
    else if (categoria==="paletas"){
        paletasContenedor.appendChild(productoEnArray);
    } else if (categoria==="aguas") {
        aguasContenedor.appendChild(productoEnArray);
    } else {
        heladosContenedorP.appendChild(productoEnArray);
    }
    
  });
};


const productos = [
    {
        categoria: "helados",
        nombre: "Chocolate",
        descripcion: "Es de chocolate",
        precio: "35",
        url: "../image/imgs-helado/helado_choco.png",
    },
    {
        categoria: "helados",
        nombre: "Oreo",
        descripcion: "Es de galleta oreo",
        precio: "35",
        url: "../image/imgs-helado/helado_oreo.png",
    },
    {
        categoria: "helados",
        nombre: "Vainilla",
        descripcion: "Es de vainilla",
        precio: "35",
        url: "../image/imgs-helado/helado_vainilla.png",
    },

    {
        categoria: "helados premium",
        nombre: "Baileys",
        descripcion: "Es de Premium Baileys",
        precio: "45",
        url: "../image/imgs-helado/helado_baileys.png",
    },

    {
        categoria: "helados premium",
        nombre: "Baileys",
        descripcion: "Es de Premium Baileys",
        precio: "45",
        url: "../image/imgs-helado/heladoP_ferrero.png",
    },
    {
        categoria: "helados premium",
        nombre: "Baileys",
        descripcion: "Es de Premium Baileys",
        precio: "45",
        url: "../image/imgs-helado/heladoP_M&M.png",
    },


    {
        categoria: "paletas",
        nombre: "Maracuya",
        descripcion: "Es paleta de maracuya",
        precio: "35",
        url: "../image/imgs-paletas/maracuya.png",
    },
    {
        categoria: "paletas",
        nombre: "Oreo",
        descripcion: "Es paleta de galleta oreo",
        precio: "35",
        url: "../image/imgs-paletas/paleta-oreo.png",
    },
    {
        categoria: "paletas",
        nombre: "Fresa",
        descripcion: "Es paleta de fresa",
        precio: "35",
        url: "../image/imgs-paletas/paleta-fresa.png",
    },

    {
        categoria: "paletas",
        nombre: "Nuez",
        descripcion: "Es paleta de nuez",
        precio: "45",
        url: "../image/imgs-paletas/paleta-nuez.png",
    },
    {
        categoria: "paletas",
        nombre: "Chocolate",
        descripcion: "Es de chocolate",
        precio: "35",
        url: "../image/imgs-paletas/chocolate.png",
    },

    {
        categoria: "aguas",
        nombre: "Jamaica",
        descripcion: "Es paleta de galleta oreo",
        precio: "35",
        url: "../image/imgs-aguas/agua_jamaica.png",
    },
    {
        categoria: "aguas",
        nombre: "Mango",
        descripcion: "Es paleta de fresa",
        precio: "35",
        url: "../image/imgs-aguas/agua_mango.png",
    },

    {
        categoria: "aguas",
        nombre: "Kiwi",
        descripcion: "Es paleta de nuez",
        precio: "45",
        url: "../image/imgs-aguas/agua_kiwi.png",
    },
    {
        categoria: "aguas",
        nombre: "Limón con chía",
        descripcion: "Es de chocolate",
        precio: "35",
        url: "../image/imgs-aguas/agua_limonC.png",
    }

    
]


document.addEventListener('DOMContentLoaded', () => {
    imprimirProductos();
  }); 