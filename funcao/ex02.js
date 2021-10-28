function triangulo(lado1, lado2, lado3) {
    
    if (lado1 == lado2 && lado1 == lado3 && lado3 == lado2) {
        return "Equilátero"
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        return "Escaleno"
    } else{
        return "Isósceles"

    }

}


console.log(triangulo(3, 3, 3))
console.log(triangulo(1, 2, 3))
console.log(triangulo(2, 2, 1))