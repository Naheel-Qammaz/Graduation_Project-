import TagManagmentLocators from "../locators/tagManagmentLocators";

class TagManagmentPO{
    public static instance: TagManagmentPO;

    public static getInstance(): TagManagmentPO {
        if (this.instance == null) {
            this.instance = new TagManagmentPO();
        }
        return this.instance;
    }
    private constructor() { }
     
    
    public verifyTagIsListed(tagName: string) {
        cy.contains(tagName).should('be.visible'); }

    


   public createNewTag(tag: string){
   cy.get(TagManagmentLocators.NEW_TAG).click();
   cy.sendTextToElement(TagManagmentLocators.TAG_INPUT,tag)
   cy.get(TagManagmentLocators.CREATE_TAG).click()
   

   }
   public sucessvalidation(){
   cy.get(TagManagmentLocators.SUCCESS_FLASH).should('contain',' Tag was successfully created.')}

public error_validation(){

    cy.get(TagManagmentLocators.ERROR_MESSAGE).should('contain',"Name has already been taken")
    
}
}
export default TagManagmentPO