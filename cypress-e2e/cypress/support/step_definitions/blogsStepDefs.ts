import { Given ,When, Then} from "@badeball/cypress-cucumber-preprocessor";
import BlogsLocators from "../../e2e/locators/blogsLocators";
import BlogsPO from "../../e2e/pageobjects/blogsPO";

When ("user can create a blog with title {string} and body {string}", (title: string, body: string) => {
BlogsPO.getInstance().create_blog(title,body)}
)


Then ("Verify that the blog was created successfully", () => {
    BlogsPO.getInstance().verify_sucess_creation()
    
    
    });
Then ("user should see a validation error 'Title can't be blank'",()=>{
        BlogsPO.getInstance().validate_error()


    })
       
   Then ("user navigate to the edit page for update the second blog title with {string} and body {string}", (title: string, body: string)=>{
    BlogsPO.getInstance().update_blog(title,body)}) 
   
Then ("user should see a success message Blog updated successfully", () => {
    BlogsPO.getInstance().verify_blog_update()
    
    
    });


    Then ("user tries to edit the blog second title", () => {
        BlogsPO.getInstance().try_edit()})



      Then("the edit button should not exist",() =>{
        BlogsPO.getInstance().verify_edit_button()

      })
      Then("user navigate to the destory their blog",() =>{
        BlogsPO.getInstance().destory_blog()

      })
      Then("user should see a success message Blog has been deleted successfully",() =>{
        BlogsPO.getInstance().verify_blog_destroy()

      })
      Then ("user tries to delete the blog second title", () => {
        BlogsPO.getInstance().try_destroy()})



      Then("the delete button should not exist",() =>{
        BlogsPO.getInstance().verify_destroy_button()

      })
      