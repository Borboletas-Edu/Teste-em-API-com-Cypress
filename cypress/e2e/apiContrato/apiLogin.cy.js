/// <reference types = "cypress"/>


describe('Api de login', () => {

  it('Deve fazer login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: '/public/authUser',
      body: {
        "email": Cypress.env('emailLogin'),
        "phone": null,
        "password": Cypress.env('senhaLogin'),
        "userId": Cypress.env("idLogin")
      }
    }).should((resposta)=>{
      expect(resposta.status).to.equal(200)
    })
  
  });

    it('Deve retornar token de Autenticação', () => {
    cy.request({
        method: 'POST',
        url: '/public/authUser',
        body: {
            "email": Cypress.env('emailLogin'),
            "phone": 'null',
            "password": Cypress.env('senhaLogin'),
            "userId": Cypress.env('idlogin')
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
        cy.log(response.body)
    });
    
    });
});


