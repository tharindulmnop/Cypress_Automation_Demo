class ContactPage {
    visit() {
        cy.visit('https://automationintesting.online/');
    }

    verifyHeader() {
        cy.get('h1').should('contain', 'Restful');
    }

    fillContactForm(name, email, phone, subject, description) {
        cy.get('[data-testid="ContactName"]').type(name);
        cy.get('[data-testid="ContactEmail"]').type(email);
        cy.get('[data-testid="ContactPhone"]').type(phone);
        cy.get('[data-testid="ContactSubject"]').type(subject);
        cy.get('[data-testid="ContactDescription"]').type(description);
    }

    submitForm() {
        cy.get('#submitContact').click();
    }

    verifyThankYouMessage() {
        cy.get(':nth-child(2) > div > h2').should('contain', 'Thanks');
    }
}

export default new ContactPage();