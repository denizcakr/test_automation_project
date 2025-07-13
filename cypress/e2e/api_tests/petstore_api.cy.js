describe('Petstore API Testleri', () => {
  const baseUrl = 'https://petstore.swagger.io/v2'

  it('GET - Pet Getir', () => {
    cy.request(`${baseUrl}/pet/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1)
    })
  })

  it('POST - Pet Oluştur', () => {
    cy.request('POST', `${baseUrl}/pet`, {
      id: 999,
      name: 'oogi',
      status: 'available'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('oogi')
    })
  })

  it('PUT - Pet Güncelle', () => {
    cy.request('PUT', `${baseUrl}/pet`, {
      id: 999,
      name: 'oogiboy',
      status: 'sold'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('oogiboy')
    })
  })

  it('DELETE - Pet Sil', () => {
    cy.request('DELETE', `${baseUrl}/pet/999`).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})