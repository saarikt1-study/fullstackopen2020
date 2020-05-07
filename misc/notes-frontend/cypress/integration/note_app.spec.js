describe('Note app', function() {

  it('login fails with wrong password', function() {
    cy.contains('login').click()
    cy.get('#username').type('Tsaarika')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.error')
    .should('contain', 'wrong credentials')

    cy.get('html').should('not.contain', 'Tommi logged in')
  })

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Tommi',
      username: 'Tsaarika',
      password: 'tosiSALAinen'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user) 
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2020')
  })

  it('user can log in', function() {
    cy.contains('login').click()
    cy.get('#username').type('Tsaarika')
    cy.get('#password').type('tosiSALAinen')
    cy.get('#login-button').click()

    cy.contains('Tommi logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'Tsaarika', password: 'tosiSALAinen'})
    })
  
    it('a new note can be created', function() {
      cy.contains('new note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('and a note exists', function () {
      beforeEach(function () {
        cy.createNote({
          content: 'another note cypress',
          important: false
        })
      })

      it('it can be made important', function () {
        cy.contains('another note cypress')
          .contains('make important')
          .click()

        cy.contains('another note cypress')
          .contains('make not important')
      })
    })

    describe('and several notes exist', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })
  
      it('one of those can be made important', function () {
        cy.contains('second note')
          .contains('make important')
          .click()
  
        cy.contains('second note')
          .contains('make not important')
      })
    })
  })
})