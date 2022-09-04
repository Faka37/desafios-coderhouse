let listaPosible = []
let listaCuotas = []

function saltoLinea() {
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
}

const calculador = () => {
    monto = parseFloat(prompt("ingrese el monto del producto"))

    cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas 1, 3, 6, 9, 12 , 18"))
    
    let promo = ((monto * 10) / 100)
    
    let montoConCuota = monto

    if (cantidadCuotas != 1) {
        for (i = 1; i <= cantidadCuotas; i++) {
            let porCuota = ((monto * 5) / 100)
            montoConCuota = montoConCuota + porCuota
        }
        let valorPorCuota = (montoConCuota / cantidadCuotas).toFixed(2)

        
        document.write("El valor del producto es $" + monto + " la cantidad de cuotas son " + cantidadCuotas + " y el precio por cada una es de $" + valorPorCuota + " lo cual queda en un monto de $" + montoConCuota)
        listaPosible.push("$" + montoConCuota)
        listaCuotas.push(cantidadCuotas)

    } else {
        
        document.write("El valor del producto es $" + monto + " y estas dentro del 10% de descuento por un pago y queda en $" + (monto - promo))
        listaPosible.push("$" + (monto - promo))
        listaCuotas.push(cantidadCuotas)

    }

}

function sumarNumero() {
    let otroCalculo = false
    
    otroCalculo = confirm("Si quieres hacer un calculo")
    
    if (otroCalculo === true) {
        calculador()
        saltoLinea()
    }

}

let conteo = 0
let cantidadCalculos = parseInt(prompt("Cuantas cuentas tener que sacar ?"))

for (conteo = 0; conteo < cantidadCalculos ; conteo++){
    sumarNumero()
}



document.write("Tus valores finales: " + listaPosible.join(" - "))
saltoLinea()
document.write("Tus Cuotas finales: " + listaCuotas.join(" - "))
saltoLinea()
