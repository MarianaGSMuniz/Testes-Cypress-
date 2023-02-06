describe ('Alura Buscar cursos',() => {

    beforeEach(() =>{
        cy.visit ('https://www.alura.com.br')
    })
    
    it ('buscar curso de Node.js', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Node.js');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should ('contain', 'Formação Avançando em Node.js');
    })
})