({
    fetchContactList: function(component, event, helper) {
        
    var action = component.get("c.fetchContacts");
    var self = this;
    action.setCallback(this, function(actionResult) {
        
        component.set("v.isLoading",true);
        component.set("v.contactDetails", actionResult.getReturnValue()); 
        component.set("v.totalRec",actionResult.getReturnValue().length);
        
        setTimeout(function() {
                 $('#lightningDataTable').DataTable({
                     "ordering": true,
                     "paging":true,
                     "search":true,
                     "preDrawCallback": function( settings ) {
           				$('.odd').remove();
                        $('.even').remove();
                     }
        });
        component.set("v.isLoading",false);
    	}, 1000);
      
    });

    $A.enqueueAction(action);
  }
})