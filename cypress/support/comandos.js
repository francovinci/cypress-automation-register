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
  cy.get('[data-cy="btn-register-user"]').click
  cy.get('#nombre').clear().type(nombre)
  cy.get('#apellido').clear().type(apellido)
  cy.get('#provincia').select(provincia)
  cy.get('#localidad').select(localidad)

  cy.get('#fechaDD').clear().type(fechaNacimiento.dd)
  cy.get('#fechaMM').clear().type(fechaNacimiento.mm)
  cy.get('#fechaAAAA').clear().type(fechaNacimiento.aaaa)

  cy.get('#dni').clear().type(dni)
  cy.get('#telefono').clear().type(telefono)
  cy.get('#email').clear().type(email)
  cy.get('#confirmarEmail').clear().type(confirmarEmail || email)
  cy.get('#password').clear().type(password)
  cy.get('#repetirPassword').clear().type(repetirPassword || password)

  cy.get('#btn-registrar').click()
})