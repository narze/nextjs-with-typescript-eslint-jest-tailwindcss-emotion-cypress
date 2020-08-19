describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders heading', () => {
    cy.findByText(/Welcome to/i).should('exist')
    cy.findByRole('link', { name: 'Next.js!' }).should('exist')
    cy.findByRole('button', { name: 'Test Button' }).should('exist')

    cy.findByTestId('subtitle').within(() => {
      cy.findByText(/TypeScript/i).should('exist')
      cy.findByText(/ESLint/i).should('exist')
      cy.findByText(/Jest/i).should('exist')
      cy.findByText(/TailwindCSS/i).should('exist')
      cy.findByText(/Emotion/i).should('exist')
      cy.findByText(/Cypress/i).should('exist')
    })

    cy.findByRole('button', { name: '@emotion/core' }).click()
    cy.findByRole('button', { name: '@emotion/react' }).click()
    cy.findByRole('button', { name: '@emotion/styled' }).should('not.exist')
  })
})
