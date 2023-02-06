describe ('Login e registro de usuários',() => {

    beforeEach(() =>{
        cy.visit ('https://www.linkedin.com')
    })
    
    it ('verificar mensagens validacao', () => {
        cy.contains('a', 'New to LinkedIn? Join now').click(); 
        cy.contains ('button', 'Agree & Join').click;
        cy.contains('p', 'Please enter your email address or mobile number.').should('be.visible'); 
        cy.contains ('button', 'Agree & Join').click;   
        cy.contains ('p', 'Please enter your password.').should ('be.visible');
    })
})