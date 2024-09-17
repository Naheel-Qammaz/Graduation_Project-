Feature:  Tag Management

Background: 
    When login with email "admin@zenhr.com" and password "123456789"



Scenario: Verify listing of seeded tags
    When admin clicks on manage tags,the page should display the correct content for tags
    Then user should see the seeded tags



Scenario: Verify tag creation
        When admin clicks on manage tags,the page should display the correct content for tags
        When user create a new tag "newTag test11"
          Then user validates the sucess creation


Scenario: Verify duplicate tag creation
    When admin clicks on manage tags,the page should display the correct content for tags
    When user create a new tag "newTag" 
    Then I should see a validation error "Tag already exists"