import { title } from "process";
import BlogsLocators from "../locators/blogsLocators";
import BlogModel from "../models/blogsModel";

class BlogsPO {
    public static instance: BlogsPO;

    public static getInstance(): BlogsPO {
        if (this.instance == null) {
            this.instance = new BlogsPO();
        }
        return this.instance;
    }
    private constructor() { }

    public navigate() {
        cy.visit("/")
    }

    public  create_blog(title: string, body: string){
        cy.get(BlogsLocators.BLOGS_LINK).click()
        cy.get(BlogsLocators.CREATE_NEW_BLOG).click()
        cy.get(BlogsLocators.BLOG_TITLE_FIELD).type(title)
        cy.get(BlogsLocators.BLOG_BODY_FIELD).type(body)
        cy.get(BlogsLocators.CEEATE_SUBMIT_BUTTON).click()
        cy.wait(500)}

     public verify_sucess_creation(){
        cy.get(BlogsLocators.SUCESS_CREATION).should("contain","Blog was successfully created.")}

        
public validate_error(){
cy.get(BlogsLocators.BLOG_ERROR_MESSAGE).should("contain","Title can't be blank")

}

public update_blog(title: string, body: string){
       cy.get(BlogsLocators.BLOGS_LINK).click()
        cy.get('[data-e2e="show-blog-1"]').click()
        cy.get(BlogsLocators.EDIT_BLOG).click()
        
        cy.get(BlogsLocators.BLOG_TITLE_FIELD).type(title)
        cy.get(BlogsLocators.BLOG_BODY_FIELD).type(body)
        cy.get(BlogsLocators.UPDATE_SUBMIT_BUTTON).click()
        cy.wait(500)
}


public verify_blog_update(){
cy.get(BlogsLocators.SUCESS_CREATION).should("contain","Blog was successfully updated.")}
 

 public try_edit(){
    cy.get(BlogsLocators.BLOGS_LINK).click()
    cy.get('[data-e2e="show-blog-3"]').click()
 }
 public verify_edit_button(){
    cy.get(BlogsLocators.EDIT_BLOG).should('not.exist');

 }

 public destory_blog(){
    cy.get(BlogsLocators.BLOGS_LINK).click()
    cy.get('[data-e2e="show-blog-17"]').click()
    cy.get(BlogsLocators.BLOG_DESTORY).click()


 }
public verify_blog_destroy(){
cy.get(BlogsLocators.SUCESS_CREATION).should("contain","Blog was successfully destroyed.")
}

public try_destroy(){
    cy.get(BlogsLocators.BLOGS_LINK).click()
    cy.get('[data-e2e="show-blog-13"]').click()
 }
 public verify_destroy_button(){
    cy.get(BlogsLocators.BLOG_DESTORY).should('not.exist');

 }
 }   
    
export default BlogsPO;