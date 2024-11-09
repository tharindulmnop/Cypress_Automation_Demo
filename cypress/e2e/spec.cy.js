import ContactPage from "../support/ContactPage"
describe('Restful Booker', () => {
  it('Send Message Admin', () => {
    
    ContactPage.visit();
    ContactPage.VerifyLogging();
    ContactPage.fillContactForm(
      'Tharindu Madusanka',
      'Tharindu@example.com',
      '0755252523651',
      'Practice Automation here with demo',
      'Hi, I want to practice some automation scripts here'
    );
    cy.wait(2000);
    ContactPage.submitForm();
    cy.wait(3000)
    ContactPage.verifyThankYouMessage();

  })
})