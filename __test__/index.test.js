import { describe, it, expect } from '@jest/globals';
import  Service  from '../src/services/exercicios.js';

describe("Testes para função Somar", () => {

    it("Deve somar dois numeros positivos 2 e 3, retornar 5", () => {
        const result = Service.Somar(2,3);
        expect(result).toBe(5);
    })
    it("Deve somar dois numeros positivos decimais 10 e 15, retornar 25", () => {
        const result = Service.Somar(10,15);
        expect(result).toBe(25);
    })
        it("Deve somar um nuemro positivo e um numero negativo -5 e 8, retornar 3", () => {
        const result = Service.Somar(-5,8);
        expect(result).toBe(3);
    })
        it("Deve somar dois numeros negativos -2 e -1, retornar -30", () => {
        const result = Service.Somar(-10,-20);
        expect(result).toBe(-30);
    })
        it("Deve somar dois numeros positivos com virgula 1.5 e 2.5, retornar 4.0", () => {
        const result = Service.Somar(1.5,2.5);
        expect(result).toBe(4.0);
    })
        it("Deve somar dois numeros um positivo e um negativo com virgula -2.5 e 5.0, retornar 2.5", () => {
        const result = Service.Somar(-2.5,5.0);
        expect(result).toBe(2.5);
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

describe("Testes para função Sub", () => {

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
})

describe("Testes para função Multiplicação", () => {

    it("Deve multiplicar dois numeros positivos 2 e 2, retorna 4", () => {
        const resultado = Service.Multiplicar(2,2);
        expect(resultado).toBe(4);
    })
})