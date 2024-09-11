
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import TagManagmentPO from "../../e2e/pageobjects/tagManagmentPO";


Then('user should see the seeded tags', () => {
  cy.wait(500)
    TagManagmentPO.getInstance().verifyTagIsListed("funny");

    TagManagmentPO.getInstance().verifyTagIsListed("professional")
  });

  Then('user create a new tag {string}', (tagName: string) => {
    TagManagmentPO.getInstance().createNewTag(tagName)})
    
  Then('user validates the sucess creation', ()=>{
TagManagmentPO.getInstance().sucessvalidation()}

)
Then('I should see a validation error "Tag already exists"', ()=>{
  TagManagmentPO.getInstance().error_validation()}
  
  )


