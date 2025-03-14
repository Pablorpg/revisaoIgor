/// <reference types="cypress"/>

describe('Visita página de login', () => {
  it("visita página", () => {
    cy.visit("./paginas/login.html")
  })
})