/// <reference types= "cypress" />

describe('Masterclass Septima Edicion', () => {

  it("Vamos a utilizar este test para probar los metodos de cypress", () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.contains('span', 'iniciá sesión', { matchCase: false }).dblclick()
    cy.get('form').find('#user');
    cy.get('form').within(() => {
      cy.get('#user').type('pushingit')
      cy.get('#pass').type('123456!')
      cy.contains('Log in').click()
    })
    // cy.get('.css-uukook').eq(1)
    // cy.get('.css-uukook').first()
    // cy.get('.css-uukook').last()
    // cy.get('.css-uukook').first().next()
    // cy.get('.css-uukook').last().prev()
    // cy.get('.css-uukook').first().nextAll()
    // cy.get('.css-uukook').last().prevAll()

    cy.get('#todolistlink').click();
    cy.get('#task').type('Tarea 1')
    cy.contains('button', 'Send').click()
    cy.get('#task').type('Tarea 2')
    cy.contains('button', 'Send').click()
    cy.get('#task').type('Tarea 3')
    cy.contains('button', 'Send').click()
    cy.get('#task').type('Tarea 4')
    cy.contains('button', 'Send').click()
    cy.get('#task').type('Tarea 5')
    cy.contains('button', 'Send').click()
    cy.get('#task').type('Tarea 6')
    cy.contains('button', 'Send').click()

    cy.get('li').first()
    cy.contains('li','Tarea 3').click()
    cy.get('ul').children('li').eq(5).click()
    cy.contains('li','Tarea 1').parent()
    cy.contains('li','Tarea 1').parents('.css-ha1fhc')
    cy.contains('li','Tarea 1').parentsUntil('body').each(elementos =>{
      cy.log(elementos)
    })
    cy.contains('ul','Tarea 1').children('li').each(elemento =>{
      cy.wrap(elemento).as('tarea')
      cy.get('@tarea').find('p').invoke('text').then(texto =>{
        cy.log(texto)
      })
    })
  })

  it("Vamos a utilizar este test para probar los metodos de cypress", () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('#day').find('[value="1"]').nextUntil('[value="10"]')
    cy.get('#day').find('[value="31"]').prevUntil('[value="10"]')
  })
})