import { describe, it, expect } from '@jest/globals';
import  Service  from '../src/services/exercicios.js';

describe("Testes para função Somar", () => {

    it("CT 1 - Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 99, retornar 100", () => {
        const result = Service.Somar(1,99);
        expect(resultado).toBe(100);
    })
    it("CT 2 - Chamar a função somar dois numeros como primeiro parametro -1, como segundo paramentro 99, retornar 98", () => {
        const resultado = Service.Somar(-1,99);
        expect(resultado).toBe(98);
    })
    it("CT 3 - Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro -99, retornar -98", () => {
        const resultado = Service.Somar(1, -99);
        expect(resultado).toBe(-98);
    })
    it("CT 4 - Chamar a função somar, e enviar como primeiro parametro -1, como segundo parametro -99, retornar -100", () => {
        const resultado = Service.Somar(-1, -99);
        expect(resultado).toBe(-100);
    })
    it("CT 5 - Chamar a função somar, e enviar como primeiro parametro 1.5, como segundo parametro 2.3, retornar 3.8", () => {
        const resultado = Service.Somar(1.5,2.3);
        expect(resultado).toBe(3.8);
    })
    it("CT 6 - Chamar a função somar, e enviar como primeiro parametro 'batata', como segundo parametro 1, retornar um erro", () => {
        const resultado = () => Service.Somar("batata",1);
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 7 - Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 'batata', retornar um erro ", () => {
        const resultado = () => Service.Somar(1,"batata");
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 8 - Chamar a função somar, e enviar como primeiro parametro 0, como segundo parametro 1, retornar 1", () => {
        const resultado = Service.Somar(0, 1);
        expect(resultado).toBe(1);
    })
    it("CT 9 - Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 0, retornar 1", () => {
        const resultado = Service.Somar(1,0);
        expect(resultado).toBe(1);
    })
    it("CT 10 - Chamar a função somar, e enviar como primeiro parâmetro -5.5, como segundo parâmetro 2.5, retornar -3", () => {
        const resultado = Service.Somar(-5.5,2.5);
        expect(resultado).toBe(-3);
    })
})

describe("Testes para função Subtrair", () => {

    it("CT 11 - Chamar a função subtrair, e enviar como primeiro parâmetro 100, como segundo parâmetro 1, retornar 99", () => {
        const resultado = Service.Subtrair(100,1);
        expect(resultado).toBe(99);
    })
    it("CT 12 - Chamar a função subtrair, e enviar como primeiro parâmetro -50, como segundo parâmetro 25, retornar -75", () => {
        const resultado = Service.Subtrair(-50,25);
        expect(resultado).toBe(-75);
    })
    it("CT 13 - Chamar a função subtrair, e enviar como primeiro parâmetro -10, como segundo parâmetro -20, retornar 10", () => {
        const resultado = Service.Subtrair(-10,-20);
        expect(resultado).toBe(10);
    })
    it("CT 14 - Chamar a função subtrair, e enviar como primeiro parâmetro 0, como segundo parâmetro 15, retornar -15", () => {
        const resultado = Service.Subtrair(0,15);
        expect(resultado).toBe(-15);
    })
    it("CT 15 - Chamar a função subtrair, e enviar como primeiro parâmetro 15, como segundo parâmetro 0, retornar 15", () => {
        const resultado = Service.Subtrair(15,0);
        expect(resultado).toBe(15);
    })
    it("CT 16 - Chamar a função subtrair, e enviar como primeiro parâmetro 5.5, como segundo parâmetro 2.2, retornar 3.3", () => {
        const resultado = Service.Subtrair(5.5,2.2);
        expect(resultado).toBe(3.3);
    })
    it("CT 17 - Chamar a função subtrair, e enviar como primeiro parâmetro 'abc', como segundo parâmetro 5, retornar um erro", () => {
        const resultado = () => Service.Subtrair("abc",5);
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 18 - Chamar a função subtrair, e enviar como primeiro parâmetro 10, como segundo parâmetro 'abc', retornar um erro", () => {
        const resultado = () => Service.Subtrair(10,"abc");
        expect(resultado).toBe("Informar somente números");
    })
    it("CT 19 - Chamar a função subtrair, e enviar como primeiro parâmetro 999999, como segundo parâmetro 999998, retornar 1", () => {
        const resultado = Service.Subtrair(999999,999998);
        expect(resultado).toBe(1);
    })
    it("CT 20 - Chamar a função subtrair, e enviar como primeiro parâmetro -1.5, como segundo parâmetro 2.5, retornar -4", () => {
        const resultado = Service.Subtrair(-1.5,2.5);
        expect(resultado).toBe(-4);
    })
})

describe("Testes para função Multiplicação", () => {

    it("CT 21 - Chamar a função multiplicar, e enviar como primeiro parâmetro 10, como segundo parâmetro 10, retornar 100", () => {
        const resultado = Service.Multiplicar(10,10);
        expect(resultado).toBe(100);
    })
    it("CT 22 - Chamar a função multiplicar, e enviar como primeiro parâmetro -5, como segundo parâmetro 10, retornar -50", () => {
        const resultado = Service.Multiplicar(-5,10);
        expect(resultado).toBe(-50);
    })
    it("CT 23 - Chamar a função multiplicar, e enviar como primeiro parâmetro -5, como segundo parâmetro -10, retornar 50", () => {
        const resultado = Service.Multiplicar(-5,-10);
        expect(resultado).toBe(50);
    })
    it("CT 24 - Chamar a função multiplicar, e enviar como primeiro parâmetro 0, como segundo parâmetro 100, retornar 0", () => {
        const resultado = Service.Multiplicar(0,100);
        expect(resultado).toBe(0);
    })
    it("CT 25 - Chamar a função multiplicar, e enviar como primeiro parâmetro 1.5, como segundo parâmetro 2, retornar 3", () => {
        const resultado = Service.Multiplicar(1.5,2);
        expect(resultado).toBe(3);
    })
    it("CT 26 - Chamar a função multiplicar, e enviar como primeiro parâmetro 0.5, como segundo parâmetro 0.5, retornar 0.25", () => {
        const resultado = Service.Multiplicar(0.5,0.5);
        expect(resultado).toBe(0.25);
    })
    it("CT 27 - Chamar a função multiplicar, e enviar como primeiro parâmetro 'texto', como segundo parâmetro 5, retornar um erro", () => {
        const resultado = () => Service.Multiplicar("texto",5);
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 28 - Chamar a função multiplicar, e enviar como primeiro parâmetro 5, como segundo parâmetro 'texto', retornar um erro", () => {
        const resultado = () => Service.Multiplicar(5,"texto");
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 29 - Chamar a função multiplicar, e enviar como primeiro parâmetro 999, como segundo parâmetro 999, retornar 998001", () => {
        const resultado = Service.Multiplicar(999,999);
        expect(resultado).toBe(998001);
    })
    it("CT 30 - Chamar a função multiplicar, e enviar como primeiro parâmetro -2.5, como segundo parâmetro 4, retornar -10", () => {
        const resultado = Service.Multiplicar(-2.5,4);
        expect(resultado).toBe(-10);
    })
})

describe("Testes para função Divisão", () => {

    it("CT 31 - Chamar a função dividir, e enviar como primeiro parâmetro 100, como segundo parâmetro 10, retornar 10", () => {
        const resultado = Service.Dividir(100,10);
        expect(resultado).toBe(10);
    })
    it("CT 32 - Chamar a função dividir, e enviar como primeiro parâmetro 99, como segundo parâmetro 3, retornar 33", () => {
        const resultado = Service.Dividir(99,3);
        expect(resultado).toBe(33);
    })
    it("CT 33 - Chamar a função dividir, e enviar como primeiro parâmetro -50, como segundo parâmetro 5, retornar -10", () => {
        const resultado = Service.Dividir(-50,5);
        expect(resultado).toBe(-10);
    })
    it("CT 34 - Chamar a função dividir, e enviar como primeiro parâmetro -50, como segundo parâmetro -5, retornar 10", () => {
        const resultado = Service.Dividir(-50,-5);
        expect(resultado).toBe(10);
    })
    it("CT 35 - Chamar a função dividir, e enviar como primeiro parâmetro 5, como segundo parâmetro 2, retornar 2.5", () => {
        const resultado = Service.Dividir(5,2);
        expect(resultado).toBe(2.5);
    })
    it("CT 36 - Chamar a função dividir, e enviar como primeiro parâmetro 0, como segundo parâmetro 10, retornar 0", () => {
        const resultado = Service.Dividir(0,10);
        expect(resultado).toBe(0);
    })
    it("CT 37 - Chamar a função dividir, e enviar como primeiro parâmetro 10, como segundo parâmetro 0, retornar um erro", () => {
        const resultado = () => Service.Dividir(10,0);
        expect(resultado).toThrow("Coloque um divisor maior que zero");
    })
    it("CT 38 - Chamar a função dividir, e enviar como primeiro parâmetro 'texto', como segundo parâmetro 2, retornar um erro", () => {
        const resultado = () => Service.Dividir("texto",2);
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 39 - Chamar a função dividir, e enviar como primeiro parâmetro 20, como segundo parâmetro 'texto', retornar um erro", () => {
        const resultado = () => Service.Dividir(20,"texto");
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 40 - Chamar a função dividir, e enviar como primeiro parâmetro 1000000, como segundo parâmetro 1000, retornar 1000", () => {
        const resultado = Service.Dividir(1000000,1000);
        expect(resultado).toBe(1000);
    })
})

describe("Testes para função Raiz", () => {

    it("CT 41 - Chamar a função raizQuadrada, e enviar como parâmetro 4, retornar 2", () => {
        const resultado = Service.Raiz(4);
        expect(resultado).toBe(2);
    })
    it("CT 42 - Chamar a função raizQuadrada, e enviar como parâmetro 9, retornar 3", () => {
        const resultado = Service.Raiz(9);
        expect(resultado).toBe(3);
    })
    it("CT 43 - Chamar a função raizQuadrada, e enviar como parâmetro 16, retornar 4", () => {
        const resultado = Service.Raiz(16);
        expect(resultado).toBe(4);
    })
    it("CT 44 - Chamar a função raizQuadrada, e enviar como parâmetro 25, retornar 5", () => {
        const resultado = Service.Raiz(25);
        expect(resultado).toBe(5);
    })
    it("CT 45 - Chamar a função raizQuadrada, e enviar como parâmetro 0, retornar 0", () => {
        const resultado = Service.Raiz(0);
        expect(resultado).toBe(0);
    })
    it("CT 46 - Chamar a função raizQuadrada, e enviar como parâmetro 2.25, retornar 1.5", () => {
        const resultado = Service.Raiz(2.25);
        expect(resultado).toBe(1.5);
    })
    it("CT 47 - Chamar a função raizQuadrada, e enviar como parâmetro 10000, retornar 100", () => {
        const resultado = Service.Raiz(1000);
        expect(resultado).toBe(100);
    })
    it("CT 48 - Chamar a função raizQuadrada, e enviar como parâmetro -4, retornar um erro", () => {
        const resultado = () => Service.Raiz(-4);
        expect(resultado).toThrow("Coloque somente números positivos");
    })
    it("CT 49 - Chamar a função raizQuadrada, e enviar como parâmetro 'texto', retornar um erro", () => {
        const resultado = () => Service.Raiz("texto");
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 50 - Chamar a função raizQuadrada, e enviar como parâmetro 1, retornar 1", () => {
        const resultado = Service.Raiz(1);
        expect(resultado).toBe(1);
    })
})

describe("Testes para função Potencia", () => {

    it("CT 51 - Chamar a função potência, e enviar como primeiro parâmetro 2, como segundo parâmetro 3, retornar 8", () => {
        const resultado = Service.Potencia(2,3);
        expect(resultado).toBe(8);
    })
    it("CT 52 - Chamar a função potência, e enviar como primeiro parâmetro 5, como segundo parâmetro 2, retornar 25", () => {
        const resultado = Service.Potencia(5,2);
        expect(resultado).toBe(25);
    })
    it("CT 53 - Chamar a função potência, e enviar como primeiro parâmetro 10, como segundo parâmetro 0, retornar 1", () => {
        const resultado = Service.Potencia(10,0);
        expect(resultado).toBe(1);
    })
    it("CT 54 - Chamar a função potência, e enviar como primeiro parâmetro 0, como segundo parâmetro 5, retornar 0", () => {
        const resultado = Service.Potencia(0,5);
        expect(resultado).toBe(0);
    })
    it("CT 55 - Chamar a função potência, e enviar como primeiro parâmetro -2, como segundo parâmetro 2, retornar 4", () => {
        const resultado = Service.Potencia(-2,2);
        expect(resultado).toBe(4);
    })
    it("CT 56 - Chamar a função potência, e enviar como primeiro parâmetro -2, como segundo parâmetro 3, retornar -8", () => {
        const resultado = Service.Potencia(-2,3);
        expect(resultado).toBe(-8);
    })
    it("CT 57 - Chamar a função potência, e enviar como primeiro parâmetro 4, como segundo parâmetro 0.5, retornar 2", () => {
        const resultado = Service.Potencia(4,0.5);
        expect(resultado).toBe(2);
    })
    it("CT 58 - Chamar a função potência, e enviar como primeiro parâmetro 1.5, como segundo parâmetro 2, retornar 2.25", () => {
        const resultado = Service.Potencia(1.5,2);
        expect(resultado).toBe(2.25);
    })
    it("CT 59 - Chamar a função potência, e enviar como primeiro parâmetro 'texto', como segundo parâmetro 2, retornar um erro", () => {
        const resultado = () => Service.Potencia("texto",2);
        expect(resultado).toThrow("Informar somente números");
    })
    it("CT 60 - Chamar a função potência, e enviar como primeiro parâmetro 2, como segundo parâmetro 'texto', retornar um erro", () => {
        const resultado = () => Service.Potencia(2,"texto");
        expect(resultado).toBe("Informar somente números");
    })
})