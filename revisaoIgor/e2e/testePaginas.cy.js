/// <reference types="cypress"/>


describe('Visita página de login', () => {
    it("visita página", () => {
        cy.visit("./paginas/teste3.html")
    })
})

describe('Navegando pelo site', () => {
    it("Teste de click na navegação", () => {
        cy.visit("../paginas/teste3.html")

        cy.get('#home').click()
        cy.get('#sobre').click()
        cy.get('#servicos').click()
        cy.get('#contatos').click()
    })
})