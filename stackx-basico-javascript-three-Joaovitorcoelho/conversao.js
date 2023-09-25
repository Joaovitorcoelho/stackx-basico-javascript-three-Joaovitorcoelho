// Converte uma string para um número inteiro
function convertToInt(string) {
    const parsedInt = parseInt(string);
    if (isNaN(parsedInt)) {
      return 'Não é um número válido';
    } else {
      return parsedInt;
    }
  }
  
  // Converte um número inteiro para uma string
  function convertToString(number) {
    return number.toString();
  }
  
  // Converte um valor para um booleano
  function convertToBoolean(value) {
    if (value === true || value === 'true' || value === 1 || value === '1') {
      return true;
    } else if (value === false || value === 'false' || value === 0 || value === '0') {
      return false;
    } else {
      return 'Valor não pode ser convertido para booleano';
    }
  }
  
  module.exports = { convertToInt, convertToString, convertToBoolean };
  