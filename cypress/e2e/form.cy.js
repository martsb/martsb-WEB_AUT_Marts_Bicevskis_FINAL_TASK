describe('Form Test', () => {
    context("Validating", () => {
        it('Testing if form fills successfully', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('john.doe@example.com');
        cy.contains('label', 'Male').click();
        cy.get('#userNumber').type(1234567890);
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__day--028').not('.react-datepicker__day--outside-month') .first().click();
        cy.get('.subjects-auto-complete__value-container').type(`${'Economics'}{enter}`);
        cy.contains('label', 'Music').click();
        cy.get('input[type="file"]').selectFile(`cypress/fixtures/files/${'ocr-test.png'}`);
        cy.get('#state').click().get('div[id^=react-select][id*="-option"]').contains('NCR').click();
        cy.get('#city').click().get('div[id^=react-select][id*="-option"]').contains('Delhi').click();
        cy.get('#submit').click();
    
        })
    })
  });
  