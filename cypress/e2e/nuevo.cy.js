describe ('HappyPath- Direccion UI', ()=> {
 it('Direccion UI', ()=> {
cy.visit('https://endearing-lollipop-19f16d.netlify.app/')    
cy.get('[data-cy="nav-interacciones-ui"]').click() 
cy.get('[data-cy="username-input"]').type('frannkiss')
cy.get('#username').type('frannkiss')
})



})