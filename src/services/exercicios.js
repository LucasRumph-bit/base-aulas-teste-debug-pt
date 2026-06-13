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
        if(num2 <= 0) {
            throw new Error("Coloque um divisor maior que zero")
        }
        return num1 / num2;
    }

    Raiz(num1) {
        if(isNaN(num1)){
            throw new Error("Informar somente números")
        }
        if(num1 <= 0) {
            throw new Error("Coloque um número maior que zero")
        }
        return num1 * num1;
    }

    Potencia(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar somente números")
        }
        if (num2 < 0) {
            throw new Error("O expoente deve ser um número maior que zero")
        }
        const numFinal
        for (let i = 0; i <num2; i++) {
            numFinal *= num1;
            
        }
        return numFinal; 
    }
}

export default new Service()