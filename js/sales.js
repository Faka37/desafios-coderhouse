// LLAMADAS AL HTML
const container = document.querySelector("#container")


// VARIABLES NECESARIAS 



// CLASE CONSTRUCTORA   
class Product {
    constructor(brand, name, image, price, quantity) {
        this.brand = brand
        this.name = name
        this.image = image
        this.price = price
        this.quantity = quantity
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
    
    products.push(new Product("XIAOMI", "REDMI 9A", "./assets/images/redmi-9A.jpg" , 145, 0))
    products.push(new Product("XIAOMI", "REDMI 9C", "./assets/images/redmi-9C.jpg", 175, 0))
    products.push(new Product("XIAOMI", "REDMI 9T","./assets/images/redmi-9t.jpg", 210, 0))
    products.push(new Product("XIAOMI", "NOTE 9 PRO","./assets/images/redmiNote9Pro.jpg", 290, 0))
    products.push(new Product("XIAOMI", "REDMI 10","./assets/images/redmi-10.png", 215, 0))
    products.push(new Product("XIAOMI", "REDMI 10A","./assets/images/redmi-10a.jpg", 180, 0))
    
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



// CARGANDO PRODUCTOS
const loadProducts = (products) => {
    

    for (const product of products){
        
        let div = document.createElement ("div")
        div.setAttribute("class", "card text-center ")
        
    div.innerHTML = ` 
                        <h2>${product.name}</h2>
                        <h4>${product.brand}</h4>
                        <img  class="image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                        <p class="price"><strong>${product.price} USD</strong></p>
                        <button class="button">Agregar al carro</button>
                    `
                    container.appendChild(div)
        }
        list()
    }
    loadProducts(products)
    
    


// Para empezar y llegado al caso seguir agregando productos
let loadProduct = confirm("¿Quiere cargar un nuevo producto?")

    if (loadProduct !== true){
        loadProducts(products)
        
    }

while (loadProduct === true) {
    addingProducts()
    loadProducts(products)
    loadProduct = confirm("¿Quiere cargar otro producto?")
}

