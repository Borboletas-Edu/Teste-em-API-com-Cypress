/// <reference types = "cypress"/>
import contrato from "./Contratos/produtos.contratos";

describe('Testes de respostas na API de categorias', () => {
  
  let token
  before(() => {
    cy.token().then(tkn => { token = tkn })
  });

  it('Deve adicionar um produto', () => {
    cy.addProduct(token).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('product added') 
    })
  });

  it('Deve validar contrato da api de produtos', () => {
    cy.addProduct(token).then(response => {
      return contrato.validateAsync(response.body.data)
    })
  });

  it('Deve editar produto', () => {
    cy.editProduct(token).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('product updated')
    });
  });

  it('Deve excluir produto', () => {
    cy.delProduct(token).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('product deleted')
    });
  });

});



