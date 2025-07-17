//Login

Cypress.Commands.add('token', () => {
    return cy.request({
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
        return response.body.data.token 
        
    });
});

//Categorias

Cypress.Commands.add('addCategory', (token) => {
    return cy.request({
      method: 'POST',
      url: '/api/addCategory',
      body: {
        "authorization": token,
        "name": `Deltarune${Math.floor(Math.random() * 1000)}`,
        "photo": "https://projectn.com.br/wp-content/uploads/2022/09/deltarune-capitulo-2-comecou-a-ser-desenvolvido-em-maio-deste-ano-1024x460.webp"
      }
    })
});

Cypress.Commands.add('editCategory', (token) => {
    return cy.addCategory(token).then((response) => {
        let id = response.body.data._id
        return cy.request({
            method: 'PUT',
            url: `/api/editCategory/${id}`,
            body: {
                "authorization": token,
                "name": "DeltaruneEditado",
                "photo": "https://belenos.me/media/2024-02-webp-jpeg-jpg-png-freepik-pikisuperstar.webp"
            }
        });
    });
});

Cypress.Commands.add('delCategory', (token) => {
    return cy.addCategory(token).then((response) =>{
        let id = response.body.data._id
        return cy.request({
            method: 'DELETE',
            url: `/api/deleteCategory/${id}`,
            body: {
                "authorization": token
            }
        })
    })

});

//Produtos

Cypress.Commands.add('addProduct', (token) => {
   return cy.fixture('product').then((dados) => {
        return cy.request({
            method: 'POST',
            url: '/api/addProduct',
            body: {
                "authorization": token,
                "name": `${dados.name + Math.floor(Math.random() * 1000)}`,
                "price": dados.price,
                "quantity": dados.quantity,
                "description": dados.description,
                "visible": "true",
                "photos": dados.photos
            } 
        });  
   }); 
});

Cypress.Commands.add('editProduct', (token) => {
    return cy.addProduct(token).then((response) => {
        let id = response.body.data._id 
        return cy.request({
            method: "PUT",
            url: `api/editProduct/${id}`,
            body: {
                "authorization": token,
                "name": "DeltaruneEditado", 
            }
        });
    });
});

Cypress.Commands.add('delProduct', (token) => {
    return cy.addProduct(token).then((response) => {
        let id = response.body.data._id 
        return cy.request({
            method: "DELETE",
            url: `api/deleteProduct/${id}`,
            body: {
                "authorization": token
            }
        });
    });
});