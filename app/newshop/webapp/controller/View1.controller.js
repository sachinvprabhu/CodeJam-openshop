sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("com.airbus.newshop.controller.View1", {
            onInit: function () {

            },
            order:function(oEvent){
                let orderQuantity = parseInt(oEvent.getSource().getParent().getItems()[0].getValue());
                let itemPath = oEvent.getSource().getBindingContext().getPath().replace("/","");
                let serviceURL = this.getView().getModel().getServiceUrl();

                $.ajax({
                    type: 'post',
                    url: "/v2"+serviceURL+itemPath+"/order()",
                    data: JSON.stringify({units:orderQuantity}),
                    contentType: "application/json; charset=utf-8",
                    traditional: true,
                    success: function (data) {
                        MessageBox.success("Order Successfull")
                    }
                });
            }
        });
    });
