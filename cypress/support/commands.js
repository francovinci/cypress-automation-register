// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
<<<<<<< HEAD
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
=======
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('registrarUsuario', ({
  nombre,
  apellido,
  provincia,
  localidad,
  fechaNacimiento,
  dni,
  telefono,
  email,
  confirmarEmail,
  password,
  repetirPassword
}) => {
  cy.visit('https://ticketazo.com.ar/auth/login?callbackUrl=/editProfile')
  cy.get('[data-cy="btn-register-user"]').click()  // <- paréntesis añadidos
  cy.get('[data-cy="input-nombres"]').type(nombre)
  cy.get('[data-cy="input-apellido"]').clear().type(apellido)
  cy.get('[data-cy="input-telefono"]').clear().type(telefono)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
  cy.get('[data-cy="select-provincia"]').click().type(provincia + '{enter}')
  cy.get('[data-cy="select-localidad"]').click().type(localidad + '{enter}')
  const { dd, mm, aaaa } = fechaNacimiento

  cy.get('[data-cy="input-fecha-nacimiento"]').click()
  cy.contains('dd').click().type(dd)
  cy.get('[data-cy="input-fecha-nacimiento"]').click()
  cy.contains('mm').click().type(mm)
  cy.get('[data-cy="input-fecha-nacimiento"]').click()
  cy.contains('aaaa').click().type(aaaa)
  

  cy.get('[data-cy="input-email"]').clear().type(email)
  cy.get('[data-cy="input-confirmar-email"]').clear().type(confirmarEmail || email)
  cy.get('[data-cy="input-password"]').clear().type(password)
  cy.get('[data-cy="input-repetir-password"]').clear().type(repetirPassword || password)

  cy.get('[data-cy="btn-registrarse"]').click()
})
>>>>>>> 4df4d59 (Primer commit: pruebas automatizadas Cypress)
