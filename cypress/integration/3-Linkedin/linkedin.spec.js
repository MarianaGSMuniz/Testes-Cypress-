describe ('Login e registro de usuários',() => {

    beforeEach(() =>{
        cy.visit ('https://www.linkedin.com')
    })
    
    it ('verificar mensagens validacao', () => {
        cy.contains('a', 'New to LinkedIn? Join now').click(); 
        cy.contains ('button', 'Agree & Join').click;
        cy.contains('p class', 'Please enter your email address or mobile number.').should('be.visible'); 
        cy.contains ('button', 'Agree & Join').click;   
        cy.contains ('p class', 'Please enter your password.').should('be.visible');
    })
})
it ('verificar mensagens de email invalido', () => {
    cy.contains('a', 'New to LinkedIn? Join now').click(); 
    cy.contains ('button', 'Agree & Join').click;
    cy.get ('input[placeholder="Email or phone number"]').type('Mariana')
    cy.contains ('p class', 'Please enter a valid email address or mobile number.').should('be.visible');
})