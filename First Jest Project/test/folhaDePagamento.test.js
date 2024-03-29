import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Teste dos cálculos da folha de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve retornar o salario com os descontos', () => {
    const esperado = 2200;
    const retornado = calculaDescontos(2500, 300);

    expect(retornado).toBe(esperado);
  });
});
