/* eslint-disable no-undef */
import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens).toHaveLength(0);
    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it('Deve ter itens', () => {
    const carrinho = new Carrinho();
    const item = new Item('teclado', 45.5, 3);
    const item2 = new Item('mouse', 60, 10);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adiciona(new Item('monitor', 810, 15));

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens).toContain(item2);
    expect(carrinho.itens).toHaveLength(3);
  });

  it('Carrinho deve conter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();

    carrinho.adicionaFrete(150);

    expect(carrinho.frete).toBe(150);
  });

  it('Deve finalizar a compra com sucesso', () => {
    const carrinho = new Carrinho();
    carrinho.adiciona(new Item('chuveiro', 179.90, 2));
    carrinho.adiciona(new Item('resistência', 40, 10));
    carrinho.adicionaFrete(120);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 759.80,
      frete: 120,
      total: 879.80,
    });
  });
});
