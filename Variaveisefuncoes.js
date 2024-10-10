// Soma:
function soma(a, b) {
    return a + b;
}
let resultado1 = soma(5, 7);
console.log(resultado1);

//subtraçâo
function subtrai(a, b) {
    return a - b;
}
let resultado2 = subtrai(10, 4);
console.log(resultado2);

//multiplicação
function multiplica(a, b) {
    return a * b;
}
let resultado3 = multiplica(6, 7);
console.log(resultado3);

//divisão
function divide(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
}
let resultado4 = divide(20, 4);
console.log(resultado4);

//Mostra Resultado
function realizarOperacoes(num1, num2) {
    function soma(a, b) {
        return a + b;
    }

    function subtrai(a, b) {
        return a - b;
    }

    function multiplica(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero não é permitida.";
        }
        return a / b;
    }

    console.log(`[Soma] entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`[Subtração] entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`[Multiplicação] entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`[Divisão] entre ${num1} e ${num2}:`, divide(num1, num2));
}
realizarOperacoes(10, 5);