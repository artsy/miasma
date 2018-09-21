describe('Homepage', () => {
  const now = Date.now()
  const email = `e2e.test.${now}@example.com`
  const password = now
  console.log('test creds for this test run', email, password)

  it('loads', () => {
    cy.visit('https://staging.artsy.net')
    cy.title().should(
      'include',
      "Artsy - Discover, Research, and Collect the World's Best Art Online"
    )
  })

  it('contains sections and rails', () => {
    cy.visit('https://staging.artsy.net')
    cy.contains('Browse Works for Sale')
    cy.contains('Works by popular artists')
    cy.contains('Featured shows')
    cy.contains('Artsy Magazine')
  })

  it('allows signup', () => {
    cy.visit('https://staging.artsy.net')
    cy.get('#main-layout-header a[href="/sign_up"]').click()
    cy.get('#react-modal-container input[name="email"]').type(email)
    cy.get('#react-modal-container input[name="password"]').type(password)
    cy.get('#react-modal-container input[name="name"]').type('E2E Test User')
    cy.get('#react-modal-container form > label').click() // terms checkbox
    cy.get('#react-modal-container button').click()
  })

  it('allows login', () => {
    cy.visit('https://staging.artsy.net')
    cy.contains('Log in').click()
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.contains('Log in').click()
    cy.get('#main-layout-header a[href="/user/saves"] svg')
  })
})
