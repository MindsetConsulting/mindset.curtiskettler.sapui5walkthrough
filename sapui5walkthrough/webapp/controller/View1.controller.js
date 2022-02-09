sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
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
                MessageToast.show("Hello World!");
            }
        });
    });
