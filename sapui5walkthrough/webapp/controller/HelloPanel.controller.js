sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("mindset.curtiskettler.sapui5walkthrough.sapui5walkthrough.controller.HelloPanel", {
        onShowHello : function () {
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          MessageToast.show(sMsg);
       },
       onOpenDialog : function () {
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "mindset.curtiskettler.sapui5walkthrough.sapui5walkthrough.view.HelloDialog"
				});
            } 
            this.pDialog.then(function(oDialog) {
               oDialog.open();
			   });
		   },
         onCloseDialog : function () {
            this.byId("helloDialog").close();
         }
    });
 });