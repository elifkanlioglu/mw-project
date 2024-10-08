Feature: Example Playwright and Cucumber Test

  Scenario: Open the homepage
    Given I navigate to "https://google.com"
    Then the page title should be "Google"

  Scenario: Open the homepage
    Given I navigate to "https://mw.qareerltd.com/admin"
    Then the page title should be "mw.qareerltd.com/admin"
