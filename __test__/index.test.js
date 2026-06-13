import { describe, it, expect } from '@jest/globals';
import  Service  from '../src/services/exercicios.js';

describe("Testes para função Somar", () => {

    it("Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 99, retornar 100", () => {
        const result = Service.Somar(1,99);
        expect(result).toBe(100);
    })
    it("Deve somar dois numeros como primeiro parametro -1, como segundo paramentro 99, retornar 98", () => {
        const result = Service.Somar(-1,99);
        expect(result).toBe(98);
    })
    it("Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro -99, retornar -98", () => {
        const result = Service.Somar(1, -99);
        expect(result).toBe(-98);
    })
    it("Chamar a função somar, e enviar como primeiro parametro -1, como segundo parametro -99, retornar -100", () => {
        const result = Service.Somar(-1, -99);
        expect(result).toBe(-100);
    })
    it("Deve somar dois numeros positivos com virgula 1.5 e 2.5, retornar 4.0", () => {
        const result = Service.Somar(1.5,2.5);
        expect(result).toBe(4.0);
    })
    it("Deve somar dois numeros um positivo e um negativo com virgula -2.5 e 5.0, retornar 2.5", () => {
        const result = Service.Somar(-2.5,5.0);
        expect(result).toBe(2.5);
    })
    it("Deve somar dois numeros negativos -2 e -1, retornar um throw", () => {
        const result = () => Service.Somar("a",-1);
        expect(result).toThrow("Informar somente números");
    })
    it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2,-1);
        expect(result).toBe(-3);
    })
    it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2,-1);
        expect(result).toBe(-3);
    })
    it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2,-1);
        expect(result).toBe(-3);
    })
})

describe("Testes para função Subtrair", () => {

    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
    it("Deve subtrarir dois numeros positivos 2 e 1, retorna 1", () => {
        const resultado = Service.Subtrair(2,1);
        expect(resultado).toBe(1);
    })
})

describe("Testes para função Divisao", () => {

    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
    it("Deve dividir dois numeros positivos 2 e 2, retorna 1", () => {
        const resultado = Service.Dividir(2,2);
        expect(resultado).toBe(1);
    })
})

describe("Testes para função Multiplicação", () => {

    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
})

describe("Testes para função Raiz", () => {

    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
    it("Deve fazer a raiz de um numero positivo 7, retorna 49", () => {
        const resultado = Service.Raiz(7);
        expect(resultado).toBe(49);
    })
})

describe("Testes para função Potencia", () => {

    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
    it("Deve calcular a potencia de um numero positvo, base 3, potencia 3, retorna 27", () => {
        const resultado = Service.Potencia(3,3);
        expect(resultado).toBe(27);
    })
})