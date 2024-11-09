import ContactPage from "../support/ContactPage"
import { faker } from '@faker-js/faker';


describe('Restful Booker', () => {
  it('Send Message Admin', () => {
    
    const fname=faker.internet.username(); 
    const faddress=faker.internet.email(); 
    const fcontact=faker.phone.number('###-###-###-###'); 
    const fsubject=faker.lorem.sentence();
    const fmessage=faker.lorem.sentence();


    ContactPage.visit();
    ContactPage.VerifyLogging();
    ContactPage.fillContactForm(fname,faddress,fcontact,fsubject,fmessage);
  
    cy.wait(2000);
    ContactPage.submitForm();
    cy.wait(3000)
    ContactPage.verifyThankYouMessage();

  })
})