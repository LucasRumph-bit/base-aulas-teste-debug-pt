import app from '../../src/index.js'
import request from 'supertest'
import { describe, it, expect } from '@jest/globals';

describe("Teste da API - Endpoint Somar", () => {

    it("CT01 - POST /api/somar - primeiro parâmetro 1, segundo parâmetro 99, retornar 100", async () => {
        const body = { num1: 1, num2: 99 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(100);
    })

    it("CT02 - POST /api/somar - primeiro parâmetro -1, segundo parâmetro 99, retornar 98", async () => {
        const body = { num1: -1, num2: 99 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(98);
    })

    it("CT03 - POST /api/somar - primeiro parâmetro 1, segundo parâmetro -99, retornar -98", async () => {
        const body = { num1: 1, num2: -99 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-98);
    })

    it("CT04 - POST /api/somar - primeiro parâmetro -1, segundo parâmetro -99, retornar -100", async () => {
        const body = { num1: -1, num2: -99 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-100);
    })

    it("CT05 - POST /api/somar - primeiro parâmetro 1.5, segundo parâmetro 2.3, retornar 3.8", async () => {
        const body = { num1: 1.5, num2: 2.3 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(3.8);
    })

    it("CT06 - POST /api/somar - primeiro parâmetro 'batata', segundo parâmetro 1, retornar erro", async () => {
        const body = { num1: "batata", num2: 1 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT07 - POST /api/somar - primeiro parâmetro 1, segundo parâmetro 'batata', retornar erro", async () => {
        const body = { num1: 1, num2: "batata" };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT08 - POST /api/somar - primeiro parâmetro 0, segundo parâmetro 1, retornar 1", async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    })

    it("CT09 - POST /api/somar - primeiro parâmetro 1, segundo parâmetro 0, retornar 1", async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    })

    it("CT10 - POST /api/somar - primeiro parâmetro -5.5, segundo parâmetro 2.5, retornar -3", async () => {
        const body = { num1: -5.5, num2: 2.5 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-3);
    })
})

describe("Teste da API - Endpoint Subtrair", () => {

    it("CT11 - POST /api/subtrair - primeiro parâmetro 100, segundo parâmetro 1, retornar 99", async () => {
        const body = { num1: 100, num2: 1 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(99);
    })

    it("CT12 - POST /api/subtrair - primeiro parâmetro -50, segundo parâmetro 25, retornar -75", async () => {
        const body = { num1: -50, num2: 25 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-75);
    })

    it("CT13 - POST /api/subtrair - primeiro parâmetro -10, segundo parâmetro -20, retornar 10", async () => {
        const body = { num1: -10, num2: -20 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(10);
    })

    it("CT14 - POST /api/subtrair - primeiro parâmetro 0, segundo parâmetro 15, retornar -15", async () => {
        const body = { num1: 0, num2: 15 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-15);
    })

    it("CT15 - POST /api/subtrair - primeiro parâmetro 15, segundo parâmetro 0, retornar 15", async () => {
        const body = { num1: 15, num2: 0 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(15);
    })

    it("CT16 - POST /api/subtrair - primeiro parâmetro 5.5, segundo parâmetro 2.2, retornar 3.3", async () => {
        const body = { num1: 5.5, num2: 2.2 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(3.3);
    })

    it("CT17 - POST /api/subtrair - primeiro parâmetro 'abc', segundo parâmetro 5, retornar erro", async () => {
        const body = { num1: "abc", num2: 5 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT18 - POST /api/subtrair - primeiro parâmetro 10, segundo parâmetro 'abc', retornar erro", async () => {
        const body = { num1: 10, num2: "abc" };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT19 - POST /api/subtrair - primeiro parâmetro 999999, segundo parâmetro 999998, retornar 1", async () => {
        const body = { num1: 999999, num2: 999998 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    })

    it("CT20 - POST /api/subtrair - primeiro parâmetro -1.5, segundo parâmetro 2.5, retornar -4", async () => {
        const body = { num1: -1.5, num2: 2.5 };
        const response = await request(app).post("/api/subtrair").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-4);
    })
})

describe("Teste da API - Endpoint Multiplicar", () => {

    it("CT21 - POST /api/multiplicar - primeiro parâmetro 10, segundo parâmetro 10, retornar 100", async () => {
        const body = { num1: 10, num2: 10 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(100);
    })

    it("CT22 - POST /api/multiplicar - primeiro parâmetro -5, segundo parâmetro 10, retornar -50", async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-50);
    })

    it("CT23 - POST /api/multiplicar - primeiro parâmetro -5, segundo parâmetro -10, retornar 50", async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(50);
    })

    it("CT24 - POST /api/multiplicar - primeiro parâmetro 0, segundo parâmetro 100, retornar 0", async () => {
        const body = { num1: 0, num2: 100 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    })

    it("CT25 - POST /api/multiplicar - primeiro parâmetro 1.5, segundo parâmetro 2, retornar 3", async () => {
        const body = { num1: 1.5, num2: 2 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(3);
    })

    it("CT26 - POST /api/multiplicar - primeiro parâmetro 0.5, segundo parâmetro 0.5, retornar 0.25", async () => {
        const body = { num1: 0.5, num2: 0.5 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.25);
    })

    it("CT27 - POST /api/multiplicar - primeiro parâmetro 'texto', segundo parâmetro 5, retornar erro", async () => {
        const body = { num1: "texto", num2: 5 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT28 - POST /api/multiplicar - primeiro parâmetro 5, segundo parâmetro 'texto', retornar erro", async () => {
        const body = { num1: 5, num2: "texto" };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT29 - POST /api/multiplicar - primeiro parâmetro 999, segundo parâmetro 999, retornar 998001", async () => {
        const body = { num1: 999, num2: 999 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(998001);
    })

    it("CT30 - POST /api/multiplicar - primeiro parâmetro -2.5, segundo parâmetro 4, retornar -10", async () => {
        const body = { num1: -2.5, num2: 4 };
        const response = await request(app).post("/api/multiplicar").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-10);
    })
})

describe("Teste da API - Endpoint Dividir", () => {

    it("CT31 - POST /api/dividir - primeiro parâmetro 100, segundo parâmetro 10, retornar 10", async () => {
        const body = { num1: 100, num2: 10 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(10);
    })

    it("CT32 - POST /api/dividir - primeiro parâmetro 99, segundo parâmetro 3, retornar 33", async () => {
        const body = { num1: 99, num2: 3 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(33);
    })

    it("CT33 - POST /api/dividir - primeiro parâmetro -50, segundo parâmetro 5, retornar -10", async () => {
        const body = { num1: -50, num2: 5 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-10);
    })

    it("CT34 - POST /api/dividir - primeiro parâmetro -50, segundo parâmetro -5, retornar 10", async () => {
        const body = { num1: -50, num2: -5 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(10);
    })

    it("CT35 - POST /api/dividir - primeiro parâmetro 5, segundo parâmetro 2, retornar 2.5", async () => {
        const body = { num1: 5, num2: 2 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(2.5);
    })

    it("CT36 - POST /api/dividir - primeiro parâmetro 0, segundo parâmetro 10, retornar 0", async () => {
        const body = { num1: 0, num2: 10 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    })

    it("CT37 - POST /api/dividir - primeiro parâmetro 10, segundo parâmetro 0, retornar erro", async () => {
        const body = { num1: 10, num2: 0 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Coloque um divisor maior que zero");
    })

    it("CT38 - POST /api/dividir - primeiro parâmetro 'texto', segundo parâmetro 2, retornar erro", async () => {
        const body = { num1: "texto", num2: 2 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT39 - POST /api/dividir - primeiro parâmetro 20, segundo parâmetro 'texto', retornar erro", async () => {
        const body = { num1: 20, num2: "texto" };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT40 - POST /api/dividir - primeiro parâmetro 1000000, segundo parâmetro 1000, retornar 1000", async () => {
        const body = { num1: 1000000, num2: 1000 };
        const response = await request(app).post("/api/dividir").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1000);
    })
})

describe("Teste da API - Endpoint Raiz", () => {

    it("CT41 - POST /api/raiz - parâmetro 4, retornar 2", async () => {
        const body = { num1: 4 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(2);
    })

    it("CT42 - POST /api/raiz - parâmetro 9, retornar 3", async () => {
        const body = { num1: 9 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(3);
    })

    it("CT43 - POST /api/raiz - parâmetro 16, retornar 4", async () => {
        const body = { num1: 16 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(4);
    })

    it("CT44 - POST /api/raiz - parâmetro 25, retornar 5", async () => {
        const body = { num1: 25 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    })

    it("CT45 - POST /api/raiz - parâmetro 0, retornar 0", async () => {
        const body = { num1: 0 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    })

    it("CT46 - POST /api/raiz - parâmetro 2.25, retornar 1.5", async () => {
        const body = { num1: 2.25 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1.5);
    })

    it("CT47 - POST /api/raiz - parâmetro 10000, retornar 100", async () => {
        const body = { num1: 10000 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(100);
    })

    it("CT48 - POST /api/raiz - parâmetro -4, retornar erro", async () => {
        const body = { num1: -4 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Coloque somente números positivos");
    })

    it("CT49 - POST /api/raiz - parâmetro 'texto', retornar erro", async () => {
        const body = { num1: "texto" };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT50 - POST /api/raiz - parâmetro 1, retornar 1", async () => {
        const body = { num1: 1 };
        const response = await request(app).post("/api/raiz").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    })
})

describe("Teste da API - Endpoint Potencia", () => {

    it("CT51 - POST /api/potencia - primeiro parâmetro 2, segundo parâmetro 3, retornar 8", async () => {
        const body = { num1: 2, num2: 3 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(8);
    })

    it("CT52 - POST /api/potencia - primeiro parâmetro 5, segundo parâmetro 2, retornar 25", async () => {
        const body = { num1: 5, num2: 2 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(25);
    })

    it("CT53 - POST /api/potencia - primeiro parâmetro 10, segundo parâmetro 0, retornar 1", async () => {
        const body = { num1: 10, num2: 0 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    })

    it("CT54 - POST /api/potencia - primeiro parâmetro 0, segundo parâmetro 5, retornar 0", async () => {
        const body = { num1: 0, num2: 5 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0);
    })

    it("CT55 - POST /api/potencia - primeiro parâmetro -2, segundo parâmetro 2, retornar 4", async () => {
        const body = { num1: -2, num2: 2 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(4);
    })

    it("CT56 - POST /api/potencia - primeiro parâmetro -2, segundo parâmetro 3, retornar -8", async () => {
        const body = { num1: -2, num2: 3 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-8);
    })

    it("CT57 - POST /api/potencia - primeiro parâmetro 4, segundo parâmetro 0.5, retornar 2", async () => {
        const body = { num1: 4, num2: 0.5 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(2);
    })

    it("CT58 - POST /api/potencia - primeiro parâmetro 1.5, segundo parâmetro 2, retornar 2.25", async () => {
        const body = { num1: 1.5, num2: 2 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(2.25);
    })

    it("CT59 - POST /api/potencia - primeiro parâmetro 'texto', segundo parâmetro 2, retornar erro", async () => {
        const body = { num1: "texto", num2: 2 };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })

    it("CT60 - POST /api/potencia - primeiro parâmetro 2, segundo parâmetro 'texto', retornar erro", async () => {
        const body = { num1: 2, num2: "texto" };
        const response = await request(app).post("/api/potencia").send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.err).toBe("Informar somente números");
    })
})