# ui-testing-assignment
This is my first ever cypress/javascript project. It contains tests for the Bynder trial login page. I am unsure of the best approach of writing the tests in Gherkin syntax, in javascript. I think I have already stated I have no prior experience using Cypress and javascript. For a sample of my Gherkin style, see my api testing assignment here https://github.com/michel30000/api-testing-assignment

## Test scenarios
* Login with correct credentials: This test case verifies users can log in using their credentials.
* Login with incorrect credentials: This test case verifies the login page behaves correctly when users enter wrong login credentials.
* Change page language to Dutch: Verifies that users can change the page language, in the case of this test, to Dutch.
* Click Bynder homepage button: Verify that the Bynder homepage button links to the correct url and the page loads.
* Contact support form shows: Verifies that users can click the Support button, and are presented with the 'contact support' form.

## Running the tests
To run these tests use
* macOs/linux: `docker run -v $PWD:/test -w /test cypress/included:9.5.3`
* PowerShell: `docker run -v ${PWD}:/test -w /test cypress/included:9.5.3`

I have only tested this command on macOs, but it should work in Powershell/Windows as long as your docker daemon is running.

## Github actions 
I have also implemented running the tests in github actions. The workflow file .github/workflows/run-cypress-tests.yml defines the process of checking out and running the tests in github actions. The repository is configured to run the workflow on every push. See https://github.com/michel30000/ui-testing-assignment/actions

## Notes
* I am using the Cypress config option `"chromeWebSecurity": false` to allow the test case "Click Bynder homepage button" to navigate away from the original visit() url.

* If you are running a pi-hole in your network, disable it or javascript will throw exceptions loading some content and that will fail the test.