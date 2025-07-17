/// <reference types = "cypress"/>
import contrato from "./Contratos/categorias.contratos";

describe('Testes de respostas na API de categorias', () => {

  let token
  before(() => {
    cy.token().then(tkn => { token = tkn})
  });

  it('Deve acessar as categorias categorias', () => {
    cy.request({
      method: 'GET',
      url: '/public/getCategories',
  }).then((response) =>{
    expect(response.status).to.equal(200)

  })

  });

  it('Deve adicionar uma categoria', () => {
    cy.addCategory(token).then((response)=>{
    expect(response.status).to.equal(200)
    expect(response.body.message).to.equal('category added')
    })

  });

 it('Deve validar contrato da api de categorias', () => {
    cy.addCategory(token).then(response => {
      return contrato.validateAsync(response.body.data)
    })
  }); 

  it('Deve cadastrar e editar uma categoria', () => {
    cy.editCategory(token).then((response)=>{
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('category updated')
    })
  });

  it('Deve excluir categoria', () => {
  cy.delCategory(token).then((response)=>{
    expect(response.status).to.equal(200)
    expect(response.body.message).to.equal('category deleted')
  })  

  
  });
})