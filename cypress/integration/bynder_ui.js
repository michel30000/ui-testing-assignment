var locator_input_username = '#inputEmail'
var locator_input_password = '#inputPassword'

var incorrect_username = makeRandomUsername() //Used to circumvent the robot detector script, sorry :)

var correct_username = 'mwsluis@icloud.com'
var correct_password = 'givemeone'


describe('Login with correct credentials', function() {
    it('Logs in with correct credentials', function() {
        cy.visit('https://wave-trial.getbynder.com/login/')

        cy.get(locator_input_username).should('be.enabled').type(correct_username)
        cy.get(locator_input_password).type(correct_password)

        cy.contains('Login').click()

        cy.url()
            .should('include', '/account/dashboard')
        
    })
})


describe('Login with incorrect credentials', function() {
    it('Logs in with incorrect credentials', function() {
        cy.visit('https://wave-trial.getbynder.com/login/')

        cy.get(locator_input_username).should('be.enabled').type(incorrect_username)
        cy.get(locator_input_password).type('fgsfds')
        
        cy.contains('Login').click()

        cy.contains('You have entered an incorrect username or password.')
    })
})

function makeRandomUsername() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    result += '@email.com'

    return result;
}