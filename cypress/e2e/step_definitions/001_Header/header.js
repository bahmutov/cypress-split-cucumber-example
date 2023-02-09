Given('I navigate to google main page', () => {
  cy.visit('https://www.google.com/')
})

Then('Logo is visible', () => {
  cy.get('[alt="Google"]').should('be.visible')
})
