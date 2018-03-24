describe('Homepage', () => {
  it('loads', () => {
    cy.visit('https://staging.artsy.net')
    cy
      .title()
      .should(
        'include',
        "Artsy - Discover, Research, and Collect the World's Best Art Online"
      )
  })

  it('contains sections and rails', () => {
    cy.visit('https://staging.artsy.net')
    cy.contains('Browse Works for Sale')
    cy.contains('Works by Popular Artists')
    cy.contains('Featured Shows')
    cy.contains('Artsy Magazine')
  })

  it('allows signup', () => {
    cy.get('[name="name"]')
  })

  xit('allows login', () => {
    const now = Date.now()
    const email = `e2e.test.${now}@artsy.net`
    const password = now

    cy.visit('https://staging.artsy.net')
    cy.contains('Log in').click()
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
  })
})
