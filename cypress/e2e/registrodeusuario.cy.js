describe('Registro de usuario', () => {
  beforeEach(() => {
    cy.fixture('fixture1').as('userData')
  })

  it('DNI < 8 dígitos', function() {
    cy.registrarUsuario({
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniInvalidoCorto,
      telefono: this.userData.telefonoValido,
      email: this.userData.emailValido,
      password: this.userData.passwordValida
    })

    cy.get('.error-message').should('contain', 'utiliza un formato que coincida con el solicitado')
  })

  it('DNI > 8 dígitos', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniInvalidoLargo,
      telefono: this.userData.telefonoValido,
      email: this.userData.emailValido,
      password: this.userData.passwordValida
  })
})
it('Telefono con letras', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniValido,
      telefono: this.userData.telefonoConLetras,
      email: this.userData.emailValido,
      password: this.userData.passwordValida
  })
})
it('Telefono valido', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniValido,
      telefono: this.userData.telefonoValido,
      email: this.userData.emailValido,
      password: this.userData.passwordValida
  })
})
it('Telefono con Exceso', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniValido,
      telefono: this.userData.telefonoExceso,
      email: this.userData.emailValido,
      password: this.userData.passwordValida
  })
})

it('Email sin ARROBA', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniValido,
      telefono: this.userData.telefonoValido,
      email: this.userData.emailInvalido,
      password: this.userData.passwordValida
  })
cy.get('.error-message').should('contain','Incluye un signo "@" en la dirección de correo electrónico. La dirección "celeste.rodriguezgmail.com" no incluye el signo "@".')
})
it('PASSWORD MINIMA', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniValido,
      telefono: this.userData.telefonoValido,
      email: this.userData.emailValido,
      password: this.userData.passwordCorta
  })
})
it('PASSWORD COMPLEJA', function() {
    cy.registrarUsuario({ 
      nombre: this.userData.nombre,
      apellido: this.userData.apellido,
      provincia: this.userData.provincia,
      localidad: this.userData.localidad,
      fechaNacimiento: this.userData.fechaNacimiento,
      dni: this.userData.dniValido,
      telefono: this.userData.telefonoValido,
      email: this.userData.emailValido,
      password: this.userData.passwordSinSimbolo
  })
})
})