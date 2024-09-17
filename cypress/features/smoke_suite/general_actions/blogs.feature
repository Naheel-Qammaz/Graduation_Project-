Feature: Create blogs

Scenario: Any Admin user should be to create a new blog (User1)
    When login with email "admin@zenhr.com" and password "123456789"
    Then user can create a blog with title "test1" and body "blog1 body"
    Then Verify that the blog was created successfully

Scenario: Any member user should be to create a new blog (User2)
    When login with email "user_1@zenhr.com" and password "123456"
    Then user can create a blog with title "test2 user2 " and body "blog2 body user2 "
    Then Verify that the blog was created successfully



Scenario: Validate a User create to blog without a title 
  Given login with email "admin@zenhr.com" and password "123456789"
  When user can create a blog with title " " and body "blog without title"
  Then user should see a validation error 'Title can't be blank'
 

Scenario: A user should be able to edit their personal blog
  Given login with email "admin@zenhr.com" and password "123456789"
  When user navigate to the edit page for update the second blog title with "blog title2-edited" and body "blog body 2 edited"
  Then user should see a success message Blog updated successfully


  
 Scenario: User try to edit someone else's blog
    Given login with email "admin@zenhr.com" and password "123456789"
    When user tries to edit the blog second title
    Then the edit button should not exist 
   
 Scenario: A user should be able to destroy their personal blog
  Given login with email "admin@zenhr.com" and password "123456789"
  When user navigate to the destory their blog
  Then user should see a success message Blog has been deleted successfully

    
 Scenario: User try to destroy someone else's blog
    Given login with email "admin@zenhr.com" and password "123456789"
    When user tries to delete the blog second title
    Then the delete button should not exist 