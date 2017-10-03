public class SLDS_jQueryDataTableController {
	
    @AuraEnabled
       public static List<Contact> fetchContacts() {
           
           List<Contact> lstContacts = [SELECT Id ,LastName, Email, Phone, Fax FROM Contact ];
           return lstContacts;
       }   
}