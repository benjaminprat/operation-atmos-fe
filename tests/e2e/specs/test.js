describe('Operation Atmos Website', () => {
  const baseUrl = 'http://localhost:8080/'
  const key = 'f5bb78f7-2da9-4639-9522-6e0786c72a31'
  const citiesAPI = `http://api.airvisual.com/v2/cities?state=Colorado&country=USA&key=${key}`
  const statesAPI = `http://api.airvisual.com/v2/states?country=USA&key=${key}`
  const cityStateAPI = `http://api.airvisual.com/v2/city?city=Denver&state=Colorado&country=USA&key=${key}`
  const nearestAPI = `http://api.airvisual.com/v2/nearest_city?key=${key}`

  it('Should display a header with website name and subheader', () => {
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .visit(baseUrl)
      .get('header')
      .get('h1').should('have.text', 'ActivAir')
      .get('h2').should('have.text', 'Find fresh air for your outdoor activities.')
  })

  it('Should populate a location card with prefilled nearest location data', () => {
    cy.intercept('GET', nearestAPI, { fixture: 'location-thornton' })
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .visit(baseUrl)
      .get('input[name=nearestLocation]').click()
  })

  it('Should populate state and city dropdowns with relevant information', () => {
    cy.intercept('GET', cityStateAPI, { fixture: 'location-denver' })
    cy.intercept('GET', statesAPI, { fixture: 'state-data' })
      .intercept('GET', citiesAPI, { fixture: 'city-data' })
      .visit(baseUrl)
      .get('select#dropdown-states').select('Colorado').should('have.value', 'Colorado')
      .get('select#dropdown-cities').select('Denver').should('have.value', 'Denver')
      .get('input[name=submit]').click()
  })

  it('Should display an error message when the server returns a 400 error', () => {
    cy.intercept('GET', statesAPI, { statusCode: 404 })
      .visit(baseUrl)
      .get('.error-message').should('have.text', 'Please wait a minute and refresh the page. Something went wrong with the server.')
  })

  it('Should display an error message when the server returns a 500 error', () => {
    cy.intercept('GET', statesAPI, { statusCode: 500 })
      .visit(baseUrl)
      .get('.error-message').should('have.text', 'Please wait a minute and refresh the page. Something went wrong with the server.')
  })
})