// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + somaNumeros(n - 1);
  }
}

// Verifica se um número é par
function ehPar(number) {
  return number % 2 === 0;
}


function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let result = 0;

    for (let i = 3; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }

    return result;
  }
}

module.exports = { somaNumeros, ehPar, fibonacci };
