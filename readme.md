# ui-testing-assignment
This is my first ever cypress/javascript project. It contains tests for the Bynder trial login page.

## Test scenarios
* Login with correct credentials
* Login with incorrect credentials
* Change page language to Dutch
* Click Bynder homepage button


## Running the tests
To run these tests use
* macOs/linux: `docker run -v $PWD:/test -w /test cypress/included:9.5.3`
* PowerShell: `docker run -v ${PWD}:/test -w /test cypress/included:9.5.3`

I have only tested this command on macOs, but it should work in Powershell/Windows as long as your docker daemon is running.

## Notes
I am using the Cypress config option `"chromeWebSecurity": false` to allow the test case "Click Bynder homepage button" to navigate away from the original visit() url.