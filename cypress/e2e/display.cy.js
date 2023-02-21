describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations' , {
      'reservations': [
        {
            id: 1,
            name: "Christie",
            date: "12/29",
            time: "7:00",
            number: 12
          },
          {
            id: 2,
            name: "Leta",
            date: "4/5",
            time: "7:00",
            number: 2
          },
          {
            id: 3,
            name: "Pam",
            date: "1/21",
            time: "6:00",
            number: 4
          },
      ]
    }).as('getReservations')
  })

  it('should have a title displayed', () => {
    cy.get('.app-title')
      .should('be.visible')
  })
  
  it('should have a form displayed', () => {
    cy.get('.form')
      .should('be.visible')
  })

  it('should contain a card for Christie, Leta, & Pam', () => {
    cy.get('.card')
      .contains('Christie')
      .should('be.visible')
    cy.get('.card')
      .contains('Leta')
      .should('be.visible')
      cy.get('.card')
      .contains('Pam')
      .should('be.visible')
  })

  it('should be able to keep track of name input', () => {
    cy.get('input[name="name"]')
      .click()
      .type('Matt Rowan')
  })

  it('should be able to keep track of date input', () => {
    cy.get('input[name="date"]')
      .click()
      .type('12/31')
  })

  it('should be able to keep track of time input', () => {
    cy.get('input[name="time"]')
      .click()
      .type('7:00')
  })

  it('should be able to keep track of guests input', () => {
    cy.get('input[name="guests"]')
      .click()
      .type('6')
  })

  it('should display a new card once a user has submit a form with valid inputs', () => {
    cy.get('input[name="name"]')
      .click()
      .type('Matt Rowan')
      .should('have.value', 'Matt Rowan')
    cy.get('input[name="date"]')
      .click()
      .type('12/31')
      .should('have.value', '12/31')
    cy.get('input[name="time"]')
      .click()
      .type('7:00')
      .should('have.value', '7:00')
    cy.get('input[name="guests"]')
      .click()
      .type('6')
      .should('have.value', '6')
    cy.get('.btn')
      .click()
    cy.get('.card')
      .contains('Matt Rowan')
      .should('be.visible')
  })
})