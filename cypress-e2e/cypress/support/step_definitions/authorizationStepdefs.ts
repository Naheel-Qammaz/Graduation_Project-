import { Given, When,Then,DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthorizationLocators from "../../e2e/locators/authorizationLocators";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";



Given("login with email {string} and password {string}",(email: string, password: string) => {
    AuthorizationPO.getInstance().navigate();
   AuthorizationPO.getInstance().enterEmail(email )
   AuthorizationPO.getInstance().enterPassword(password)
})

Then ("the admin should see the Manage Tags option", () =>{
AuthorizationPO.getInstance().verifTagExists();
});

Then ("admin clicks on manage tags,the page should display the correct content for tags", () =>{
    AuthorizationPO.getInstance().clickOnManageTags();

})
Then ("the admin should be redirected to the Manage Tags URL when they click the option",()=>{
    AuthorizationPO.getInstance().tagsURLredirection();

})
When ("the user attempts to access Manage Tags by url, a validation message should appear",()=>{
    AuthorizationPO.getInstance().Urlcheck();

})

    



