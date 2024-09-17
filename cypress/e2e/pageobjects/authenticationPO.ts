import AuthenticationLocators from "../locators/authenticationLocators";
import AuthenticationModel from "../models/authenticationModel";
import { DataTable } from "@badeball/cypress-cucumber-preprocessor";
class AuthenticationPO {
    public static instance: AuthenticationPO;

    public static getInstance(): AuthenticationPO {
        if (this.instance == null) {
            this.instance = new AuthenticationPO();
        }
        return this.instance;
    }
    private constructor() { }

    public navigate() {
        cy.visit("/sessions/new");}


    
    public map_to_object<T extends Object>(datatable: DataTable, type: { new(): T }): T {
        const instance_partial: Partial<T> = {};
        const instance = new type();

        datatable.hashes().forEach((element) => {
            for (const key in element) {
                instance_partial[key] = element[key];
            }
        });
        Object.keys(instance).forEach((key) => {
            instance[key] = instance_partial[key];
        });
        return instance;
    }



    public success_login(data: AuthenticationModel) {
        cy.sendTextToElement(AuthenticationLocators.EMAIL_FIELD, data.email);
        cy.sendTextToElement(AuthenticationLocators.PASSWORD_FIELD, data.password);
        cy.get(AuthenticationLocators.LOGIN_SUBMIT).click();
    }

    public invalid_login(data: AuthenticationModel) {
        cy.sendTextToElement(AuthenticationLocators.EMAIL_FIELD, data.email);
        cy.sendTextToElement(AuthenticationLocators.PASSWORD_FIELD, data.password);
        cy.get(AuthenticationLocators.LOGIN_SUBMIT).click();
        
    }
public check_validation(){

    cy.get('[data-e2e="error-message"]').should('contain.text', 'Invalid email or password');
}

}




export default AuthenticationPO;