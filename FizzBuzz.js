class FizzBuzz {
    validar_primos_3_5(num) {
        if (num %3 === 0 && num %5 === 0){
            return "FizzBuzz";
        }
        if (num %3 === 0){
            return "Fizz";
        }
        if (num %5 === 0){
            return "Buzz";
        }
    }
};

module.exports = FizzBuzz;