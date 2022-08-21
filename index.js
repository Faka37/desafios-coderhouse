// mediante un prompt realizo una tabla e implemeto el if/else para la prolijidad de la misma al imprimirse por pantalla

let num = prompt("ingrese un numero del 1 al 10")

function saltoLinea() {
    document.write("<br>")
}


for( i = 1 ; i <= 10 ; i++ ) {
    document.write(`${num} * ${i} = ${num * i} `) 
    if(i != 10) {
        saltoLinea()
    }
    else {
        saltoLinea()
        document.write("Finalizaste la tabla del ", num )
    }
} 
