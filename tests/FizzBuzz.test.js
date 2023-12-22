//Imports
const FizzBuzz = require("../FizzBuzz");

/**
Feature para saber cuándo un número es primo de 3 y 5
    1. Cuando el usuario digite un número divisible por 3, devuelve Fizz,
    2. Cuando el usuario digite un número divisible por 5, devuelve Buzz,
    3. Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz,
    4. Cuando el usuario digite un número que no sea divisible por 3 y 5, devuelve el número

*/

describe('Tests que validan los múltiplos de 3 y 5', () => {
    test('Test devuelve Fizz cuando es divisible por 3', () => {
        /*
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: Cuando éste sea divisible por 3
            * THEN / ASSERT: devuelve Fizz como resultado
         */
        
        //ARRANGE: preparar el escenario
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";
        const fizz = new FizzBuzz(); //Me estoy creando un objeto de la clase FizzBuzz y se lo asigno a una constante que se llama fizz
        
        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });
   test('Test resumido devuelve Fizz cuando es divisible por 3', () => {
        expect(new FizzBuzz().validar_primos_3_5(3)).toBe("Fizz");
    });
    test('Test devuelve Buzz cuando es divisible por 5', () => {
        /*
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: Cuando éste sea divisible por 5
            * THEN / ASSERT: devuelve Buzz como resultado
         */
        
        //ARRANGE: preparar el escenario
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";
        const fizz = new FizzBuzz(); 
        
        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })
})