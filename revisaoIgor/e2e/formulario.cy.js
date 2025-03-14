/// <reference types="cypress"/>

describe('Visita página de login', () => {
    it("visita página", () => {
      cy.visit("./paginas/teste2.html")
    })
  })

describe('Deve preencher a página de login', () => {
    it("Preenche email e senha válidos", () => {
        cy.visit("../paginas/teste2.html")

        cy.get('#nome')
            .type("Pablo")
        cy.get("#email")
            .type("teste@teste.com")
            .should("have.value", "teste@teste.com")
        cy.get("#msg")
        .type("Testando o formulário")

        cy.get('#botao').click()
    })
})