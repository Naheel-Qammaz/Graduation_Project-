Feature: Authentication login
 Scenario: Successful login
    Given User navigate to login page
    When the user enters valid credentials
    | email           | password         |
    | admin@zenhr.com | 123456789        |
Then the user should see a success message with redirection to the dashboard




Scenario: Failed login
    Given User navigate to login page
    When the user enters invalid credentials
    | email           | password         |
    | admin@zenhr.com | 1234et6          |
    Then the user should see error message with redirection to the same login page