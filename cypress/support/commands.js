// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (username, password) => {
//     cy.get('#sign-in-email').type(username);
//     cy.get('#sign-in-password').type(password);
//     cy.get('.sign-in-submit > div').click();
//   });


Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: 'https://www.campspot.com/api/gator-core/users/sign-in',
      body: {
        user: {
          password: 'AN53super!',
          username: 'prikhodkovn@gmail.com',
        }
      } 
    })
    .its('status')
    .should('equal', 200);
  });