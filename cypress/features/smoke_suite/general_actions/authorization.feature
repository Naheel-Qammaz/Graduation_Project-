Feature: Authorization login

Scenario: Admin user can see manage tags
    Given login with email "admin@zenhr.com" and password "123456789"
    Then the admin should see the Manage Tags option
    

Scenario: Admin can click and manage tags
    Given login with email "admin@zenhr.com" and password "123456789"
    When admin clicks on manage tags,the page should display the correct content for tags
    And the admin should be redirected to the Manage Tags URL when they click the option

Scenario: Member user cannot manage tags
  Given login with email "user_1@zenhr.com" and password "123456"
  When the user attempts to access Manage Tags by url, a validation message should appear 

