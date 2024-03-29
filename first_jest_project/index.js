const somaHorasExtras = (salario, valorHorasExtra) => salario + valorHorasExtra;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculaDescontos,
};
/*
esse código seria necessário se não fosse usado o jest

const assert = require('node:assert/strict');

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou!`);
  } catch {
    console.error(`${titulo} não passou!`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDescontos', () => {
  const esperado = 2200;
  const retornado = calculaDescontos(2500, 300);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
*/
