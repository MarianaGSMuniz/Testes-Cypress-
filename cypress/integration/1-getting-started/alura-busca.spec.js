describe ('Alura Buscar cursos',() => {

    beforeEach(() =>{
        cy.visit ('https://www.alura.com.br')
    })
    
    it ('buscar curso de Node.js', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Node.js');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
        .should ('have.text', 'Formação Avançando em Node.js');
    })
})