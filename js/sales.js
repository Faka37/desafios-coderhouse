// LLAMADAS AL HTML
const search = document.querySelector("#search")
const filter = document.querySelector("#filter")
const lower = document.querySelector("#lowerPrice")
const higher = document.querySelector("#higherPrice")
const addingNewProducts = document.querySelector("#addingProducts")
const container = document.querySelector("#container")

// VARIABLES NECESARIAS 



// CLASE CONSTRUCTORA   
class Product {
    constructor(brand, name, image, price, quantity) {
        this.brand = brand
        this.name = name
        this.image = image
        this.price = price
        this.quantity = 0
    }
    priceIVA() {
        this.price = this.price * IVA
    }
    discountStock(units) {
        this.quantity = this.quantity - units
    }

}

// ARRAYS
const products = []
const cart = []



// LISTA DE PRODUCTOS 
function list() {
    
    products.push(new Product("XIAOMI", "REDMI 9A", "./assets/images/redmi-9A.jpg" , 145))
    products.push(new Product("XIAOMI", "REDMI 9C", "./assets/images/redmi-9C.jpg", 175))
    products.push(new Product("XIAOMI", "REDMI 9T","./assets/images/redmi-9t.jpg", 210))
    products.push(new Product("XIAOMI", "NOTE 9 PRO","./assets/images/redmiNote9Pro.jpg", 290))
    products.push(new Product("XIAOMI", "REDMI 10","./assets/images/redmi-10.png", 215))
    products.push(new Product("XIAOMI", "REDMI 10A","./assets/images/redmi-10a.jpg", 180))
    
}



// AGREGADO DE PRODUCTOS
const addingProducts = () => {
    let brand = prompt("ingrese una marca").toUpperCase()
    let name = prompt("ingrese nombre").toUpperCase()
    let image = prompt("ingrese el url de la imagen")
    let price = Number(prompt("ingrese el precio"))


    let newProduct = new Product(brand, name, image, price)

    products.push(newProduct)

}
//BOTON
addingNewProducts.addEventListener("click", () => { addingProducts()} ) 

// CARGANDO PRODUCTOS
const loadProducts = (products) =>{
    for (const product of products){
        
        let div = document.createElement ("div")
        div.setAttribute("class", "card text-center ")
        
    div.innerHTML = ` 
                        <h2>${product.name}</h2>
                        <h4>${product.brand}</h4>
                        <img  class="image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                        <p class="price"><strong>${product.price} USD</strong></p>
                        <button class="button btn" id="cart" >Agregar al carro</button>
                    `
                    container.appendChild(div)
    }
    
    
}
list()
loadProducts(products)



//PARA EMPEZAR Y LLEGADO AL CASO SEGUIR AGREGANDO PRODUCTOS
function runProducts () {

    let loadProduct = confirm("¿Quiere cargar un nuevo producto?")
    
        if (loadProduct !== true){
            loadProducts(products)
            
        }
    
    while (loadProduct === true) {
        addingProducts()
        loadProducts(products)
        loadProduct = confirm("¿Quiere cargar otro producto?")
    }
    
}



//PARA ORDENAR LOS PRECIOS
function lowerPrice() {
    products.sort((a, b) => {
        if (a.price > b.price) {
            return 1
        }
        if (a.price < b.price) {
            return -1
        }
        return 0
    })
    
} 
//BOTON
lower.addEventListener("click", () => { lowerPrice()} ) 


function higherPrice() {
    products.sort((a, b) => {
        if (a.price > b.price) {
            return -1
        }
        if (a.price < b.price) {
            return 1
        }
        return 0
    })
}
//BOTON
higher.addEventListener("click", () => { higherPrice()} ) 


//BUSQUEDA EN DETALLE
function filtering() {
    let parameter = prompt("Ingrese el nombre especifico de lo que busca: ").toUpperCase()
    let result = products.filter((product) => product.name.includes(parameter))
    console.table(result)
}


//MAS DE UN RESULTADO
function searching() {
    let nameProd = filter.value.toUpperCase()
    let result = products.find((product) => product.name.includes(nameProd))
    if (result !== undefined) {
        console.table(result)
    } else {
        console.warn("No se encontró el producto buscado.")
    }
}
//BOTON
search.addEventListener("click", () => { searching()} ) 