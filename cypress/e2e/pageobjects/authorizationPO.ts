import { should } from "chai";
import AuthenticationLocators from "../locators/authenticationLocators";
import AuthorizationLocators from "../locators/authorizationLocators";
class AuthorizationPO {
    public static instance: AuthorizationPO;

    public static getInstance(): AuthorizationPO {
        if (this.instance == null) {
            this.instance = new AuthorizationPO();
        }
        return this.instance;
    }
    private constructor() { }

    public navigate() {
        cy.visit("/sessions/new")
    }

    public enterEmail(email: string) {
        cy.get(AuthenticationLocators.EMAIL_FIELD).type(email); }

    public enterPassword(password: string) {
            cy.get(AuthenticationLocators.PASSWORD_FIELD).type(password); 
            cy.get(AuthenticationLocators.LOGIN_SUBMIT).click()}

 public verifTagExists (){
        cy.get(AuthorizationLocators.MANAGER_TAGS).should("be.visible").click()}
        
    
public clickOnManageTags(){
    cy.get(AuthorizationLocators.MANAGER_TAGS).should("be.visible").click()
    cy.get(AuthorizationLocators.TAG_PAGE).should("contain", "Tags");}

public tagsURLredirection(){

        cy.url().should('eq', 'http://localhost:3000/tags');
        cy.wait(2000)
    }
    public Urlcheck(){
            cy.wait(500)

        cy.visit("/tags", { failOnStatusCode: false })
        
        cy.get(AuthenticationLocators.FLASH_NOTICE).should("contain","Not Authorized")
        cy.url().should('not.eq', 'http://localhost:3000/tags')

}
}

export default AuthorizationPO;