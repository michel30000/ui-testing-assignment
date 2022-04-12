var url_wave_trial_login = 'https://wave-trial.getbynder.com/login/'

var locator_input_username = '#inputEmail'
var locator_input_password = '#inputPassword'
var locator_form_nederlands = '#languageSwitch > ul > li:nth-child(1) > form'
var locator_link_homepage = '#login > header > div > ul > li > a'
var locator_link_acceptcookies = '#cookieconsent > div > div > div > div > div.cookiechoices > span > span'
var locator_link_profile = 'body > header > div.admin-bar.clearfix > div.admin-right > ul.admin-options > li:nth-child(1) > a'
var locator_button_support = "#custom-support-form-button"
var locator_button_logout = 'body > header > div.admin-bar.clearfix > div.admin-right > ul.admin-options > li:nth-child(1) > div > ul > li.logout > form > button'
var incorrect_username = makeRandomUsername() //Used to circumvent the robot detector script, sorry :)

var correct_username = 'mwsluis@icloud.com'
var correct_password = 'fuHrav-jejtyp-xyhbu3'


describe('Login with correct credentials', function() {
    it('Logs in with correct credentials', function() {
        cy.visit(url_wave_trial_login)

        cy.get(locator_input_username).should('be.enabled').type(correct_username)

        cy.get(locator_input_password).type(correct_password)

        cy.contains('Login').click()

        cy.url().should('include', '/account/dashboard')
        
        cy.get(locator_link_profile).click()

        cy.get(locator_button_logout).should('be.enabled').click()

        cy.contains('Login')
    })
})

describe('Login with incorrect credentials', function() {
    it('Logs in with incorrect credentials', function() {
        cy.visit(url_wave_trial_login)

        cy.get(locator_input_username).should('be.enabled').type(incorrect_username)

        cy.get(locator_input_password).type('fgsfds')
        
        cy.contains('Login').click()

        cy.contains('You have entered an incorrect username or password.')
    })
})

describe('Change page language to Dutch', function() {
    it('Changes the language to Dutch', function() {
        cy.visit(url_wave_trial_login)

        cy.contains('Language').click()

        cy.get(locator_form_nederlands).submit()

        cy.contains('Inloggen')
    })
})

describe('Click Bynder homepage button', function() {
    it('Clicks the Bynder homepage button', function() {
        cy.visit(url_wave_trial_login)

        cy.get(locator_link_homepage).click()
        
        cy.url().should('include', 'https://www.bynder.com')
        
        cy.get(locator_link_acceptcookies).click()

        cy.contains('Copyright 2022 Bynder')
        
    })
})

describe('Contact support form shows', function() {
    it('Clicks contact support button', function() {
        cy.visit(url_wave_trial_login)

        cy.get(locator_button_support).click()

        cy.contains('Cancel').should('be.enabled')

        cy.contains('Send').should('be.enabled')
    })
})

function makeRandomUsername() {
    //from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    
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