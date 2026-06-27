class Service {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar somente números")
        }
        return num1 + num2;
    }

    Subtrair(num1, num2) {
       if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar somente números")
        }
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar somente números")
        }
        return num1 * num2;
    }

    Dividir(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar somente números")
        }
        if(num2 === 0) {
            throw new Error("Coloque um divisor maior que zero")
        }
        return num1 / num2;
    }

    Raiz(num) {
        if(isNaN(num)){
            throw new Error("Informar somente números")
        }
        if(num < 0) {
            throw new Error("Coloque somente números positivos")
        }
        return Math.sqrt(num);
    }

    Potencia(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar somente números")
        }
        return Math.pow(num1, num2)
    }
}

export default new Service()