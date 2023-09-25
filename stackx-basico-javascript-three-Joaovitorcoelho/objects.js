// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    const largura = retangulo.largura;
    const altura = retangulo.altura;
  
    if (largura <= 0 || altura <= 0) {
      return 'As dimensões do retângulo devem ser positivas';
    }
  
    const area = largura * altura;
    const perimetro = 2 * (largura + altura);
  
    return {
      area: area,
      perimetro: perimetro,
    };
  }
  
  // Verifica se uma pessoa é maior de idade
  function ehAdulto(pessoa) {
    const idade = pessoa.idade;
    return idade >= 18;
  }
  
  // Concatena os valores de um objeto em uma string
  function concatenaValores(obj) {
    const values = Object.values(obj);
    return values.join(' ');
  }
  
  module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
  