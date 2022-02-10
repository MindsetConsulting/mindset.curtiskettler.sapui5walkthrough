sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("mindset.curtiskettler.sapui5walkthrough.sapui5walkthrough.controller.View1", {
            onInit: function () {
                var oData = {
                    recipient : {
                        name: "World"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            onShowHello : function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                MessageToast.show(sMsg);
            }
        });
    });
