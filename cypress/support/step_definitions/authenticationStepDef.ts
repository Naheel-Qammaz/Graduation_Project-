import { DataTable, Given,Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationLocators from "../../e2e/locators/authenticationLocators";
import AuthenticationPO from "../../e2e/pageobjects/authenticationPO";
import AuthenticationModel from "../../e2e/models/authenticationModel";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";


Given ("User navigate to login page", () => {
    AuthenticationPO.getInstance().navigate();
    
});


When ("the user enters valid credentials",(data: DataTable) =>{
let instance = AuthenticationPO.getInstance().map_to_object(data, AuthenticationModel);
  AuthenticationPO.getInstance().success_login(instance);

});

Then ("the user should see a success message with redirection to the dashboard", ()=>{
    cy.get('[data-e2e="flash-notice"]').should('contain.text', 'Login Successful');



})


When ("the user enters invalid credentials",(data: DataTable) =>{
    let instance = AuthenticationPO.getInstance().map_to_object(data, AuthenticationModel);
      AuthenticationPO.getInstance().invalid_login(instance);
    
    });

Then ("the user should see error message with redirection to the same login page", ()=>{
    AuthenticationPO.getInstance().check_validation();

   });

