import { describe, expect, test } from 'vitest';
import { add, multiply, substrac } from './math.helper'

describe('add', () => {
    test('should add postives numbers', () => {
        console.log('Hello world');


        //1.arrange
        const a = 1;
        const b = 3;

        //2.act
        const result = add(a, b)

        console.log({ result });
        //3.assert
        expect(result).toBe(a + b)


    });

    test('should add negatives numbers', () => {
        console.log('Hello world');


        //1.arrange
        const a = -1;
        const b = -3;

        //2.act
        const result = add(a, b)

        console.log({ result });
        //3.assert
        expect(result).toBe(a + b)


    });




})

describe('substract', () => {
    test('should substract postives numbers', () => {
        console.log('Hello world');


        //1.arrange
        const a = 1;
        const b = 3;

        //2.act
        const result = substrac(a, b)

        console.log({ result });
        //3.assert
        expect(result).toBe(a - b)


    });

    test('should substract negatives numbers', () => {
        console.log('Hello world');


        //1.arrange
        const a = -1;
        const b = -3;

        //2.act
        const result = substrac(a, b)

        console.log({ result });
        //3.assert
        expect(result).toBe(a - b)


    });


})

describe('multiply', () => {
    test('should multiply postives numbers', () => {
        console.log('Hello world');


        //1.arrange
        const a = 1;
        const b = 3;

        //2.act
        const result = multiply(a, b)

        console.log({ result });
        //3.assert
        expect(result).toBe(a * b)


    });

    test('should multiply negatives numbers', () => {

        //1.arrange
        const a = -1;
        const b = -3;

        //2.act
        const result = multiply(a, b)

        console.log({ result });
        //3.assert
        expect(result).toBe(a * b)


    });
})