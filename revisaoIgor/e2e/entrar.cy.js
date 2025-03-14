/// <reference types="cypress"/>

describe('Visita página de login', () => {
    it("visita página", () => {
      cy.visit("./paginas/teste1.html")
    })
  })

describe('Deve preencher a página de login', () => {
    it("Preenche email e senha válidos", () => {
        cy.visit("../paginas/teste1.html")

        cy.get('#email')
            .type("user@example.com")
            .should("have.value", "user@example.com")
        cy.get("#senha")
            .type("password123")
            .should("have.value", "password13")

        cy.get('#login').click()
    })
})