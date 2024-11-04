import ContactPage from "../support/ContactPage"
describe('Restful Booker', () => {
  it('Send Message Admin', () => {
    
    ContactPage.visit();
    ContactPage.fillContactForm(
      'Tharindu Madusanka',
      'Tharindu@example.com',
      '0755252523651',
      'Practice Automation here',
      'Hi, I want to practice some automation scripts here'
    );
    ContactPage.submitForm();
    ContactPage.verifyThankYouMessage();

  })
})