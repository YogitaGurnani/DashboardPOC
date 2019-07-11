sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("pocNameSpace.poc.controller.Home", {

		onInit: function () {
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView()));
			var oData = {
				assetListTile: [{
					background: "https://4.imimg.com/data4/AJ/VJ/MY-180330/hydraulic-pump-500x500.jpg",
					footer: "Equipment 0042",
					contentText: " used in hydraulic drive systems and can be hydrostatic or hydrodynamic",
					subheader: "Hydraulic Pump"
				}, {
					background: "https://ae01.alicdn.com/kf/HTB16lctRpXXXXaIapXXq6xXFXXXA/New-PU-Furniture-Office-Trolley-Swivel-Casters-Rubber-Universal-Rotating-Wheels.jpg_640x640.jpg",
					footer: "Equipment 0039",
					contentText: "Tire rotation is the practice of moving the wheels and tires of an automobile from one position to another",
					subheader: "Rotating Wheels"
				}, {
					background: "https://aussievac.com.au/media/catalog/product/cache/3/thumbnail/65x65/9df78eab33525d08d6e5fb8d27136e95/M/B/MB1200P.jpg",
					footer: "Equipment 0082",
					contentText: "Stage Vacuum Blower for dual vacuum units. Unit has 5.58” diameter motor with 80” of water lift. ",
					subheader: "Vaccum Motor"
				}],
				areaChartTile: []
			};
			// default model for the tiles
			// anything inside will have a named model. 
			// did this coz too lazy to name.
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel);
		},

		onPressGoToAreaDetails: function () {
			this._oComponent.getEventBus().publish("NAV_TO_SECTION", {
				key: "area"
			});
		}
	});

});