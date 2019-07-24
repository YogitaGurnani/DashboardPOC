sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("pocNameSpace.poc.controller.AssetDetails", {
		THINGS_ID : "83E5449C94464D86B7E456B80C7819B2",

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf pocNameSpace.poc.view.AssetDetails
		 */
		onInit: function () {
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView()));
			this._oRouter = this._oComponent.getRouter();
			this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
			this._oRouter.attachRoutePatternMatched(this._onRoutePatternMatched, this);
			this.getAssetDetails();
		
		},
		
		getAssetDetails: function(){
			var sUrl =this._oComponent.getMetadata().getConfig().serviceConfig.getTimeSeriesCall.url.replace("<thingID>", this.THINGS_ID);
			jQuery.ajax({
				method: "GET",
				url: sUrl,
				dataType: "json",
				success: function (oResponse) {
					if(!this.getView().getModel("assetDetails")){
						var oModel = new sap.ui.model.json.JSONModel();
						/*var oData  = {
							firstName : oResponse.firstName || "",
							lastName : oResponse.lastName || ""
						};*/
						oModel.setData(oResponse);
						this.getView().setModel(oModel,"Details");
					}
				}.bind(this),
				error: function () {
					this.LOGGER.error("Failure of service call to get user details enumerations");
				}.bind(this)
			});
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf pocNameSpace.poc.view.AssetDetails
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf pocNameSpace.poc.view.AssetDetails
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf pocNameSpace.poc.view.AssetDetails
		 */
		//	onExit: function() {
		//
		//	}

	});

});