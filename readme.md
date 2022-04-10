# ui-testing-assignment
This is my first ever cypress/javascript project. It contains tests for the Bynder trial login page.

## Running the tests
To run these tests use
* macOs/linux: `docker run -v $PWD:/test -w /test cypress/included:9.5.3`
* PowerShell: `docker run -v ${PWD}:/test -w /test cypress/included:9.5.3`

I have only tested this command on macOs, but it should work in Powershell/Windows as long as your docker daemon is running.